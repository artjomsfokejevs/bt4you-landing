import { Arrow } from "./Icons"
import { cta } from "../content"

export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-20">
      <div className="gradient-hero relative overflow-hidden rounded-3xl px-8 py-16 text-center shadow-lift sm:px-16">
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-indigo/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-violet/25 blur-3xl" />
        <div className="relative">
          <span className="eyebrow !text-brand-lt justify-center">{cta.badge}</span>
          <h2 className="display mx-auto mt-4 max-w-2xl text-3xl font-medium leading-tight text-white sm:text-[2.6rem]">
            {cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">{cta.subtitle}</p>

          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" required placeholder="you@company.com" className="input !bg-white/95" />
            <button type="submit" className="btn-secondary whitespace-nowrap">
              {cta.primary} <Arrow className="h-4 w-4" />
            </button>
          </form>
          <a href="#" className="mt-4 inline-block text-sm font-medium text-white/65 underline-offset-4 hover:text-white hover:underline">
            {cta.secondary}
          </a>
        </div>
      </div>
    </section>
  )
}
