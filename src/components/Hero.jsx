import heroIllustration from './src/assets/hero-illustration.svg'

export default function Hero() {
  return (
    <section id="home" className="section-shell grid min-h-[455px] items-center gap-8 py-12 md:grid-cols-[1.15fr_.85fr] md:py-16">
      <div>
        <h1 className="max-w-[620px] text-4xl font-extrabold leading-[1.08] tracking-[-1.5px] text-slate-900 sm:text-5xl">
          Build Your Ideal
          <span className="block gradient-text">Development Stack</span>
        </h1>
        <p className="mt-5 max-w-[570px] text-[14px] leading-6 text-slate-500">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#technologies" className="rounded-lg gradient-bg px-4 py-3 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5">
            Explore Technologies
          </a>
          <a href="#about" className="rounded-lg border border-slate-200 px-7 py-3 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50">
            Learn More
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src={heroIllustration} alt="Layered development technology illustration" className="w-[280px] sm:w-[350px] md:w-[390px]" />
      </div>
    </section>
  )
}
