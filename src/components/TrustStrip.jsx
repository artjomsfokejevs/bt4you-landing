import { trust } from "../content"

export default function TrustStrip() {
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-7 sm:flex-row sm:justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-lt">{trust.label}</span>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trust.names.map((n) => (
            <span key={n} className="display text-lg font-semibold tracking-tight text-muted-dk/70">{n}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
