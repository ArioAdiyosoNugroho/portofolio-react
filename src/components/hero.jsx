import { HeroMarquee } from './Marquee'

export default function Hero() {
  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="pt-32 pb-16 bg-white overflow-hidden" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h1
            id="hero-title"
            className="font-display font-extrabold leading-[1.08] tracking-tight text-brand-dark mb-6"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
          >
            <span>MEMBANGUN WEBSITE</span><br />
            <span className="text-primary">MODERN</span><br />
            <span>YANG MENGKONVERSI</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-md mb-10 font-body">
            Tingkatkan brand kamu dengan solusi desain terbaik. Dari branding hingga UI, kami wujudkan visimu dengan layanan digital yang dipersonalisasi.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="inline-flex items-center bg-brand-dark rounded-full pl-7 pr-2 py-2 gap-5 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 group"
            >
              <span className="text-white text-base font-semibold font-body">Ayo ngobrol</span>
              <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleAnchorClick(e, '#portfolio')}
              className="inline-flex items-center bg-white border border-brand-border rounded-full pl-7 pr-2 py-2 gap-5 hover:-translate-y-0.5 hover:border-brand-dark hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-brand-dark text-base font-semibold font-body">Lihat Portfolio</span>
              <span className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </a>
          </div>
        </div>

        {/* Right — image + float cards */}
        <div className="relative">
          <div className="relative w-full aspect-square bg-slate-100 rounded-[24px] border border-slate-200 shadow-inner overflow-hidden">
            <img src="/assets/img/gwh.png" alt="ArioAdi team" className="w-full h-full object-cover object-center" />
          </div>
          {/* stat card top-right */}
          <div className="float-card absolute -top-5 -right-5 bg-white border border-slate-100 rounded-2xl shadow-float p-5 min-w-[180px] z-20">
            <div className="font-display text-3xl font-extrabold text-brand-dark">250+</div>
            <div className="text-xs font-medium text-slate-400 mt-1">Klien Puas</div>
            <div className="flex items-center mt-3">
              <span className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white" />
              <span className="w-8 h-8 rounded-full border-2 border-white bg-primary-dark flex items-center justify-center text-[10px] font-bold text-white -ml-2" />
              <span className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 -ml-2">+</span>
            </div>
          </div>
          {/* stat card bottom-left */}
          <div className="float-card float-card-delay absolute -bottom-5 -left-5 bg-white border border-slate-100 rounded-2xl shadow-float p-5 min-w-[180px] z-20">
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Growth Rate</div>
            <div className="font-display text-4xl font-extrabold text-primary">40%</div>
            <div className="text-xs font-medium text-slate-400 mt-1">Peningkatan Revenue</div>
          </div>
        </div>
      </div>

      <HeroMarquee />
    </section>
  )
}