export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-xl border border-slate-100 bg-white p-4 shadow-sm md:sticky md:top-[88px]">
      <div>
        <h2 className="text-sm font-bold text-slate-800">Your Stack</h2>
        <p className="mt-1 text-[10px] text-slate-400">
          {stack.length} Technology{stack.length === 1 ? '' : 'ies'} Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="mt-4 grid min-h-[82px] place-items-center rounded-lg border border-dashed border-slate-200 text-center text-[11px] text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="mt-4 space-y-2">
            {stack.map(item => (
              <div key={item.id} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <img src={item.icon} alt="" className="h-7 w-7 object-contain" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold text-slate-800">{item.name}</p>
                  <p className="text-[8px] text-slate-400">{item.category}</p>
                </div>
                <button onClick={() => onRemove(item.id)} className="px-1 text-xl font-light leading-none text-slate-400 hover:text-red-500" aria-label={`Remove ${item.name}`}>
                  ×
                </button>
              </div>
            ))}
          </div>
          <button onClick={onRemoveAll} className="mt-5 w-full rounded-md border border-red-200 py-2.5 text-[11px] font-semibold text-red-500 transition hover:bg-red-50">
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}
