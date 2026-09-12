import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologySection from './components/TechnologySection'
import Footer from './components/Footer'

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
      <ToastContainer position="top-right" autoClose={2200} newestOnTop theme="light" />
    </>
  )
}
