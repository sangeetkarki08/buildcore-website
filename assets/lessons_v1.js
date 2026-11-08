/* ================================================================
   BuildCore video course. One entry per lesson.
   To publish a video, set  video:  to either
     - a file in tutorials/videos/, e.g. "tutorials/videos/01-install.mp4"
     - or a YouTube link, e.g. "https://youtu.be/XXXXXXXXXXX"
   Lessons with video: "" show "Video coming soon" and the written steps.
   ================================================================ */
window.BC_COURSE = [
 { ch:"Getting started", lessons:[
  { id:"01", title:"What BuildCore is and how it is organised", dur:"3 min", thumb:"home_company", video:"tutorials/videos/01-what-buildcore-is.mp4",
    about:"The modules screen, Company and Project Workspaces, and how one database links site, store, billing and accounts.",
    steps:["Sign in and look at the modules screen: 14 modules from Dashboard to Administration.","Company Workspace shows the whole company; a Project Workspace shows one project.","Use the badge at the top to switch workspace or project.","Ctrl+K opens the command palette: type any screen or record to jump to it."]},
  { id:"02", title:"Install, update and activate", dur:"3 min", thumb:"backup", video:"tutorials/videos/02-install-update-activate.mp4",
    about:"Install on a new computer, update an existing one to 2.48, and activate it with a licence key.",
    steps:["New computer: run BuildCore_Setup_2.35.0.exe (More info › Run anyway), click Install, then Finish.","Then run UPDATE_BuildCore_Complete_2.48.0.bat; wait for “Done: BuildCore is updated to 2.48.0”.","On first start click Copy next to the request code and send it to your supplier.","Paste the licence key (starts BCK1-) and click Activate."]},
  { id:"03", title:"Company set-up: the first-day list", dur:"3 min", thumb:"projects", video:"tutorials/videos/03-company-setup.mp4",
    about:"Settings, chart of accounts, opening balances, fiscal year, projects, materials and parties, in the right order.",
    steps:["Administration › Settings: company name, PAN, VAT %, tolerances, PO approval limit.","Accounts › Chart of accounts: one account per bank; type opening balances.","Accounts › Periods and Fiscal years: periods from Shrawan 1.","Master data › Projects, Materials, Vendors & clients: use Paste from Excel on each list."]},
  { id:"04", title:"People, jobs and project access", dur:"2 min", thumb:"users", video:"tutorials/videos/04-people-jobs-access.mp4",
    about:"Add each person with a job and where they work; copy a project team; check access.",
    steps:["Administration › Users › New person: name, username, password.","Choose the Job; the line under it says which modules it shows.","Where: Head office (all projects) or These projects, then tick the sites.","Administration › Project teams › Copy team from… to fill a new project quickly."]},
  { id:"05", title:"Finding your way: menus, lists, keys and dates", dur:"2 min", thumb:"portfolio", video:"tutorials/videos/05-finding-your-way.mp4",
    about:"Side menu, lists with sort, filter and pin, Tally-style keys, and AD or BS dates.",
    steps:["Click a column title to sort; pin the columns you use.","Every list has Export and most have Paste from Excel.","F10 then a letter starts a new entry (F10 › I = new IPC).","Switch dates between English (AD) and Nepali (BS) from the user menu."]}
 ]},
 { ch:"Planning the project", lessons:[
  { id:"06", title:"BOQ by location with short codes", dur:"2 min", thumb:"boq_summary", video:"tutorials/videos/06-boq-by-location.mp4",
    about:"Import the BOQ with locations, give each line a short code (HW-M25) and read the summary by item.",
    steps:["Commercial & billing › BOQ control › Short codes › Import BOQ with locations.","Check the preview: each line gets location + item code.","Summary by item adds the same item across locations and warns about double counting.","Short codes appear in DPR, requisition, PO and IPC pickers."]},
  { id:"07", title:"Rate analysis and control budget", dur:"2 min", thumb:"control", video:"tutorials/videos/07-rate-analysis-control-budget.mp4",
    about:"Build the control budget from the rate analysis and give every cost a cost code.",
    steps:["Resources & rates › Rate analysis: use DoR / DUDBC norms or your own.","Commercial & billing › Cost codes: keep the default list or add your own.","Control budget › From rate analysis fills the budget per BOQ item and cost code.","Purchase requests then show the budget left for the cost code."]},
  { id:"08", title:"Schedule and WBS", dur:"2 min", thumb:"sched", video:"tutorials/videos/08-schedule-and-wbs.mp4",
    about:"Activities with planned quantities and dates, linked to BOQ items, so progress comes from the DPR.",
    steps:["Site work & DPR › Schedule & WBS: add the WBS and activities.","Give each activity its BOQ item, planned quantity, start and finish.","Approved DPR quantities update the activity progress by themselves."]}
 ]},
 { ch:"Site work", lessons:[
  { id:"09", title:"Writing the daily progress report (DPR)", dur:"3 min", thumb:"dpr", video:"tutorials/videos/09-writing-the-dpr.mp4",
    about:"One DPR per project, date and shift: work done, labour, machines, problems, quality and photos.",
    steps:["Site work & DPR › Daily progress (DPR) › New DPR (smart form).","Basics: date, shift, work front, weather; the summary fills from the work rows.","Work done: pick each BOQ item by short code, type the reported quantity.","Labour copies from yesterday; change only what differs. Submit."]},
  { id:"10", title:"Machine lines that fill themselves", dur:"2 min", thumb:"dpr_machines", video:"tutorials/videos/10-machine-lines.mp4",
    about:"Opening meter = last closing, operator from the register, hours as you type, idle or breakdown asked.",
    steps:["In Manpower & equipment, add the machine: opening meter and operator fill in.","Type the closing reading; hours and idle time are worked out.","If hours are short of the shift, choose idle or breakdown and the reason.","On approval each line becomes a logsheet day and machine cost."]},
  { id:"11", title:"Accepting quantities and the issue register", dur:"2 min", thumb:"old_dpr_register", video:"tutorials/videos/11-accept-quantities-issues.mp4",
    about:"The QS accepts quantities beside the site's figures; problems carry over until closed.",
    steps:["Open a submitted DPR; the QS types the accepted quantity per line.","Approve: progress, cost, logsheets and events update together.","Continuing problems stay in the issue register; add today's lost hours to them.","A delay with “make an event” ticked goes to Events & claims."]}
 ]},
 { ch:"Store and procurement", lessons:[
  { id:"12", title:"Purchase request to purchase order", dur:"2 min", thumb:"pr_prices", video:"tutorials/videos/12-purchase-request-to-po.mp4",
    about:"Requests with past prices, quotation comparison (L1) and POs with stock, budget and cash checks.",
    steps:["Procurement › Purchase request: the rate fills from this project's posted GRNs.","Past prices panel shows the last purchases; other projects are marked.","Quotation comparison marks L1; choosing another supplier needs a reason.","Purchase order: the approval check shows stock, budget left and cash."]},
  { id:"13", title:"Receiving goods (GRN), issue and stock", dur:"2 min", thumb:"grn", video:"tutorials/videos/13-goods-received-issue-stock.mp4",
    about:"Record what arrived at site, issue it to work and keep stock right.",
    steps:["Store & inventory › Goods received › New (Alt+F9): store, supplier, PO.","Type challan number, vehicle, accepted and rejected quantity.","Attach the challan scan in Papers, Save, then Post.","Issue materials to the BOQ item; Stock shows balance and value per store."]},
  { id:"14", title:"Matching receipts, VAT bills and payments", dur:"2 min", thumb:"match_vendor", video:"tutorials/videos/14-match-receipts-bills-payments.mp4",
    about:"Three-way match: goods received, bill as printed and money paid, with every gap per vendor.",
    steps:["Accounts types the purchase bill exactly as printed.","Procurement › Purchase bills › Match receipts, bills & payments: one row per vendor.","Link each bill line to the goods, even an “other item” line, with a reason.","Bill vs actual shows the auditor what was billed and what really arrived."]}
 ]},
 { ch:"Billing and contract", lessons:[
  { id:"15", title:"Measurements and IPC billing", dur:"2 min", thumb:"ipc", video:"tutorials/videos/15-measurements-ipc.mp4",
    about:"From verified measurements to a certified IPC with VAT, TDS, retention and advance recovery.",
    steps:["Commercial & billing › Measurements › New measurement; have it verified.","IPC billing › New IPC (F10 › I) fills the measurements not yet billed.","Check advance recovery, retention, VAT and TDS, then Submit.","Certify records what the consultant allowed and posts the client invoice."]},
  { id:"16", title:"Variations, contracts and claims", dur:"2 min", thumb:"claims", video:"tutorials/videos/16-variations-contracts-claims.mp4",
    about:"Variations, one contract register, notices with deadlines and the claims register.",
    steps:["Variations: billing beyond revised quantity waits for an approved variation.","Contracts & letters: contracts, letters, notices and bonds in one place.","Employer and neutral delays show their notice deadline on the dashboard.","Claims register: each claim with its events, amount and status."]}
 ]},
 { ch:"Equipment", lessons:[
  { id:"17", title:"Machine register and monthly logsheets", dur:"3 min", thumb:"eq_sheet", video:"tutorials/videos/17-machine-register-logsheets.mp4",
    about:"Logsheets built from the DPR, per English or Nepali month, submitted and approved.",
    steps:["Equipment & machines › Register: machine, operator, rate card, maintenance plan.","Monthly logsheets (Alt+F11): each approved DPR machine line is a logsheet day.","Add paper fields if you use them, Submit, and have someone else approve.","Keep sheets per Nepali month if your company works in BS months."]},
  { id:"18", title:"Machine cost, hire and machine P&L", dur:"2 min", thumb:"eq_pl", video:"tutorials/videos/18-machine-cost-hire-pl.mp4",
    about:"Cost per hour, one depreciation per machine and month, hire bills from approved hours and P&L per machine.",
    steps:["Hours & output per machine shows hours, output and output per hour.","Cost per hour comes from fuel, repairs, operator and depreciation.","Hire bills are made from approved hours only.","Machine P&L compares what each machine earned and cost."]}
 ]},
 { ch:"Accounts and cash", lessons:[
  { id:"19", title:"Vouchers, posting queue and the Tally-style Gateway", dur:"2 min", thumb:"tl_gateway", video:"tutorials/videos/19-vouchers-posting-queue-gateway.mp4",
    about:"Documents post themselves; accounts approves the queue, or enters F4–F7 vouchers the Tally way.",
    steps:["Accounts › Accounts posting queue: check and post what site and store sent.","Accounts › Gateway (Tally-style): V vouchers, K day book, T trial balance, P P&L, B balance sheet.","F11 Features turns the Tally screens on; Group mapping places each account.","F4 contra, F5 payment, F6 receipt, F7 journal; Ctrl+A to accept."]},
  { id:"20", title:"Payment requests, wages and petty cash", dur:"2 min", thumb:"tl_payment", video:"tutorials/videos/20-payment-requests-wages-petty-cash.mp4",
    about:"Payment requests with approvals, wage sheets from the DPR, salaries and site petty cash.",
    steps:["Payments & receipts › Payment requests: verify documents, accounts, cash, approve, pay.","Wages: the wage sheet fills from approved DPR labour.","Petty cash: site imprest with its own vouchers and top-ups.","Papers rules can require a scan before a payment posts."]},
  { id:"21", title:"13-week cash forecast and funding gap", dur:"2 min", thumb:"cash", video:"tutorials/videos/21-cash-forecast-funding-gap.mp4",
    about:"See a cash shortage weeks before it happens, and the actions that close it.",
    steps:["Accounts › Cash forecast & ratios: week 1 is this week.","Money in: promised, certified, IPCs awaiting certification, retention.","Money out: bills, wages, VAT, TDS, loans and payment requests.","Funding gap lists the actions that close it and the cost of a loan."]},
  { id:"22", title:"Bank reconciliation, VAT and TDS", dur:"1 min", thumb:"old_fcc", video:"tutorials/videos/22-bank-reconciliation-vat-tds.mp4",
    about:"Import the bank statement, reconcile, and read the VAT and TDS registers.",
    steps:["Accounts › Bank reconciliation › Statement import: load the bank's Excel or CSV.","Match each line; unmatched lines become vouchers with one click.","Books, statements and tax: VAT register as bills were printed, TDS by section."]}
 ]},
 { ch:"Control and month-end", lessons:[
  { id:"23", title:"Dashboard: Needs attention and This month", dur:"2 min", thumb:"dash_full", video:"tutorials/videos/23-dashboard-needs-attention.mp4",
    about:"What to look at every morning: grouped alerts, contract notices, this month's figures.",
    steps:["Needs attention: Important, This week, Review, For info.","This month: work done, billed, received, paid and cost for the month.","To complete your figures lists what is still missing (budgets, opening balances).","Click any line to open the record behind it."]},
  { id:"24", title:"Cost to complete, CVR and the monthly close", dur:"2 min", thumb:"old_ctc", video:"tutorials/videos/24-cost-to-complete-cvr-close.mp4",
    about:"Forecast profit per BOQ item, CVR, and the eight-step monthly close signed by QS, accounts and PM.",
    steps:["CVR and forecast › Cost to complete & profit: per BOQ item, every month.","Profit is forecast only where a cost estimate exists, never a false 100%.","Commercial & billing › Project close: work through the eight steps.","Signed by QS, project accountant and PM; the director locks the month."]},
  { id:"25", title:"Reports, backups and working from several places", dur:"2 min", thumb:"rg_machine", video:"tutorials/videos/25-reports-backups-several-places.mp4",
    about:"Report generator, daily backups, office network, site packs and the server edition.",
    steps:["Tools & views › Report generator: 42 sources, your own columns and filters.","Administration › Backup & restore › Download a backup now; keep a copy off the PC.","Team › Share this computer with the office network: others open it in a browser.","Site with no internet: Administration › Site packs, by pen drive or e-mail."]}
 ]}
];
