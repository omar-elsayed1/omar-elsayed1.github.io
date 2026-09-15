import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Certifications } from './components/Certifications'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { ClosingCta } from './components/ClosingCta'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-paper-200">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
