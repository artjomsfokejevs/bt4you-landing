// ============================================================
//  BT4YOU Executive Bot — landing copy (single source of truth)
//  Positioning: a digital executive operating system.
//  Edit text here; components stay untouched.
// ============================================================

export const brand = {
  name: "BT4YOU",
  product: "Executive Operating System",
  full: "BT4YOU Executive Operating System",
}

export const nav = {
  links: [
    { label: "Thesis", href: "#thesis" },
    { label: "Operating model", href: "#model" },
    { label: "Control", href: "#control" },
    { label: "Ecosystem", href: "#systems" },
    { label: "Security", href: "#security" },
    { label: "Founder", href: "#about" },
  ],
  cta: "Request access",
}

export const hero = {
  badge: "BT4YOU · EXECUTIVE OPERATING SYSTEM",
  title: ["An operating system for", "running the whole company."],
  subtitle:
    "BT4YOU is a digital executive layer. It turns your company structure, product policy, business model, and OKRs into a living matrix of accountability — then tracks every stakeholder, meeting, and decision against the goal, every single day.",
  primaryCta: "Request access",
  secondaryCta: "See the operating model",
  note: "Built and run by the team behind Alps2Alps · 21 countries · in production",
}

export const heroStats = [
  { value: "1", label: "Source of truth for the entire executive layer" },
  { value: "24/7", label: "Tracking of every stakeholder against the goal" },
  { value: "5", label: "Connected systems — four that run the business, one that builds them" },
]

// — Trust strip (social proof) —
export const trust = {
  label: "Running in production across the group",
  names: ["Alps2Alps", "Skipasser", "Mountly", "TransferHub"],
}

// — Security & data —
export const security = {
  eyebrow: "SECURITY & DATA",
  title: "Built to enterprise standards from day one.",
  body: "Your most sensitive data — finances, conversations, decisions — lives here. It's protected accordingly, with the controls a serious organisation expects.",
  items: [
    { icon: "globe", title: "EU data residency", body: "Hosted in the European Union, in the same region as your business. GDPR by design, not as an afterthought." },
    { icon: "lock", title: "Encrypted end to end", body: "Encrypted in transit and at rest. Secrets are injected at runtime and never live in the codebase." },
    { icon: "key", title: "Granular access & SSO", body: "Role-based access per function and per person, with single sign-on for your whole team." },
    { icon: "ledger", title: "Append-only audit trail", body: "Every action — who, what, when, from where — written to an immutable log. Nothing is ever silently changed." },
    { icon: "vault", title: "Your data stays yours", body: "Single-tenant by default. Your data is never used to train anyone else's models." },
    { icon: "human", title: "Human-in-the-loop", body: "AI proposes; your people approve. Financial postings and key decisions always require a human." },
  ],
}

// — Manifesto / why this exists —
export const thesis = {
  eyebrow: "THE THESIS",
  title: "The hardest problem in business isn’t capital or technology. It’s managing people.",
  paragraphs: [
    "When responsibility lives in people’s heads, ownership stays implicit, decisions get lost between meetings, and organisations quietly bleed efficiency. You feel it as missed follow-ups, blurred accountability, and strategy that never reaches the front line.",
    "BT4YOU answers it with a single idea: a digital matrix of accountability. Every responsibility is made explicit, delegated to an owner, and wrapped in an automated process — so execution no longer depends on who remembers what.",
  ],
  contrast: {
    without: {
      label: "WITHOUT BT4YOU",
      points: [
        "Strategy lives in slides nobody revisits",
        "Decisions evaporate after the meeting ends",
        "Ownership is implied, never tracked",
        "Efficiency leaks where no process exists",
      ],
    },
    with: {
      label: "WITH BT4YOU",
      points: [
        "Strategy cascades into daily, owned work",
        "Every decision and agreement is recorded",
        "Each stakeholder is tracked against the goal",
        "The process runs whether you’re in the room or not",
      ],
    },
  },
}

