import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Calendar, User, Clock, Tag, ArrowLeft, ArrowRight } from 'lucide-react'
import { getAdjacentProjects } from '../data/projects'

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.95, y: 40, transition: { duration: 0.2 } },
}

export default function ProjectModal({ project, onClose }) {
  const { prev, next } = getAdjacentProjects(project.slug)

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-gray-950 shadow-2xl"
        >
          {/* ── Close Button ── */}
          <button
            onClick={onClose}
            className="sticky top-4 z-10 ml-auto mr-4 mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          {/* ── Content ── */}
          <div className="px-6 pb-8 md:px-10">
            {/* Hero Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <img
                src={project.src}
                alt={project.alt}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="mt-8 space-y-6">
              <div>
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                  {project.category}
                </span>
                <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-gray-300">{project.subtitle}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
                  <Calendar className="h-3.5 w-3.5 text-sky-400" />
                  {project.year}
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
                  <User className="h-3.5 w-3.5 text-sky-400" />
                  {project.client}
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
                  <Clock className="h-3.5 w-3.5 text-sky-400" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
                  <Tag className="h-3.5 w-3.5 text-sky-400" />
                  {project.role}
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">{project.description}</p>

              {/* Challenge & Solution */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="text-xs font-semibold text-red-400">Tantangan</span>
                  <p className="text-sm text-gray-400">{project.challenge}</p>
                </div>
                <div className="space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="text-xs font-semibold text-emerald-400">Solusi</span>
                  <p className="text-sm text-gray-400">{project.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <span className="text-xs font-semibold text-yellow-400">Hasil</span>
                <ul className="mt-3 space-y-2">
                  {project.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-400">
                        {i + 1}
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-xs font-semibold text-gray-400">Teknologi</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex gap-3">
                  {prev && (
                    <a
                      href={`/portfolio/${prev.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      {prev.title}
                    </a>
                  )}
                </div>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-gray-900 transition-all hover:-translate-y-0.5"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Kunjungi
                  </a>
                )}
                <div className="flex gap-3">
                  {next && (
                    <a
                      href={`/portfolio/${next.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {next.title}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
