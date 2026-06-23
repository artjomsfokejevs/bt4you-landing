import { thesis } from "../content"

export default function Thesis() {
  const t = thesis
  return (
    <section id="thesis" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="display mt-4 text-3xl font-medium leading-[1.12] text-deep-blue sm:text-[2.6rem]">
            {t.title}
          </h2>
        </div>

        <div>
          <div className="space-y-5">
            {t.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-dk">{p}</p>
            ))}
          </div>
          {t.highlight && (
            <div className="card-elevated v-brand mt-8 !p-6">
              <p className="display text-xl font-medium leading-snug text-ink">{t.highlight}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
