import { useState } from "react"
import { founder } from "../content"

function FounderAvatar({ photo, name }) {
  const [ok, setOk] = useState(Boolean(photo))
  if (photo && ok) {
    return (
      <img
        src={photo}
        alt={name}
        onError={() => setOk(false)}
        className="h-28 w-24 rounded-2xl object-cover ring-1 ring-white/25 shadow-lift"
        style={{ objectPosition: "center 20%" }}
      />
    )
  }
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 font-serif text-2xl font-semibold text-white ring-1 ring-white/20">
      AF
    </div>
  )
}

export default function About() {
  const f = founder
  return (
    <section id="about" className="bg-gradient-to-b from-soft-lt to-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* identity card */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">{f.eyebrow}</span>
            <div className="mt-5 overflow-hidden rounded-3xl gradient-hero p-8 shadow-lift">
              <FounderAvatar photo={f.photo} name={f.name} />
              <h3 className="display mt-6 text-2xl font-semibold tracking-tight text-white">{f.name}</h3>
              <p className="mt-1 text-sm text-brand-lt">{f.role}</p>

              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
                {f.highlights.map((h) => (
                  <div key={h.value} className="bg-ink/50 px-4 py-4">
                    <div className="display text-xl font-semibold text-white">{h.value}</div>
                    <div className="mt-1 text-[11px] leading-snug text-white/55">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* narrative */}
          <div>
            <h2 className="display text-3xl font-medium leading-tight text-deep-blue sm:text-[2.4rem]">
              A solution to every problem looks like a{" "}
              <span className="text-gradient">digital matrix of accountability</span>.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-dk">{f.lede}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-dk">{f.belief}</p>
            {f.belief2 && <p className="mt-4 text-lg leading-relaxed text-muted-dk">{f.belief2}</p>}

            {f.trackTitle && (
              <h3 className="mt-10 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo">
                {f.trackTitle}
              </h3>
            )}
            {/* career timeline */}
            <div className="mt-5 space-y-5 border-l border-border pl-6">
              {f.track.map((t) => (
                <div key={t.era} className="relative">
                  <span className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo ring-4 ring-white" />
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{t.era}</div>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted-dk">{t.text}</p>
                </div>
              ))}
            </div>

            {f.acceleration && (
              <p className="mt-8 text-lg leading-relaxed text-muted-dk">{f.acceleration}</p>
            )}

            <div className="card-elevated v-brand mt-8 !p-6">
              <p className="text-[15px] font-medium leading-relaxed text-ink-lt">{f.closer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
