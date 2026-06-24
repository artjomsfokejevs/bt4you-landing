// ============================================================
//  BT4YOU Executive Bot — landing copy (single source of truth)
//  Positioning: a digital executive layer / executive systems.
//  Edit text here; components stay untouched.
// ============================================================

export const brand = {
  name: "BT4YOU",
  product: "Executive Systems",
  full: "BT4YOU Executive Systems",
}

export const nav = {
  links: [
    { label: "Philosophy", href: "#thesis" },
    { label: "Process", href: "#model" },
    { label: "Control", href: "#control" },
    { label: "Ecosystem", href: "#systems" },
    { label: "Security", href: "#security" },
    { label: "Founder", href: "#about" },
  ],
  cta: "Request access",
}

export const hero = {
  badge: "BT4YOU · EXECUTIVE SYSTEMS",
  title: ["The digital executive layer", "for the modern C-Suite."],
  subtitle:
    "Designed to solve the integration chaos of classic ERPs and financial tools. BT4YOU is your digital executive layer that translates your product ecosystem, business model, company structure, and OKRs into an actionable framework. Align every meeting, decision, and team member's actions with your ultimate goals — without the micromanagement. See your entire company move on one screen.",
  primaryCta: "Request Access",
  secondaryCta: "See the operating model",
  note: "Built and run by the team behind Alps2Alps · 21 countries · in production",
}

export const heroStats = [
  { value: "1", label: "Source of truth for the entire executive layer." },
  { value: "24/7", label: "Visibility — see how every decision impacts your core goals." },
  { value: "5", label: "Integrated modules — everything to run and scale the business in one ecosystem." },
]

// — Trust strip (social proof) —
export const trust = {
  label: "Running in production across the group",
  names: ["Alps2Alps", "Skipasser", "Mountly", "MyPeakFinance", "Alveda"],
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

// — Manifesto / philosophy —
export const thesis = {
  eyebrow: "THE PHILOSOPHY",
  title: "Your company isn't a template. Your software shouldn't be either.",
  paragraphs: [
    "Classic ERPs force your company to bend to their logic — their workflows, their fields, their idea of how a business should run. We flipped it. BT4YOU — Business Technologies, 4 YOU — bends to your structure, your metrics, your matrix of accountability. That's the whole idea.",
    "And it isn't a software install — it's a strategic journey we run alongside your key stakeholders. We don't hand you a blank system and wish you luck. We engineer your operational reality together, with you in the room.",
  ],
  highlight: "Not another system to adapt to — the first one that adapts to you.",
}

// — The process: we co-create your operational reality (4 steps) —
export const model = {
  eyebrow: "THE PROCESS",
  title: "Built with you. Not just for you.",
  body: "No blank template to fill in. We engineer your executive layer alongside your key people — architecture, economics, objectives, and the loop that runs them.",
  steps: [
    { k: "01", title: "Map the Architecture", body: "We map your real product and business architecture — so the system mirrors how your company actually works, not a vendor's idea of it." },
    { k: "02", title: "Rebuild the Business Model", body: "We re-examine your unit economics and rebuild the model around what truly drives margin — before a single part of it is automated." },
    { k: "03", title: "Lock in the OKRs that matter", body: "We pinpoint the few objectives that actually move your business and wire them straight into the system — so every team is aimed at the same target." },
    { k: "04", title: "Engineer the Execution Loop", body: "Together we build a self-running, automated loop — decision → task → result → learning — that gets stronger as you scale." },
  ],
  conclusion: "The result: a digital executive layer shaped to the way your business actually runs — not the way software wishes it did.",
}

// — What BT4YOU puts under control —
export const control = {
  eyebrow: "TOTAL CONTROL",
  title: "Everything that moves the company — on the record.",
  body: "Once the product, architecture, and business model exist, BT4YOU keeps it all in motion: every euro, every conversation, every commitment, and the speed at which decisions turn into delivery. From said to shipped, nothing falls through.",
  items: [
    { tag: "FINANCE", v: "v-warning", title: "The money, in real time", body: "Keel, your digital CFO, watches the economics and live product analytics — so you always know whether the model is actually making money." },
    { tag: "MEETINGS", v: "v-violet", title: "Meeting intelligence", body: "Every meeting analysed for what it changed: decisions made, progress moved, risks surfaced — the dynamics of results, not the minutes." },
    { tag: "DECISIONS", v: "v-brand", title: "Decision velocity", body: "How fast decisions get made — and then executed — measured, so a big roadmap turns into shipped work, on time." },
    { tag: "AGREEMENTS", v: "v-info", title: "The commitment ledger", body: "Who promised what, to whom, by when — every commitment recorded and tracked, never lost in the thread." },
    { tag: "TASKS", v: "v-success", title: "Execution control", body: "Each commitment becomes an owner-assigned task, open → done — execution watched end to end." },
    { tag: "COMMUNICATION", v: "v-violet", title: "One communication feed", body: "Calls, email, and chat in a single oversight feed — the whole company's flow, without the silos." },
  ],
}

// — The product ecosystem: a digital C-suite —
export const systems = {
  eyebrow: "THE ECOSYSTEM",
  title: "A digital C-suite, running the business.",
  body: "It isn't one bot — it's a whole executive team in software. Keel runs the money. Sonar runs every customer conversation. Compass reads performance in hard numbers. Forge builds and maintains the entire stack. And BT4YOU sits at the centre — the chief of staff that turns all of it into decisions.",
  items: [
    {
      name: "BT4YOU Executive Bot",
      tag: "EXECUTIVE OS",
      v: "v-brand",
      body: "The chief of staff. It accumulates the company's memory — every decision, agreement, number, and signal — then turns it into action: showing the CEO exactly where problems are concentrating, what to do next, and proposing sharper business models, OKRs, and SOPs. The brain the rest of the stack reports into.",
      highlight: "Names the problem and the fix — in real time",
    },
    {
      name: "Keel",
      tag: "DIGITAL CFO",
      v: "v-warning",
      body: "Your digital CFO — the keel that keeps the business balanced. It starts as the accountant (every document collected and checked against budget), then runs as controller and CFO: cost and revenue analysis, cashflow planning, fraud detection, and margin optimisation.",
      highlight: "Accountant, controller, and CFO — in one",
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
      body: "Your digital analyst. It reads the performance of the team and the product, spots the patterns no human could hold in their head, and tells you — in hard numbers — whether you're still on the growth curve. Running on Alps2Alps operations.",
      highlight: "Always knows if you're still on the curve",
    },
    {
      name: "Forge",
      tag: "THE FACTORY",
      v: "v-violet",
      body: "The factory that builds the factory. It carries an idea to a shipped product end to end, and gets faster, sharper, and higher in quality with every system it builds. One stakeholder, a whole product team.",
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
  tagline: "The digital executive layer — strategy, money, communication, and operations on one source of truth.",
  columns: [
    { title: "Platform", links: ["Philosophy", "Process", "Total control", "Ecosystem"] },
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