// — The operating model: strategy → execution loop —
export const model = {
  eyebrow: "THE OPERATING MODEL",
  title: "From a validated idea to daily execution — one closed loop.",
  body: "BT4YOU encodes the full arc — from proving the product to running it every day — and never stops the loop. Each stage feeds the next, and daily execution feeds straight back to growth.",
  steps: [
    { k: "01", title: "Product validation", body: "It all starts by validating the product and the solution — proof the problem is real and worth solving before a euro is spent." },
    { k: "02", title: "MVP & Proof of Concept", body: "An MVP plan is shipped, launched, and validated as a Proof of Concept — real signal in the market before real investment." },
    { k: "03", title: "Product architecture", body: "The digital product architecture takes shape: how it works, how we analyse it, and how the team interacts with it day to day." },
    { k: "04", title: "Business model", body: "In parallel with architecture, the business model is built — defining the core economics, the real potential, and where the upside lives." },
    { k: "05", title: "OKR & KPI → stakeholders", body: "Objectives and KPIs cascade to every stakeholder, who reports into their own dashboard and knows exactly what they own." },
    { k: "06", title: "Daily execution", body: "Daily execution closes the loop — returning learning to the product growth point that keeps moving the company forward." },
  ],
}

// — What BT4YOU puts under control —
export const control = {
  eyebrow: "TOTAL CONTROL",
  title: "Everything that moves the company.",
  body: "Once the product, architecture, and business model exist, BT4YOU keeps the whole thing in motion — tracking the economics, the conversations, the commitments, and the speed at which decisions turn into delivery.",
  items: [
    { tag: "FINANCE", v: "v-warning", title: "Business-model tracking", body: "Keel, the digital CFO, tracks the financial and performance side of the business model — plus live product analytics — so you always know if the economics are working." },
    { tag: "MEETINGS", v: "v-violet", title: "Meeting intelligence", body: "Every meeting analysed to follow the real progress of the product and the processes around it — the dynamics of results, not just notes." },
    { tag: "AGREEMENTS", v: "v-info", title: "Agreement ledger", body: "Decisions and commitments made in conversation become recorded, tracked obligations — tasks and agreements fixed in place." },
    { tag: "TASKS", v: "v-success", title: "Task control", body: "Every commitment becomes an owner-assigned task, tracked from open to done — execution monitored end to end." },
    { tag: "COMMUNICATION", v: "v-brand", title: "Communication oversight", body: "Full visibility across the flow — at the task level and across general communication — the whole company in one place." },
    { tag: "DECISIONS", v: "v-violet", title: "Decision dynamics", body: "The speed of decisions and the speed of execution, measured — so the big roadmap actually gets delivered, on time." },
  ],
}

// — The product ecosystem: a digital C-suite —
export const systems = {
  eyebrow: "THE ECOSYSTEM",
  title: "A digital C-suite, running the business.",
  body: "BT4YOU sits at the centre. Keel runs the money, Sonar runs every conversation, and Compass reads performance — three instruments feeding one unbreakable source of truth — while Forge builds, improves, and maintains the entire stack. Together they run as one digital C-suite.",
  items: [
    {
      name: "BT4YOU Executive Bot",
      tag: "EXECUTIVE OS",
      v: "v-brand",
      body: "It unites the key strategic processes under one roof and quietly accumulates the company's memory — every date, event, decision, agreement, and external signal. From decision dynamics, product performance, and recorded agreements, it shows the CEO exactly where problems are concentrating and what to do next — and continuously proposes sharper business models, OKRs, and SOPs. A living environment for running the business.",
      highlight: "Names the problem and the fix — in real time",
    },
    {
      name: "Keel",
      tag: "DIGITAL CFO",
      v: "v-warning",
      body: "The digital CFO — the keel that keeps the business balanced. It starts as your accountant, collecting and verifying every document against budget, then becomes controller and CFO: cost and revenue analysis, cashflow planning, fraud detection, and margin optimisation.",
      highlight: "Accountant, controller and CFO — one unbroken data flow",
    },
    {
      name: "Sonar",
      tag: "COMMUNICATION",
      v: "v-success",
      body: "Total control over every customer conversation — across calls, email, and messaging, in any language. It scores every interaction, surfaces problems as they emerge, builds living portraits of your customers and product, and closes every follow-up — a quality layer for the whole front line.",
      highlight: "Every conversation scored, every follow-up closed",
    },
    {
      name: "Compass",
      tag: "BUSINESS CONTROL",
      v: "v-info",
      body: "The digital analyst and business controller. It continuously gathers the performance of both the team and the product, sees the business-positive patterns no human could hold in their head, and tells you — in hard numbers — whether you're still moving forward against your product and economic targets. Running on Alps2Alps operations.",
      highlight: "Always knows if you're still on the curve",
    },
    {
      name: "Forge",
      tag: "THE FACTORY",
      v: "v-violet",
      body: "The ecosystem that builds the ecosystem. It carries an idea to a shipped product end to end — and learns interactively, getting faster, sharper, and higher in quality with every system it builds. One stakeholder, a whole product factory.",
      highlight: "The system that builds the systems",
    },
  ],
  flow: {
    feed: ["Keel", "Sonar", "Compass"],
    hub: "BT4YOU Executive Bot",
    hubNote: "decides",
    layer: { label: "Forge", note: "builds · improves · maintains the entire stack" },
  },
}

