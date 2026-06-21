import { security } from "../content"

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }
const icons = {
  globe: (p) => <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></svg>,
  lock: (p) => <svg viewBox="0 0 24 24" {...base} {...p}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>,
  key: (p) => <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="8" cy="8" r="4" /><path d="M11 11l8 8M16 16l2-2M18 18l2-2" /></svg>,
  ledger: (p) => <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 3h11l3 3v15H6Z" /><path d="M9 8h7M9 12h7M9 16h4" /></svg>,
  vault: (p) => <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="12" cy="12" r="4" /><path d="M12 8v1M12 15v1" /></svg>,
  human: (p) => <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="8" r="3.5" /><path d="M5 20a7 7 0 0 1 14 0" /></svg>,
}

export default function Security() {
  const s = security
  return (
    <section id="security" className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute right-1/3 top-0 h-72 w-72 rounded-full bg-brand-dk/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="eyebrow !text-brand-lt">{s.eyebrow}</span>
          <h2 className="display mt-4 text-3xl font-medium leading-tight text-white sm:text-[2.6rem]">{s.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">{s.body}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div key={item.title} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition hover:ring-white/25">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-lt/15 text-brand-lt">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <h3 className="text-[15px] font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
