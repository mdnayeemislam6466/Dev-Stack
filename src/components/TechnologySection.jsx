import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import TechnologyCard from './TechnologyCard'
import StackSidebar from './StackSidebar'

export default function TechnologySection() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch('/technologies.json')
        if (!response.ok) throw new Error('Could not load technology data.')
        const data = await response.json()
        setTechnologies(data)
      } catch (error) {
        toast.error('Technology data could not be loaded.')
      } finally {
        setLoading(false)
      }
    }
    loadTechnologies()
  }, [])

  const addToStack = (tech) => {
    if (stack.some(item => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`)
      return
    }
    setStack(current => [...current, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  const removeFromStack = (id) => {
    const removed = stack.find(item => item.id === id)
    setStack(current => current.filter(item => item.id !== id))

    if (removed) {
      toast.info(`${removed.name} removed from your stack.`)
    }
  }

  const removeAll = () => {
    if (!stack.length) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  const isAdded = (id) => stack.some(item => item.id === id)

  return (
    <section id="technologies" className="section-shell scroll-mt-20 pb-20">
      <div className="mb-7">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Explore the <span className="gradient-text">Technologies</span>
        </h2>
        <p className="mt-2 text-[12px] text-slate-400">Pick one technology per category to build your ideal stack.</p>
      </div>

      {loading ? (
        <div className="flex min-h-[350px] items-center justify-center rounded-xl border border-slate-100 text-sm text-slate-400">
          <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-pink-500" />
          Loading technologies...
        </div>
      ) : (
        <div className="grid items-start gap-5 lg:grid-cols-[1fr_230px]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map(tech => (
              <TechnologyCard key={tech.id} tech={tech} added={isAdded(tech.id)} onAdd={addToStack} />
            ))}
          </div>
          <StackSidebar stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
        </div>
      )}
    </section>
  )
}
