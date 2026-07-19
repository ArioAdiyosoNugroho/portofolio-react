import { Routes, Route } from 'react-router-dom'
import Navbar       from './components/Navbar'
  import Hero          from './components/Hero'
  // import TrustBar      from './components/TrustBar'
  import About         from './components/About'
  import Services      from './components/Services'
  import Skills        from './components/Skills'
  import Portfolio     from './components/Portfolio'
  // import Scroll         from './components/scroll-expansion-hero'
  import Process       from './components/Process'
  import Testimonials  from './components/Testimonials'
  import Pricing       from './components/Pricing'
  import CTA           from './components/CTA'
  import Footer        from './components/Footer'
  import PortfolioPage    from './pages/PortfolioPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

  export default function App() {
    return (
      <div className="text-brand-dark bg-white antialiased overflow-x-hidden relative">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                {/* <TrustBar /> */}
                <About />
                {/* <Scroll /> */}
                <Services />
                <Skills />
                <Portfolio />
                <Process />
                <Testimonials />
                <Pricing />
                <CTA />
              </main>
            }
          />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
        </Routes>
        <Footer />
      </div>
    )
  }