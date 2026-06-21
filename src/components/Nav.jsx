import { useEffect, useState } from "react"
import { Logo } from "./Icons"
import { brand, nav } from "../content"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "frost-dark" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 text-white">
          <Logo className="h-8 w-8" />
          <span className="text-[15px] font-bold tracking-tight">
            {brand.name}<span className="font-medium text-white/55"> {brand.product}</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="font-mono text-[12px] uppercase tracking-[0.12em] text-white/65 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#cta" className="btn-primary !px-4 !py-2 text-xs">{nav.cta}</a>
      </nav>
    </header>
  )
}
