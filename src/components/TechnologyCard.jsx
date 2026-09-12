export default function TechnologyCard({ tech, added, onAdd }) {
  return (
    <article className="card-shadow flex min-h-[254px] flex-col rounded-xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="grid h-9 w-9 place-items-center">
          <img src={tech.icon} alt={`${tech.name} icon`} className="max-h-8 max-w-8 object-contain" loading="lazy" />
        </div>
        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[9px] font-semibold text-slate-500">{tech.badge}</span>
      </div>

      <h3 className="mt-3 text-[16px] font-bold text-slate-800">{tech.name}</h3>
      <p className="mt-2 line-clamp-3 text-[11px] leading-[1.55] text-slate-400">{tech.description}</p>

      <div className="mt-auto pt-4">
        <div className="mb-3 flex items-center justify-between text-[10px]">
          <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">{tech.category}</span>
          <span className="text-slate-400">{tech.difficulty}</span>
          <span className="font-semibold text-slate-500"><span className="text-amber-400">★</span> {tech.rating}</span>
        </div>
        <button
          onClick={() => onAdd(tech)}
          disabled={added}
          className={`w-full rounded-md px-3 py-2.5 text-[11px] font-semibold transition ${added ? 'cursor-not-allowed bg-slate-100 text-slate-400' : 'bg-slate-950 text-white hover:bg-slate-800'}`}
        >
          {added ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  )
}
