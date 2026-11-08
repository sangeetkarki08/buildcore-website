/* BuildCore website v2: contacts from config.js, motion and small interactions. No libraries. */
(function(){
  var C = window.BC_CONFIG || {};
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  /* ---------- contacts from config.js ---------- */
  function fill(sel, val, fn){ document.querySelectorAll(sel).forEach(function(el){ if(val){ fn(el,val); el.classList.remove('ph'); } }); }
  fill('[data-c="phone"]', C.phone, function(el,v){ el.textContent=v; if(el.tagName==='A') el.href='tel:'+v.replace(/\s/g,''); });
  fill('[data-c="email"]', C.email, function(el,v){ el.textContent=v; if(el.tagName==='A') el.href='mailto:'+v; });
  fill('[data-c="contact"]', C.contact, function(el,v){ el.textContent=v; });
  fill('[data-c="company"]', C.company, function(el,v){ el.textContent=v; });
  fill('[data-c="address"]', C.address, function(el,v){ el.textContent=v; });
  fill('[data-c="whatsapp"]', C.whatsapp, function(el,v){ el.href='https://wa.me/'+v; el.style.display=''; });
  fill('[data-c="setup"]', C.setupUrl, function(el,v){ el.href=v; el.classList.remove('off'); });
  document.querySelectorAll('[data-c="setup"].off').forEach(function(el){ el.addEventListener('click',function(e){ if(!el.classList.contains('off')) return; e.preventDefault(); alert('The installer link is being set up. Please contact us for the installer.'); }); });
  document.querySelectorAll('[data-c="year"]').forEach(function(el){ el.textContent = new Date().getFullYear(); });

  /* ---------- header, progress bar, back to top ---------- */
  var top = document.querySelector('.top'), bar = document.querySelector('.sbar'), tt = document.querySelector('.totop');
  var burger = document.querySelector('.burger'), nav = document.querySelector('.nav');
  if (burger && nav) burger.addEventListener('click', function(){ nav.classList.toggle('open'); });
  if (tt) tt.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
  var ticking = false, scrollFns = [];
  function onScroll(){
    var y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    if (top) top.classList.toggle('solid', y > 30);
    if (bar) bar.style.width = (h > 0 ? 100*y/h : 0) + '%';
    if (tt) tt.classList.toggle('show', y > 900);
    scrollFns.forEach(function(f){ f(y); });
    ticking = false;
  }
  window.addEventListener('scroll', function(){ if(!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, {passive:true});

  /* ---------- reveal on scroll (+ stagger) ---------- */
  document.querySelectorAll('[data-stagger]').forEach(function(p){
    Array.prototype.forEach.call(p.children, function(c,i){ if(!c.hasAttribute('data-r')) c.setAttribute('data-r',''); c.style.setProperty('--i', i % 8); });
  });
  var counters = [];
  if ('IntersectionObserver' in window && !RM){
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); if(e.target.dataset.count!==undefined) count(e.target); } }); }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('[data-r],.flow,[data-count]').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('[data-r],.flow').forEach(function(el){ el.classList.add('in'); });
  }

  /* ---------- counters ---------- */
  function count(el){
    var to = parseFloat(el.dataset.count), suf = el.dataset.suf || '', pre = el.dataset.pre || '', dur = 1800, t0 = null;
    function step(t){ if(!t0) t0 = t; var p = Math.min(1,(t-t0)/dur), e = 1-Math.pow(1-p,4);
      var v = to*e; el.textContent = pre + (to % 1 ? v.toFixed(1) : Math.round(v).toLocaleString('en-IN')) + suf;
      if(p < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  if (RM) document.querySelectorAll('[data-count]').forEach(function(el){ el.textContent=(el.dataset.pre||'')+el.dataset.count+(el.dataset.suf||''); });

  /* ---------- rotating words in hero ---------- */
  document.querySelectorAll('.rot').forEach(function(r){
    var w = r.querySelectorAll('span'), i = 0; if (w.length < 2 || RM) return;
    function fit(){ r.style.width = w[i].offsetWidth + 'px'; }
    r.style.transition = 'width .6s cubic-bezier(.2,.7,.2,1)'; fit(); window.addEventListener('resize', fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    setInterval(function(){ var a = w[i]; a.classList.remove('on'); a.classList.add('out');
      setTimeout(function(){ a.classList.remove('out'); }, 700);
      i = (i+1) % w.length; w[i].classList.add('on'); fit(); }, 2600);
  });

  /* ---------- hero: tilted dashboard straightens as you scroll ---------- */
  var br = document.querySelector('.browser');
  if (br && !RM){
    scrollFns.push(function(y){ var p = Math.min(1, y/420); br.style.transform = 'rotateX('+(20*(1-p))+'deg) scale('+(0.94+0.06*p)+')'; });
  }

  /* ---------- parallax for blobs ---------- */
  var blobs = document.querySelectorAll('.blob');
  if (blobs.length && !RM) scrollFns.push(function(y){ if(y > 1200) return; blobs.forEach(function(b,i){ b.style.translate = '0 '+(y*(0.15+i*0.08))+'px'; }); });

  /* ---------- timeline fill ---------- */
  document.querySelectorAll('.tl').forEach(function(tl){
    var f = document.createElement('i'); f.className = 'fill'; tl.prepend(f);
    scrollFns.push(function(){ var r = tl.getBoundingClientRect(), p = (innerHeight*0.7 - r.top) / r.height; f.style.height = Math.max(0,Math.min(1,p))*100 + '%'; });
  });

  /* ---------- word-by-word light-up quote ---------- */
  document.querySelectorAll('.quote[data-words]').forEach(function(q){
    var html = q.innerHTML.split(/(\s+|<[^>]+>)/).map(function(t){ return (!t.trim() || t[0]==='<') ? t : '<span class="word">'+t+'</span>'; }).join('');
    q.innerHTML = html; var ws = q.querySelectorAll('.word');
    if (RM){ ws.forEach(function(w){ w.classList.add('lit'); }); return; }
    scrollFns.push(function(){ var r = q.getBoundingClientRect(), p = (innerHeight*0.85 - r.top) / (innerHeight*0.55);
      var n = Math.round(Math.max(0,Math.min(1,p)) * ws.length); ws.forEach(function(w,i){ w.classList.toggle('lit', i < n); }); });
  });

  /* ---------- spotlight cards follow the mouse ---------- */
  document.querySelectorAll('.spot').forEach(function(c){
    c.addEventListener('mousemove', function(e){ var r = c.getBoundingClientRect(); c.style.setProperty('--mx',(e.clientX-r.left)+'px'); c.style.setProperty('--my',(e.clientY-r.top)+'px'); });
  });

  /* ---------- 3D tilt on screenshots ---------- */
  if (!RM && matchMedia('(hover:hover)').matches) document.querySelectorAll('[data-tilt]').forEach(function(el){
    el.addEventListener('mousemove', function(e){ var r = el.getBoundingClientRect(), x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
      el.style.transform = 'perspective(1200px) rotateY('+(x*7)+'deg) rotateX('+(-y*7)+'deg) translateY(-4px)'; });
    el.addEventListener('mouseleave', function(){ el.style.transform = ''; });
  });

  /* ---------- sub nav highlights the section in view ---------- */
  var sub = document.querySelectorAll('.subnav a');
  if (sub.length){
    var secs = Array.prototype.map.call(sub, function(a){ return document.querySelector(a.getAttribute('href')); });
    scrollFns.push(function(){ var k = -1; secs.forEach(function(s,i){ if(s && s.getBoundingClientRect().top < 200) k = i; });
      sub.forEach(function(a,i){ a.classList.toggle('on', i === k); }); });
  }

  /* ---------- hero canvas: drifting survey points joined by lines ---------- */
  var cv = document.getElementById('net');
  if (cv && !RM){
    var ctx = cv.getContext('2d'), pts = [], W, H, DPR = Math.min(2, window.devicePixelRatio||1), mouse = {x:-999,y:-999};
    function size(){ W = cv.offsetWidth; H = cv.offsetHeight; cv.width = W*DPR; cv.height = H*DPR; ctx.setTransform(DPR,0,0,DPR,0,0);
      var n = Math.min(90, Math.round(W*H/16000)); pts = [];
      for (var i=0;i<n;i++) pts.push({x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.35, vy:(Math.random()-.5)*.35, a:Math.random()<.18}); }
    size(); window.addEventListener('resize', size);
    cv.parentNode.addEventListener('mousemove', function(e){ var r = cv.getBoundingClientRect(); mouse.x = e.clientX-r.left; mouse.y = e.clientY-r.top; });
    var vis = true; new IntersectionObserver(function(es){ vis = es[0].isIntersecting; }).observe(cv);
    (function loop(){
      requestAnimationFrame(loop); if(!vis) return;
      ctx.clearRect(0,0,W,H);
      for (var i=0;i<pts.length;i++){ var p = pts[i]; p.x += p.vx; p.y += p.vy;
        if(p.x<0||p.x>W) p.vx*=-1; if(p.y<0||p.y>H) p.vy*=-1;
        var dx = p.x-mouse.x, dy = p.y-mouse.y, d = dx*dx+dy*dy; if(d < 14000){ p.x += dx*.012; p.y += dy*.012; }
        for (var j=i+1;j<pts.length;j++){ var q = pts[j], ex = p.x-q.x, ey = p.y-q.y, e = ex*ex+ey*ey;
          if (e < 17000){ ctx.strokeStyle = 'rgba(94,231,240,'+(0.16*(1-e/17000))+')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y); ctx.stroke(); } }
        ctx.fillStyle = p.a ? 'rgba(245,165,36,.9)' : 'rgba(180,220,255,.55)';
        ctx.beginPath(); ctx.arc(p.x,p.y,p.a?2.2:1.4,0,6.283); ctx.fill(); }
    })();
  }

  /* ---------- lightbox ---------- */
  var lb = document.createElement('div'); lb.className='lb';
  lb.innerHTML='<button class="x" aria-label="Close">×</button><div class="lbin"></div><p></p>';
  document.body.appendChild(lb);
  function close(){ lb.classList.remove('open'); lb.querySelector('.lbin').innerHTML=''; document.body.style.overflow=''; }
  lb.addEventListener('click', function(e){ if(e.target===lb||e.target.classList.contains('x')||e.target.classList.contains('lbin')) close(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') close(); });
  window.bcOpen = function(html, cap){ lb.querySelector('.lbin').innerHTML=html; lb.querySelector('p').textContent=cap||''; lb.classList.add('open'); document.body.style.overflow='hidden'; };
  document.querySelectorAll('.shot, .gal figure, .browser').forEach(function(el){
    el.addEventListener('click', function(){
      var img = el.querySelector('img'); if(!img) return; var cap = el.getAttribute('data-cap') || img.alt || '';
      window.bcOpen('<img src="'+img.getAttribute('src')+'" alt="">', cap);
    });
  });

  /* ---------- gallery filters ---------- */
  document.querySelectorAll('.filters button').forEach(function(b){ b.addEventListener('click', function(){
    document.querySelectorAll('.filters button').forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on');
    var f = b.dataset.f; document.querySelectorAll('.gal figure').forEach(function(el){ el.style.display = (f==='all'||el.dataset.g===f) ? '' : 'none'; });
  }); });

  /* ---------- demo form -> e-mail or WhatsApp ---------- */
  var fm = document.getElementById('demo-form');
  if (fm) fm.addEventListener('submit', function(e){
    e.preventDefault();
    var d = new FormData(fm), lines=[]; d.forEach(function(v,k){ if(v) lines.push(k+': '+v); });
    var body = lines.join('\n');
    if (C.email) location.href='mailto:'+C.email+'?subject='+encodeURIComponent('BuildCore demo request')+'&body='+encodeURIComponent(body);
    else if (C.whatsapp) location.href='https://wa.me/'+C.whatsapp+'?text='+encodeURIComponent('BuildCore demo request\n'+body);
    else alert('Thank you. Contact details are being added to this site; please call or e-mail us directly.');
  });

  onScroll();
})();
