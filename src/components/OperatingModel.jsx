import { model } from "../content"

export default function OperatingModel() {
  const m = model
  return (
    <section id="model" className="bg-gradient-to-b from-white to-soft-lt">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">{m.eyebrow}</span>
          <h2 className="display mt-4 text-3xl font-medium leading-tight text-deep-blue sm:text-[2.6rem]">{m.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-dk">{m.body}</p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border ring-1 ring-border sm:grid-cols-2 lg:grid-cols-4">
          {m.steps.map((s, i) => (
            <div key={s.k} className="group relative bg-white p-7 transition hover:bg-soft">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-indigo">{s.k}</span>
                <span className="h-px flex-1 bg-gradient-to-r from-indigo/30 to-transparent" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-dk">{s.body}</p>
              <span className="pointer-events-none absolute right-6 top-6 font-serif text-3xl text-border-lt transition group-hover:text-indigo/20">
                {i === m.steps.length - 1 ? "↺" : "→"}
              </span>
            </div>
          ))}
        </div>

        {m.conclusion && (
          <p className="display mx-auto mt-12 max-w-3xl text-center text-2xl font-medium leading-snug text-deep-blue sm:text-3xl">
            {m.conclusion}
          </p>
        )}
      </div>
    </section>
  )
}
