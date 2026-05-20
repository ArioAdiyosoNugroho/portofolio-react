import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Clock, Tag } from 'lucide-react'
import { projects, getAdjacentProjects } from '../data/projects'

function ProjectNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-white">404</h1>
        <p className="mt-4 text-gray-400">Proyek tidak ditemukan</p>
        <Link
          to="/portfolio"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Portfolio
        </Link>
      </div>
    </div>
  )
}

function ProjectDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)
  const { prev, next } = getAdjacentProjects(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!project) {
    return <ProjectNotFound />
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-gray-950" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 md:px-10 lg:px-16">
          <Link
            to="/portfolio"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Portfolio
          </Link>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
                {project.category}
              </span>
              <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="text-lg leading-relaxed text-gray-300">{project.subtitle}</p>
              <p className="text-base leading-relaxed text-gray-400">{project.description}</p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                  <Calendar className="h-4 w-4 text-sky-400" />
                  {project.year}
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                  <User className="h-4 w-4 text-sky-400" />
                  {project.client}
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                  <Clock className="h-4 w-4 text-sky-400" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                  <Tag className="h-4 w-4 text-sky-400" />
                  {project.role}
                </div>
              </div>

              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <ExternalLink className="h-4 w-4" />
                  Lihat Project
                </a>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Challenge & Solution ── */}
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-12 lg:grid-cols-2"
          >
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                Tantangan
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight">The Challenge</h2>
              <p className="text-gray-400 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                Solusi
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight">The Solution</h2>
              <p className="text-gray-400 leading-relaxed">{project.solution}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold tracking-tight mb-10"
          >
            Galeri Proyek
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`overflow-hidden rounded-2xl border border-white/10 ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                Hasil
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight mt-4 mb-6">
                Dampak & Hasil
              </h2>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-300">{result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold tracking-tight mb-6"
          >
            Teknologi & Tools
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-white/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      {project.testimonial && (
        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 text-center"
            >
              <svg
                className="mx-auto mb-6 h-8 w-8 text-sky-400/40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="font-display text-lg md:text-xl leading-relaxed text-white/80">
                &ldquo;{project.testimonial.text}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-white">{project.testimonial.author}</p>
                <p className="text-sm text-gray-400">{project.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Prev / Next Navigation ── */}
      <section className="border-t border-white/10 px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          {prev ? (
            <Link
              to={`/portfolio/${prev.slug}`}
              className="group flex items-center gap-3 text-left transition-all hover:-translate-x-1"
            >
              <ArrowLeft className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
              <div>
                <p className="text-xs text-gray-500">Sebelumnya</p>
                <p className="text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/portfolio/${next.slug}`}
              className="group flex items-center gap-3 text-right transition-all hover:translate-x-1"
            >
              <div>
                <p className="text-xs text-gray-500">Selanjutnya</p>
                <p className="text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
                  {next.title}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent p-8 md:p-16 text-center"
          >
            <div className="pointer-events-none absolute -top-20 right-0 h-40 w-80 bg-sky-500/20 blur-[100px]" />
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
              Punya proyek serupa? Mari kita diskusikan.
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-400 max-w-xl mx-auto">
              Setiap proyek adalah kolaborasi. Kami siap membantu mewujudkan ide Anda menjadi karya nyata.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5"
              >
                Hubungi Kami
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/15"
              >
                Lihat Proyek Lain
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetailPage
