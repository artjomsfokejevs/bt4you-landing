import { Logo } from "./Icons"
import { brand, footer } from "../content"

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="text-[15px] font-bold tracking-tight">
                {brand.name}<span className="font-medium text-white/55"> {brand.product}</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">{footer.tagline}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/65 transition hover:text-white">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {footer.company && (
          <div className="mt-12 border-t border-white/10 pt-8">
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {footer.company.title}
            </h4>
            <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {footer.company.rows.map((r) => (
                <div key={r.label} className="flex flex-col">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/35">{r.label}</dt>
                  <dd className="mt-0.5 text-[13px] text-white/65">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>{footer.copyright}</span>
          <span className="font-mono uppercase tracking-[0.12em]">Design system · BT4YOU Brand Book v2.5.0</span>
        </div>
      </div>
    </footer>
  )
}
