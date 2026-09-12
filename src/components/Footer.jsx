export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white" id="contact">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.7fr_1fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md gradient-bg text-[9px] font-extrabold text-white">DS</span>
            <span className="text-[15px] font-bold">Dev <span className="gradient-text">Stack</span></span>
          </a>
          <p className="mt-4 max-w-[290px] text-[11px] leading-5 text-slate-400">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-4 flex gap-4 text-[10px] font-medium text-slate-500">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">LinkedIn</a>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-700">Product</h3>
          <div className="mt-4 space-y-3 text-[10px] text-slate-400">
            <a className="block hover:text-slate-700" href="#home">Home</a>
            <a className="block hover:text-slate-700" href="#technologies">Technologies</a>
            <a className="block hover:text-slate-700" href="#projects">Projects</a>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-700">Company</h3>
          <div className="mt-4 space-y-3 text-[10px] text-slate-400">
            <a className="block hover:text-slate-700" href="#about">About</a>
            <a className="block hover:text-slate-700" href="#contact">Contact</a>
            <a className="block hover:text-slate-700" href="#careers">Careers</a>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-700">Legal</h3>
          <div className="mt-4 space-y-3 text-[10px] text-slate-400">
            <a className="block hover:text-slate-700" href="#privacy">Privacy Policy</a>
            <a className="block hover:text-slate-700" href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="section-shell flex flex-col gap-3 border-t border-slate-100 py-5 text-[9px] text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#privacy" className="hover:text-slate-500">Privacy</a>
          <a href="#terms" className="hover:text-slate-500">Terms</a>
        </div>
      </div>
    </footer>
  )
}
