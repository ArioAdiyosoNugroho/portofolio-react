import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

function PortfolioPage() {
  const [modalProject, setModalProject] = useState(null)
  const [category, setCategory] = useState('Semua')
  const filtered = category === 'Semua' ? projects : projects.filter((p) => p.category === category)

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-500/15 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <span className="inline-block border border-white/20 bg-white/10 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6">
            Portfolio
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl">
            Kumpulan proyek unggulan kami dalam satu halaman.
          </h1>
          <p className="mt-6 max-w-3xl text-sm md:text-base text-gray-300 leading-relaxed">
            Setiap pekerjaan dirancang dengan pendekatan strategis dan visual yang berkelas. Temukan hasil kerja kami untuk brand digital, aplikasi, dan kampanye yang berdampak.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              Kembali ke Beranda
            </Link>
            <a
              href="#portfolio-grid"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/15"
            >
              Lihat Daftar Proyek
            </a>
          </div>
        </div>
      </section>

      <section id="portfolio-grid" className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap gap-3">
            {['Semua', ...new Set(projects.map((p) => p.category))].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                  category === cat
                    ? 'border-white/30 bg-white text-gray-900'
                    : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project, index) => (
              <div key={project.slug} className="relative">
                <ProjectCard project={project} index={index} />
                <button
                  onClick={() => setModalProject(project)}
                  className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs text-white/80 backdrop-blur-sm transition-colors hover:bg-black/80 hover:text-white"
                >
                  Quick View
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </div>
  )
}

export default PortfolioPage
