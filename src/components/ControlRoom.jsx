import { control_room as d } from "../content"

const toneColor = {
  ink: "text-white",
  info: "text-brand-lt",
  warning: "text-warning",
  violet: "text-violet",
  success: "text-success-med",
  danger: "text-danger",
}

function WindowChrome({ url }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-center font-mono text-[11px] text-white/45">
        {url}
      </div>
    </div>
  )
}

export default function ControlRoom() {
  return (
    <section id="control-room" className="bg-gradient-to-b from-white to-soft-lt">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">{d.eyebrow}</span>
          <h2 className="display mt-4 text-3xl font-medium leading-tight text-deep-blue sm:text-[2.6rem]">{d.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-dk">{d.body}</p>
        </div>

        {/* app window */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-ink shadow-lift ring-1 ring-ink/10">
          <WindowChrome url={d.url} />

          {/* toolbar tabs */}
          <div className="flex flex-wrap items-center gap-1.5 border-b border-white/10 px-4 py-3">
            {d.tabs.map((t, i) => (
              <span
                key={t}
                className={`rounded-lg px-3 py-1.5 font-mono text-[11px] ${
                  i === 0 ? "bg-white/10 text-white" : "text-white/40"
                }`}
              >
                {t}
              </span>
            ))}
            <span className="ml-auto rounded-full bg-success-med/15 px-2.5 py-1 text-[11px] font-semibold text-success-med">
              ● {d.paceLabel}
            </span>
          </div>

          <div className="p-5 sm:p-6">
            {/* header */}
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="display text-xl font-semibold text-white">{d.role}</h3>
                <p className="mt-0.5 text-[13px] text-white/50">{d.owner}</p>
              </div>
              <span className="rounded-lg bg-white/5 px-3 py-1.5 font-mono text-[11px] text-white/55">📅 {d.period}</span>
            </div>

            {/* KPI tiles */}
            <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
              {d.kpis.map((k) => (
                <div key={k.label} className="bg-ink/60 px-4 py-4">
                  <div className={`display text-2xl font-semibold ${toneColor[k.tone] || "text-white"}`}>{k.value}</div>
                  <div className="mt-1 text-[11px] font-semibold text-white/75">{k.label}</div>
                  <div className="text-[10px] text-white/45">{k.sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              {/* sprint progress */}
              <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="font-mono text-[11px] uppercase tracking-wider text-white/45">🏃 Sprint Progress</div>
                <div className="mt-3 flex items-baseline justify-between">
                  <h4 className="text-[15px] font-semibold text-white">{d.sprint.title}</h4>
                  <span className="display text-2xl font-semibold text-violet">{d.sprint.pct}%</span>
                </div>
                <div className="mt-1 text-[12px] text-white/50">{d.sprint.meta}</div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${d.sprint.pct}%`, background: "linear-gradient(90deg,#7c3aed,#10b981)" }}
                  />
                </div>
                <div className="mt-2 font-mono text-[11px] text-white/55">{d.sprint.counter}</div>
                <div className="mt-4 rounded-lg bg-success-med/10 px-3 py-2 text-[12px] text-success-med">
                  {d.sprint.coverage}
                </div>
              </div>

              {/* hours tiles + criticality */}
              <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="grid grid-cols-2 gap-3">
                  {d.hours.map((h) => (
                    <div key={h.label} className="rounded-lg bg-white/5 px-3 py-3">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-white/40">{h.label}</div>
                      <div className="display mt-1 text-lg font-semibold text-white">{h.value}</div>
                      <div className="text-[10px] text-white/45">{h.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 font-mono text-[10px] uppercase tracking-wider text-white/40">🎯 Criticality (P1–P5)</div>
                <div className="mt-2 space-y-1.5">
                  {d.criticality.map((c) => {
                    const max = Math.max(...d.criticality.map((x) => x.n))
                    return (
                      <div key={c.key} className="flex items-center gap-2">
                        <span className="w-16 font-mono text-[10px] text-white/55">{c.key}</span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full" style={{ width: `${(c.n / max) * 100}%`, background: c.color }} />
                        </div>
                        <span className="w-5 text-right font-mono text-[10px] text-white/55">{c.n}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* capacity bars */}
            <div className="mt-5 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="font-mono text-[11px] uppercase tracking-wider text-white/45">👥 Who is needed · remaining capacity per dev</div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {d.capacity.map((c) => {
                  const color = c.over ? "#dc2626" : c.left >= 50 ? "#10b981" : c.left >= 20 ? "#f59e0b" : "#dc2626"
                  return (
                    <div key={c.name} className="flex items-center gap-3">
                      <span className="w-36 truncate text-[12px] text-white/75">{c.name}</span>
                      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full" style={{ width: `${Math.max(c.left, 6)}%`, background: color }} />
                      </div>
                      <span className="w-44 text-right font-mono text-[10px] text-white/45">{c.note}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted-lt">
          Recreated from the live BT4YOU Executive Bot · Product Management view
        </p>
      </div>
    </section>
  )
}
