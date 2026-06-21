import { controlIcons } from "./Icons"
import { control } from "../content"

const iconTint = {
  "v-brand": "text-indigo",
  "v-violet": "text-violet-dk",
  "v-info": "text-brand-dk",
  "v-success": "text-success",
  "v-warning": "text-warning-dk",
}

export default function Control() {
  const c = control
  return (
    <section id="control" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">{c.eyebrow}</span>
        <h2 className="display mt-4 text-3xl font-medium leading-tight text-deep-blue sm:text-[2.6rem]">{c.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-dk">{c.body}</p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {c.items.map((item) => {
          const Icon = controlIcons[item.tag]
          return (
            <article key={item.title} className={`card-elevated ${item.v} flex flex-col`}>
              <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 ${iconTint[item.v] || "text-indigo"}`}>
                {Icon && <Icon className="h-5 w-5" />}
              </div>
              <span className="tag mb-3 self-start bg-white/60 text-muted-dk">{item.tag}</span>
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-lt/80">{item.body}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