// — Executive control room: a faithful recreation of the real BT4YOU CPO cockpit —
export const control_room = {
  eyebrow: "THE CONTROL ROOM",
  title: "This is what running a company on one screen looks like.",
  body: "Not a generic dashboard — the real Chief Product Officer cockpit inside BT4YOU Executive Bot: live sprint delivery against plan, plan-vs-fact efficiency, per-developer capacity, and AI-ranked criticality, in a single view.",
  url: "bt4you.ai / product-management",
  tabs: ["Dashboard", "Products", "Architecture", "AI Bot", "Sprint Archive", "Report", "Efficiency"],
  role: "👔 CPO Dashboard",
  owner: "Chief Product Officer · accountable for shipping a quality product, on time",
  period: "This Quarter",
  paceLabel: "ON-TRACK",
  kpis: [
    { label: "Total Tasks", value: "142", sub: "across 17 products", tone: "ink" },
    { label: "Overall Completion", value: "68%", sub: "96 done · 46 open", tone: "info" },
    { label: "Plan vs Fact", value: "112%", sub: "1,247h / 1,113h closed", tone: "warning" },
    { label: "Planned Hours", value: "1,390h", sub: "28 validated features", tone: "violet" },
    { label: "Done in Period", value: "31", sub: "👔 PM 12 · 💻 Dev 19", tone: "success" },
    { label: "Overdue Tasks", value: "5", sub: "need attention", tone: "danger" },
  ],
  sprint: {
    title: "Alps2Alps · Product Strategy — Actual v1",
    pct: 64,
    meta: "Q2 · Product lead",
    counter: "18 ✅  9 🔵 · 3 🔴 of 28 tasks",
    coverage: "📋 Plan vs Asana: 82% — Asana reflects the plan",
  },
  hours: [
    { label: "DAYS INTO Q2", value: "38 / 91", sub: "53 biz-days left" },
    { label: "CAPACITY LEFT", value: "742h", sub: "of 3,360h · 7×160×3" },
    { label: "DAILY CLOSURE · 7D", value: "1.8/d", sub: "↑ vs last week" },
    { label: "PACE VERDICT", value: "🟢 ON-TRACK", sub: "Ends 26 Jun · rate 1.8/d" },
  ],
  capacity: [
    { name: "Engineer A", left: 62, note: "298h free · 182h/480h plan" },
    { name: "Engineer B", left: 38, note: "112h free · 368h/480h plan" },
    { name: "Engineer C", left: 25, note: "120h free · 3 open" },
    { name: "Engineer D", left: 8, note: "OVER · +40h non-Q2", over: true },
  ],
  criticality: [
    { key: "P1 ≥80", n: 6, color: "#dc2626" },
    { key: "P2 70-79", n: 11, color: "#f59e0b" },
    { key: "P3 60-69", n: 14, color: "#eab308" },
    { key: "P4 50-59", n: 9, color: "#0ea5e9" },
    { key: "P5 <50", n: 5, color: "#94a3b8" },
  ],
}

