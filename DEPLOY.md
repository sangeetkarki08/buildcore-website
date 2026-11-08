# BuildCore website: how to put it online (free)

The site is plain HTML/CSS/JS. No build step. Open `index.html` in a browser to preview it.

## 1. Fill in your details (2 minutes)
Edit `assets/config.js`: company, contact person, phone, WhatsApp, e-mail, address, and `setupUrl`
(the link to the 83 MB installer, see step 4). Every orange `[Phone]`-style placeholder fills in by itself.

## 2a. Vercel (recommended, you already use it)
1. On GitHub create a NEW repository, e.g. `buildcore-website` (public or private).
2. GitHub Desktop: File > Add local repository > choose this `website` folder > "create a repository" > Publish.
   (Or on github.com: Add file > Upload files, drag everything in this folder, Commit.)
3. vercel.com > Add New > Project > import `buildcore-website` > Framework preset: **Other** > Deploy.
4. You get `https://buildcore-website.vercel.app`. Add your own domain in Project > Settings > Domains.
Do NOT put it in the existing "Buildcore" Vercel project; that one is the web app.

## 2b. GitHub Pages (alternative)
Repository > Settings > Pages > Source: Deploy from a branch > `main` / root > Save.
Site appears at `https://<username>.github.io/buildcore-website/`.

## 3. Updating
Change a file, commit and push (GitHub Desktop: Commit, Push). Vercel/Pages redeploy in about a minute.

## 4. The installer
`BuildCore_Setup_2.35.0_exe.zip` (83 MB) is too big to keep in the site. Upload it to
GitHub > your repo > Releases > Draft a new release > attach the file > Publish, copy the file's link
and paste it into `setupUrl` in `assets/config.js`. Until then the button asks visitors to contact you.
The 2.48.0 update, user guide and brochure are already in `downloads/`.

## 5. Videos
Lessons are listed in `assets/lessons.js` (21 lessons of series 2, 7 chapters, each with written steps; the old 25 are in `lessons_v1.js`).
The videos are in the `Buildcore Tutorial` folder and each lesson's `video:` points there (`Buildcore%20Tutorial/NN-name.mp4`), so they play straight from the site. A YouTube link also works.
Lessons without a video show "Video coming soon" and their steps.

## Pages (v2, 2026-11-08: modern animated design)
index (home) · vision (vision, principles, history, roadmap) · features (all modules + switches) · editions (desktop, office, sites, server, licence) · tutorials (21-lesson course) · screenshots · releases (what's new + roadmap) · docs (guide, FAQ) · download · contact (plans + demo form) · 404

All motion is plain CSS/JS in assets/style.css and assets/site.js (no libraries, no build step). It switches off for visitors who ask their system for reduced motion.

## Redeploying v2 over the live v1 site
Replace the files in your `buildcore-website` repository folder with this folder's contents (keep your own `assets/config.js`), then Commit and Push in GitHub Desktop. Vercel redeploys in about a minute.
