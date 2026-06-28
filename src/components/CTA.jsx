import { useState } from "react"
import { Arrow, Check } from "./Icons"
import { cta } from "../content"

export default function CTA() {
  const [pain, setPain] = useState(null) // selected focus id (null = step 1)
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  const selected = cta.options.find((o) => o.id === pain)

  async function handleSubmit(e) {
    e.preventDefault()
    const email = e.target.email.value.trim()
    if (!email) return
    const focus = selected ? selected.label : "Not specified"

    // No form backend configured yet → fall back to the visitor's mail client.
    if (!cta.formAccessKey) {
      window.location.href =
        `mailto:${cta.contactEmail}?subject=${encodeURIComponent(cta.subject)}` +
        `&body=${encodeURIComponent(`Access request from: ${email}\nFocus area: ${focus}`)}`
      return
    }

    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: cta.formAccessKey,
          subject: cta.subject,
          from_name: "BT4YOU landing",
          email,
          focus_area: focus,
          message: `New access request from ${email}\nFocus area: ${focus}`,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

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

          {status === "success" ? (
            <div className="mx-auto mt-8 max-w-md rounded-xl bg-white/10 px-6 py-5 text-white ring-1 ring-white/20">
              ✓ {cta.successMsg}
            </div>
          ) : pain === null ? (
            /* ── Step 1 — diagnostic hook ── */
            <div className="mx-auto mt-8 max-w-lg">
              <p className="text-base text-white/80 sm:text-lg">{cta.hookLabel}</p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cta.options.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setPain(o.id)}
                    className="group flex items-center justify-between rounded-xl bg-white/10 px-5 py-4 text-left font-medium text-white ring-1 ring-white/15 transition hover:bg-white/20 hover:ring-white/35"
                  >
                    <span>{o.label}</span>
                    <Arrow className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* ── Step 2 — capture ── */
            <div className="mx-auto mt-8 max-w-md">
              <button
                type="button"
                onClick={() => setPain(null)}
                className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/15 transition hover:text-white hover:ring-white/30"
              >
                <span className="text-white/50">{cta.focusLabel}:</span>
                <span className="font-medium text-white/90">{selected.label}</span>
                <span className="text-white/40">· {cta.changeLabel}</span>
              </button>

              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  required
                  autoFocus
                  placeholder={cta.emailPlaceholder}
                  className="input !bg-white/95"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-secondary justify-center whitespace-nowrap disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : cta.primary} <Arrow className="h-4 w-4" />
                </button>
              </form>

              <p className="mt-3 text-xs text-white/45">{cta.trust}</p>

              <div className="mt-6 space-y-2 text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                  {cta.nextTitle}
                </p>
                {cta.next.map((n, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-white/65">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-lt" />
                    <span>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {status === "error" && <p className="mt-3 text-sm text-red-200">{cta.errorMsg}</p>}

          <a
            href={`mailto:${cta.contactEmail}`}
            className="mt-6 inline-block text-sm font-medium text-white/65 underline-offset-4 hover:text-white hover:underline"
          >
            {cta.secondary}
          </a>
        </div>
      </div>
    </section>
  )
}
