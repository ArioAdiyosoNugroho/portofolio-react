import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/20">
      <Link to={`/portfolio/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
          <img
            src={project.src}
            alt={project.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">Proyek</p>
          </div>
        </div>
        <div className="p-6">
          <h2 className="font-display text-xl font-bold tracking-tight text-white">
            {project.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-300">
            {project.subtitle}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
            <span className="rounded-full bg-white/10 px-4 py-1.5 transition-colors group-hover:bg-white/20">
              Lihat Detail
            </span>
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
