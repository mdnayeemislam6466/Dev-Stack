import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologySection from './components/TechnologySection'
import Footer from './components/Footer'
import heroIllustration from './assets/hero-illustration.svg';

function ToastIcon({ type }) {
  const icon = type === 'success' ? '✓' : type === 'warning' ? '!' : 'i'

  return <span className={`toast-status-icon toast-status-${type}`}>{icon}</span>
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechnologySection />
        <section id="projects" className="sr-only" aria-label="Projects" />
        <section id="about" className="sr-only" aria-label="About" />
        <section id="careers" className="sr-only" aria-label="Careers" />
      </main>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2600}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        icon={({ type }) => <ToastIcon type={type} />}
        toastClassName="dev-stack-toast"
        bodyClassName="dev-stack-toast-body"
        progressClassName="dev-stack-toast-progress"
      />
    </>
  )
}