// — Deep dive: real screens & numbers per system —
export const products = {
  eyebrow: "INSIDE THE SYSTEMS",
  title: "A closer look at what each system actually does.",
  body: "Real views, real numbers — pulled from the products running in production, not mockups of a roadmap.",
  items: [
    {
      name: "BT4YOU Executive Bot",
      tagline: "The executive hub",
      mock: "bt4you",
      body: "More than a sprint board — a cockpit for every part of the C-suite, all feeding one decision hub. The CPO view (shown in the control room above) is just one of them.",
      points: [
        "A cockpit per function: CPO product delivery, CCO business development, plus Accounting, Operations, Marketing, HR & Holding views",
        "Meeting intelligence: transcripts become decisions, agreements, and owner-assigned tasks — tracked to done",
        "A growing knowledge base of every date, decision, and external signal — the company's living memory",
        "Surfaces where problems concentrate and proposes sharper business models, OKRs, and SOPs in real time",
      ],
    },
    {
      name: "Keel",
      tagline: "Digital CFO",
      mock: "fio",
      body: "From a photographed invoice to a posted P&L line — extracted, verified, allocated, and reconciled, with a full audit trail behind every number.",
      points: [
        "Tabs: Upload · Approve · Accounting · Bank Statement Audit · Analytics · Confirm for Payment",
        "Claude-vision extraction of vendor, VAT, amount, and line items from PDFs and photos",
        "Split one invoice across profit centers (60% Alps2Alps + 40% Skipasser) on a 47-code ledger",
        "Bank audit auto-reconciles Mercury / Revolut / Stripe / Airwallex against approved invoices",
      ],
    },
    {
      name: "Sonar",
      tagline: "Communication QA",
      mock: "callqa",
      body: "An international quality layer for the whole front line — every call, email, and message scored in real time, with timestamped evidence and the exact words to fix.",
      points: [
        "3-criterion rubric — Call Opening · Client Discovery · Call to Action — scored 1–5 each",
        "Team overview: Calls · Average score · High / Medium severity, on 1 / 7 / 30 / 90-day periods — analysed, checked, and corrected online",
        "Operator 30-day KPI grid auto-prepares the team-lead 1:1 brief — what worked, what didn't, where to improve",
        "Built-in email loop keeps the scoring algorithm learning and getting more accurate over time",
        "Builds a product profile and a customer profile that feed back into the executive system",
      ],
    },
    {
      name: "Compass",
      tagline: "Digital business controller",
      mock: "vantage",
      shot: "/brand/screenshots/compass.png",
      shotLabel: "compass · strategy 26/27 — analytics-driven growth points",
      body: "Continuously reads team and product performance and tells you whether you’re still on the growth curve — and where the next margin is hiding. Below: a real Compass output (company anonymized).",
      points: [
        "KPI strip: season revenue, gross margin %, and operational savings — at a glance",
        "Gross-margin % per product line straight from the data warehouse",
        "A live autoplanner validated across many real days of dispatch — cuts empty kilometres, saves per day",
        "LTV-by-cohort + RFM segments — surfacing seven-figure seasonal growth levers",
      ],
    },
    {
      name: "Forge",
      tagline: "The factory",
      mock: "builder",
      body: "The pipeline that builds every system above — carrying an idea to a shipped, tested product gate by gate, working internationally with a single stakeholder, and getting faster with each one.",
      points: [
        "Skills pipeline: /idea → /prd → /architect → /build → /review → /qa → /ship",
        "Each gate blocks on real evidence — a named user, a frozen PRD, passing checks",
        "Encodes 100+ production patterns harvested from the products it has already shipped",
        "Already saved an estimated ~3,500 dev · ~900 UX/UI · ~600 QA hours across 6+ shipped systems",
        "Idea to a real first user in ~3 weeks — building, testing, and evolving with one stakeholder",
      ],
    },
  ],
}

