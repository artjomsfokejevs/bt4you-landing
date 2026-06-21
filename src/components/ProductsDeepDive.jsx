import { Check } from "./Icons"
import { products } from "../content"

/* — compact, in-brand recreations using real product labels — */
function Frame({ label, children }) {
  return (
    <div className="overflow-hidden rounded-xl bg-ink shadow-lift ring-1 ring-ink/10">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[10px] text-white/40">{label}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

const Bt4you = () => (
  <Frame label="bt4you · executive hub">
    <div className="mb-3 flex flex-wrap gap-1">
      {["CPO", "CCO", "CFO", "COO", "CMO", "CHRO"].map((t, i) => (
        <span key={t} className={`rounded px-2 py-1 font-mono text-[9px] ${i === 0 ? "bg-white/10 text-white" : "text-white/35"}`}>{t}</span>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg bg-white/10">
      {[["6", "Cockpits"], ["142", "Open tasks"], ["78%", "OKR pace"]].map(([v, l]) => (
        <div key={l} className="bg-ink/60 px-3 py-2.5">
          <div className="display text-base font-semibold text-white">{v}</div>
          <div className="text-[9px] text-white/45">{l}</div>
        </div>
      ))}
    </div>
    <div className="mt-3 rounded-lg bg-white/5 p-2.5">
      <div className="font-mono text-[9px] text-white/45">🧠 meeting intelligence</div>
      <div className="mt-1 text-[10px] text-white/70">3 decisions · 5 agreements → 8 tasks assigned</div>
    </div>
    <div className="mt-2 font-mono text-[9px] text-success-med">▲ problem concentrating in CCO · pipeline — fix proposed</div>
  </Frame>
)

const Fio = () => (
  <Frame label="keel · approve">
    <div className="mb-3 flex flex-wrap gap-1">
      {["Upload", "Approve", "Bank Audit", "Analytics"].map((t, i) => (
        <span key={t} className={`rounded px-2 py-1 font-mono text-[9px] ${i === 1 ? "bg-white/10 text-white" : "text-white/35"}`}>{t}</span>
      ))}
    </div>
    <div className="rounded-lg bg-white/5 p-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-white/80">Hetzner Online GmbH</span>
        <span className="display text-sm font-semibold text-warning">€1,284.00</span>
      </div>
      <div className="mt-1 font-mono text-[9px] text-white/40">VAT verified · VIES ✓ · 47-code ledger</div>
      <div className="mt-2 flex gap-1.5">
        <span className="rounded bg-indigo/25 px-2 py-0.5 text-[9px] text-brand-lt">60% Alps2Alps</span>
        <span className="rounded bg-violet/25 px-2 py-0.5 text-[9px] text-violet">40% Skipasser</span>
      </div>
    </div>
    <div className="mt-2 grid grid-cols-4 gap-1 text-center">
      {[["Pending", "8"], ["Approved", "31"], ["Rejected", "2"], ["Posted", "176"]].map(([l, n]) => (
        <div key={l} className="rounded bg-white/5 py-1.5">
          <div className="text-[11px] font-semibold text-white">{n}</div>
          <div className="text-[8px] text-white/40">{l}</div>
        </div>
      ))}
    </div>
  </Frame>
)

const CallQa = () => (
  <Frame label="sonar · call detail">
    {[["Opening", 4, "#10b981"], ["Discovery", 3, "#f59e0b"], ["CTA", 5, "#10b981"]].map(([k, n, c]) => (
      <div key={k} className="mb-2 flex items-center gap-2">
        <span className="w-16 font-mono text-[10px] text-white/55">{k}</span>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full" style={{ width: `${(n / 5) * 100}%`, background: c }} />
        </div>
        <span className="w-6 text-right font-mono text-[10px] text-white/55">{n}/5</span>
      </div>
    ))}
    <div className="mt-3 flex items-end gap-0.5">
      {[5, 9, 6, 12, 8, 14, 7, 11, 6, 10, 13, 7, 9, 5, 8].map((h, i) => (
        <span key={i} className="flex-1 rounded-sm bg-brand-lt/60" style={{ height: `${h * 2}px` }} />
      ))}
    </div>
    <div className="mt-2 font-mono text-[9px] text-white/40">Average 4.0 · High severity 2 · calls · email · chat</div>
  </Frame>
)

const Vantage = () => (
  <Frame label="compass · business control">
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/10">
      {[["€25M", "Season revenue", "text-success-med"], ["36%", "Gross margin", "text-brand-lt"], ["−24%", "Driver consol.", "text-warning"], ["€3M", "Growth levers", "text-violet"]].map(([v, l, c]) => (
        <div key={l} className="bg-ink/60 px-3 py-2.5">
          <div className={`display text-base font-semibold ${c}`}>{v}</div>
          <div className="text-[9px] text-white/45">{l}</div>
        </div>
      ))}
    </div>
    <div className="mt-3 space-y-1">
      {[["Premium", 47], ["Premium minivan", 44], ["Standard XL", 42]].map(([l, n]) => (
        <div key={l} className="flex items-center gap-2">
          <span className="w-24 text-[9px] text-white/55">{l}</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-brand-lt" style={{ width: `${n}%` }} />
          </div>
          <span className="font-mono text-[9px] text-white/45">{n}%</span>
        </div>
      ))}
    </div>
    <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/30">Illustrative data</div>
  </Frame>
)

const Builder = () => (
  <Frame label="forge · pipeline">
    <div className="flex flex-wrap items-center gap-1">
      {["/idea", "/prd", "/architect", "/build", "/review", "/qa", "/ship"].map((s, i) => (
        <span key={s} className="flex items-center gap-1">
          <span className={`rounded px-2 py-1 font-mono text-[9px] ${i < 4 ? "bg-success-med/20 text-success-med" : i === 4 ? "bg-violet/25 text-violet" : "text-white/35"}`}>{s}</span>
          {i < 6 && <span className="text-white/25">→</span>}
        </span>
      ))}
    </div>
    <div className="mt-3 rounded-lg bg-white/5 p-3">
      <div className="text-[10px] text-white/70">Gate: /review · 66 checks</div>
      <div className="mt-1 font-mono text-[9px] text-success-med">✓ 0 critical · 1 warning · ship-ready</div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[72%] rounded-full" style={{ background: "linear-gradient(90deg,#4f46e5,#8b5cf6)" }} />
      </div>
      <div className="mt-1 font-mono text-[9px] text-white/40">100+ production patterns encoded</div>
    </div>
  </Frame>
)

const mocks = { bt4you: Bt4you, fio: Fio, callqa: CallQa, vantage: Vantage, builder: Builder }

export default function ProductsDeepDive() {
  const p = products
  return (
    <section id="products" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow justify-center">{p.eyebrow}</span>
        <h2 className="display mt-4 text-3xl font-medium leading-tight text-deep-blue sm:text-[2.6rem]">{p.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-dk">{p.body}</p>
      </div>

      <div className="mt-16 space-y-20">
        {p.items.map((item, i) => {
          const Mock = mocks[item.mock]
          const flip = i % 2 === 1
          return (
            <div key={item.name} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={flip ? "lg:order-2" : ""}>
                <span className="tag bg-soft-lt text-indigo">{item.tagline}</span>
                <h3 className="display mt-3 text-2xl font-semibold text-deep-blue sm:text-3xl">{item.name}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-muted-dk">{item.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-ink-lt">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-indigo" /> <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={flip ? "lg:order-1" : ""}>
                {item.shot ? (
                  <Frame label={item.shotLabel || `${item.name.toLowerCase()} · live`}>
                    <img
                      src={item.shot}
                      alt={`${item.name} — real product screen`}
                      className="w-full rounded-lg"
                      loading="lazy"
                    />
                    <div className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
                      Real screen · captured from the live product
                    </div>
                  </Frame>
                ) : (
                  Mock && <Mock />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
