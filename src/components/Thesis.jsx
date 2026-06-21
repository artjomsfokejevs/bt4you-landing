import { Check, Cross } from "./Icons"
import { thesis } from "../content"

export default function Thesis() {
  const t = thesis
  return (
    <section id="thesis" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="display mt-4 text-3xl font-medium leading-[1.12] text-deep-blue sm:text-[2.6rem]">
            {t.title}
          </h2>
          <div className="mt-6 space-y-4">
            {t.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-dk">{p}</p>
            ))}
          </div>
        </div>

        {/* contrast panel */}
        <div className="grid grid-rows-2 gap-5">
          <div className="rounded-2xl bg-soft-lt p-6 ring-1 ring-border">
            <span className="tag bg-red-lt text-danger-dk">{t.contrast.without.label}</span>
            <ul className="mt-4 space-y-3">
              {t.contrast.without.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] text-muted-dk">
                  <Cross className="mt-0.5 h-4 w-4 shrink-0 text-danger/70" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-elevated v-success !p-6">
            <span className="tag bg-white/70 text-success">{t.contrast.with.label}</span>
            <ul className="mt-4 space-y-3">
              {t.contrast.with.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] text-ink-lt">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