// — Founder —
export const founder = {
  eyebrow: "ABOUT THE FOUNDER",
  name: "Artjoms Fokejevs",
  role: "Founder of BT4YOU · CEO of Alps2Alps · engineer-turned-operator",
  // Drop a professional headshot at public/brand/founder.jpg and set photo below.
  // Leave empty ("") to keep the "AF" monogram.
  photo: "/brand/founder.jpg",
  lede:
    "BT4YOU was started by Artjoms Fokejevs — an entrepreneur and systems-minded engineer who treats every business problem the same way: build a digital matrix of accountability, delegate ownership across the team, then automate the process around it.",
  belief:
    "His conviction is simple — the hardest challenge today isn’t capital or technology, it’s managing people. Without effective, automated processes, organisations quietly lose their efficiency. So he builds the systems that make ownership explicit and execution automatic.",
  belief2:
    "The second challenge he never stops working on: building a product that is genuinely good — one that solves a real problem the market actually needs, and that scales — while shipping it fast, without trading away quality. Speed and quality at once is the bar. Forge and the whole BT4YOU stack exist to hit it, every time.",
  highlights: [
    { value: "18 yrs", label: "From the shop floor to CEO — engineer first, executive second." },
    { value: "21", label: "Countries on the lean, remote-first operating model he built as CEO of Alps2Alps." },
    { value: "200% YoY", label: "Staff scaled under deliberate structure design — growth without chaos." },
    { value: "€1B+", label: "Managed companies whose combined turnover over the years exceeds one billion euros." },
  ],
  trackTitle: "A path measured in systems shipped",
  track: [
    { era: "Malmar · 2008–2011", text: "Started as a mechanical engineer — designed and integrated production-automation equipment, working directly with Volvo Corporation, and stood up the plant's engineering department from scratch." },
    { era: "RK Metals · 2013–2019", text: "Production Manager → Director → Board Member. Rebuilt the factory into a project-based management system, integrated sub-supplier chains into core production, deployed ERP across the business, and won full independence from the holding's order book." },
    { era: "UPB · 2011–2019", text: "Project Manager → Commercial Director. Built UPB's mechanical-engineering branch and expanded into the Scandinavian and UK markets through complex infrastructure projects — bridges and large sliding and lifting structures inside buildings. Founded the R&D group that went on to create a sophisticated unitized solution for prefabricated concrete in Scandinavia and the UK." },
    { era: "Polipaks · AVOTI · 2019–2024", text: "Executive Director. Designed cost-center structures, integrated inventory and budgeting systems, stood up a dedicated production-automation engineering unit, and built core-team management systems that outlived his tenure." },
    { era: "Alps2Alps · 2024–now", text: "CEO. Scaling a 21-country group with data, ML, and AI embedded across the organisation — brand +50% YoY — turning two decades of operating knowledge into software." },
  ],
  acceleration:
    "Two decades of solving real operational problems — in factories, supply chains, and finance — taught him exactly where companies leak efficiency. Now AI and ML let him compress that hard-won knowledge into systems that move hundreds of times faster. Used inside a company, the same matrix lifts three things at once: the speed of development and decision-making, the efficiency of a far leaner headcount, and the return on every euro invested — removing the layers where slow, low-quality decisions used to live.",
  closer:
    "BT4YOU — and the systems around it, Keel, Sonar, Compass, and Forge — is that playbook turned into software: the accountability matrix every team can run, without needing Artjoms in the room.",
}

export const cta = {
  badge: "EARLY ACCESS",
  title: "Run your company like a system.",
  subtitle:
    "BT4YOU is in production across a 21-country group. Request access and put your executive layer on one source of truth.",
  primary: "Request access",
  secondary: "Talk to the team",
  // Where access requests are delivered.
  contactEmail: "artjoms.fokejevs@gmail.com",
  // Paste your free Web3Forms access key (https://web3forms.com — tied to the
  // email above). While empty, the form falls back to a mailto: link.
  formAccessKey: "d8484c3a-da42-435f-909c-87241eba0467",
  subject: "New BT4YOU access request",
  successMsg: "Thanks — we’ll be in touch shortly.",
  errorMsg: "Something went wrong. Please email us directly.",
}

export const footer = {
  tagline: "The digital executive operating system — strategy, money, communication, and operations on one source of truth.",
  columns: [
    { title: "Platform", links: ["Operating model", "Total control", "Control room", "Ecosystem"] },
    { title: "Systems", links: ["BT4YOU Executive Bot", "Keel", "Sonar", "Compass", "Forge"] },
    { title: "Company", links: ["About the founder", "Contact", "Request access"] },
  ],
  copyright: "© 2026 SIA BT4YOU. All rights reserved.",
  company: {
    title: "Company details",
    rows: [
      { label: "Legal name", value: "SIA BT4YOU" },
      { label: "Legal form", value: "Limited liability company (SIA)" },
      { label: "VAT No.", value: "LV40203582951" },
      { label: "Registered address", value: "Brīvības iela 31, Ventspils, Latvia" },
    ],
  },
}
