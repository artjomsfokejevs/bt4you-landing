import { systems } from "../content"

const tagColor = {
  "EXECUTIVE OS": "bg-indigo/15 text-indigo",
  "DIGITAL CFO": "bg-warning/15 text-warning-dk",
  COMMUNICATION: "bg-success/15 text-success",
  "BUSINESS CONTROL": "bg-info/15 text-brand-dk",
  "THE FACTORY": "bg-violet/15 text-violet-dk",
}

export default function Systems() {
  const s = systems
  return (
    <section id="systems" className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="eyebrow !text-brand-lt">{s.eyebrow}</span>
          <h2 className="display mt-4 text-3xl font-medium leading-tight text-white sm:text-[2.6rem]">{s.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">{s.body}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => (
            <article
              key={item.name}
              className={`group relative overflow-hidden rounded-2xl p-6 ring-1 transition ${
                i === 0
                  ? "gradient-brand ring-white/20 lg:row-span-2 lg:flex lg:flex-col lg:justify-between"
                  : "bg-white/[0.04] ring-white/10 hover:ring-white/25"
              }`}
            >
              {i !== 0 && (
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-indigo/10 blur-2xl transition group-hover:bg-indigo/25" />
              )}
              <div className="relative">
                <span className={`tag mb-4 ${i === 0 ? "bg-white/20 text-white" : tagColor[item.tag] || "bg-white/10 text-white"}`}>
                  {item.tag}
                </span>
                <h3 className={`font-bold ${i === 0 ? "text-2xl text-white" : "text-lg text-white"}`}>{item.name}</h3>
                <p className={`mt-3 leading-relaxed ${i === 0 ? "text-[15px] text-white/85" : "text-sm text-white/55"}`}>{item.body}</p>
              </div>
              <div className={`relative mt-6 flex items-center gap-2 text-sm font-semibold ${i === 0 ? "text-white" : "text-brand-lt"}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {item.highlight}
              </div>
            </article>
          ))}
        </div>

        {/* data-flow: Keel/Sonar/Compass feed → BT4YOU decides; Forge is a parallel layer under all */}
        <div className="mt-12">
          {/* main pipeline */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 font-mono text-[11px] uppercase tracking-[0.12em]">
            <span className="flex flex-wrap items-center gap-1.5">
              {s.flow.feed.map((f) => (
                <span key={f} className="rounded-full bg-white/[0.07] px-3 py-2 text-white/75 ring-1 ring-white/10">{f}</span>
              ))}
            </span>
            <span className="flex items-center gap-1 text-white/40">
              <span className="normal-case tracking-normal">feed</span> →
            </span>
            <span className="flex items-center gap-2 rounded-full gradient-brand px-4 py-2 text-white shadow-lift">
              {s.flow.hub}
              <span className="text-white/65 normal-case tracking-normal">{s.flow.hubNote}</span>
            </span>
          </div>

          {/* Forge — parallel foundation layer */}
          <div className="relative mx-auto mt-6 max-w-3xl">
            <div className="mx-auto mb-2 h-4 w-px bg-white/15" />
            <div className="flex items-center justify-center gap-3 rounded-2xl border border-dashed border-violet/40 bg-violet/[0.08] px-5 py-3">
              <span className="rounded-full bg-violet/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-violet">
                {s.flow.layer.label}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">
                {s.flow.layer.note}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
