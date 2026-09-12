import { useState } from 'react'

const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="section-shell relative flex h-[64px] items-center justify-between">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
          onClick={() => setOpen(v => !v)}
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <span className="flex w-5 flex-col gap-1">
            <span className="h-0.5 w-full bg-slate-700" />
            <span className="h-0.5 w-full bg-slate-700" />
            <span className="h-0.5 w-full bg-slate-700" />
          </span>
        </button>

        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg gradient-bg text-[11px] font-extrabold text-white">DS</span>
          <span className="text-[17px] font-bold tracking-tight">
            Dev <span className="gradient-text">Stack</span>
          </span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((link, i) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={`text-[12px] font-medium transition hover:text-pink-600 ${i === 0 ? 'text-pink-600' : 'text-slate-500'}`}>
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden text-[12px] font-medium text-slate-600 hover:text-slate-900 sm:block">Sign In</button>
          <button className="rounded-full gradient-bg px-5 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:opacity-90">Sign Up</button>
        </div>

        {open && (
          <div className="absolute left-0 right-0 top-[64px] border-b border-slate-100 bg-white p-4 shadow-lg md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map(link => (
                <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`} className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-pink-600">
                  {link}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
