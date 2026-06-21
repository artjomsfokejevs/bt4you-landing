import { Play, Arrow } from "./Icons"
import { hero, heroStats } from "../content"

export default function Hero() {
  return (
    <section id="top" className="gradient-hero relative overflow-hidden">
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-indigo/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-44 h-[28rem] w-[28rem] rounded-full bg-violet/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-36 sm:pt-44">
        <img
          src="/brand/logo.svg"
          alt="BT4YOU"
          className="animate-rise mb-6 h-20 w-20 drop-shadow-[0_8px_30px_rgba(77,159,255,0.45)] sm:h-24 sm:w-24"
        />
        <span className="eyebrow animate-rise delay-1 !text-brand-lt">{hero.badge}</span>

        <h1 className="display animate-rise delay-1 mt-6 max-w-4xl text-[2.6rem] font-medium leading-[1.05] text-white sm:text-6xl">
          {hero.title[0]}<br />
          <span className="text-white/80">{hero.title[1]}</span>
        </h1>

        <p className="animate-rise delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-white/65">
          {hero.subtitle}
        </p>

        <div className="animate-rise delay-3 mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <a href="#cta" className="btn-primary">
            {hero.primaryCta} <Arrow className="h-4 w-4" />
          </a>
          <a href="#model" className="btn-ghost">
            <Play className="h-3.5 w-3.5" /> {hero.secondaryCta}
          </a>
        </div>

        <p className="animate-rise delay-3 mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
          {hero.note}
        </p>

        {/* stat strip — frost panel over gradient */}
        <div className="animate-rise delay-4 mt-16 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl frost sm:grid-cols-3">
          {heroStats.map((s) => (
            <div key={s.label} className="px-6 py-7">
              <div className="display text-4xl font-semibold text-white">{s.value}</div>
              <div className="mt-2 text-[13px] leading-snug text-white/55">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
