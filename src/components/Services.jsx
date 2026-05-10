import { ServiceMarquee } from './Marquee'

const services = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a8a" strokeWidth="2" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: 'Brand Identity',
    desc: 'Logo, visual system, dan brand guidelines yang membuat kamu langsung dikenali dan diingat.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a8a" strokeWidth="2" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>,
    title: 'UI/UX Design',
    desc: 'Interface yang indah, intuitif, dan fokus pada konversi — bukan sekadar bagus dipandang.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a8a" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    title: 'Web Design',
    desc: 'Website berkualitas tinggi yang merepresentasikan brand kamu dan menghasilkan bisnis nyata.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a8a" strokeWidth="2" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    title: 'Mobile App Design',
    desc: 'Desain app Android/iOS yang memanjakan pengguna dan membuat mereka terus kembali.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a8a" strokeWidth="2" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: 'Frontend Development',
    desc: 'Kode bersih dan modern dengan React, Tailwind, dan lebih — desain jadi realita pixel-perfect.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a8a" strokeWidth="2" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: 'Software Development',
    desc: 'Solusi full-stack dan web apps yang dibangun untuk performa, keamanan, dan skalabilitas.',
  },
]

export default function Services() {
  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <ServiceMarquee />
      <section id="services" className="py-24 bg-gray-950 text-white" aria-labelledby="services-title">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="inline-block border border-white/15 text-white/50 rounded-full px-4 py-1 text-xs font-medium mb-4 tracking-wide">
              Yang kami kerjakan
            </span>
            <div className="flex items-end justify-between flex-wrap gap-8">
              <h2
                id="services-title"
                className="font-display font-extrabold leading-tight text-white max-w-md"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
              >
                Kami mendesain yang bermakna,<br />bukan sekadar kesan pertama
              </h2>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="inline-flex items-center bg-white rounded-full pl-6 pr-2 py-2 gap-4 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 group"
              >
                <span className="text-brand-dark text-sm font-semibold font-body">Mulai proyek</span>
                <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map(({ icon, title, desc }) => (
              <article key={title} className="border border-white/10 rounded-2xl p-7 hover:bg-white/[0.04] hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}