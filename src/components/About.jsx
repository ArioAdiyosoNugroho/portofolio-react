export default function About() {
  return (
    <section id="about" className="py-24 bg-white" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left image */}
        <div className="relative">
          <div className="h-96 rounded-card bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden" role="img" aria-label="Foto tim">
            <img
              src="/assets/img/saya2.JPG"
              alt="Foto Saya"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-white border border-brand-border rounded-2xl px-5 py-4 shadow-card z-10">
            <div className="font-display text-2xl font-extrabold text-primary">3+</div>
            <div className="text-xs text-brand-grey mt-0.5">Tahun Pengalaman</div>
          </div>
        </div>

        {/* Right text */}
        <div>
          <span className="inline-block border border-brand-border rounded-full px-4 py-1 text-xs font-medium text-brand-grey mb-4 tracking-wide">
            Tentang kami
          </span>
          <h2
            id="about-title"
            className="font-display font-extrabold leading-tight text-brand-dark mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Kenalan dengan ArioAdi:<br />Mitra Desain Kamu
          </h2>
          <p className="text-[0.9375rem] text-brand-grey leading-relaxed mb-4">
            Kami bukan sekadar desainer — kami adalah kreator, pemecah masalah, dan sahabat terbaik brand kamu.
          </p>
          <p className="text-[0.9375rem] text-brand-grey leading-relaxed">
            Anggap kami sebagai perpanjangan tim kamu, siap mewujudkan ide-idemu dengan presisi, kreativitas, dan semangat.
          </p>
          <div className="bg-brand-dark rounded-2xl px-8 py-7 mt-8 flex flex-wrap items-center justify-between gap-5">
            <div>
              <div className="font-display text-5xl font-extrabold text-white leading-none">40%</div>
              <div className="text-sm text-white/40 mt-1">Rata-rata peningkatan revenue klien</div>
            </div>
            <div className="flex flex-wrap gap-2 max-w-[260px]">
              {['Creative Developer', 'Scalable Web Apps', 'Cross-platform Dev', 'System Design'].map(tag => (
                <span key={tag} className="border border-white/15 bg-white/5 text-white/70 rounded-full px-4 py-1.5 text-[0.8125rem]">{tag}</span>
              ))}
            </div>
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}