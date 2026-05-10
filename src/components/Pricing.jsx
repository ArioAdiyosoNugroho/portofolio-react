const plans = [
  {
    tier: 'Starter',
    name: 'Basic',
    desc: 'Cocok untuk UMKM & personal brand yang baru mulai go digital.',
    price: 'Rp 500K',
    note: 'Mulai dari · tergantung kompleksitas',
    popular: false,
    features: [
      { ok: true,  text: 'Landing page 1 halaman' },
      { ok: true,  text: 'Desain responsif mobile' },
      { ok: true,  text: 'Hingga 3x revisi' },
      { ok: true,  text: 'Delivery 5–7 hari kerja' },
      { ok: true,  text: 'Source file HTML/CSS' },
      { ok: false, text: 'Custom CMS/Backend' },
      { ok: true,  text: 'Konsultasi Gratis' },
    ],
    cta: 'Mulai Konsultasi',
    ctaStyle: 'border-2 border-brand-border text-brand-dark hover:border-primary hover:text-primary',
  },
  {
    tier: 'Professional',
    name: 'Growth',
    desc: 'Ideal untuk bisnis yang serius membangun kehadiran digital yang kuat.',
    price: 'Rp 2Jt',
    note: 'Mulai dari · tergantung kompleksitas',
    popular: true,
    features: [
      { ok: true, text: 'Website multi-halaman (5–8 hal.)' },
      { ok: true, text: 'Desain UI/UX dari Figma' },
      { ok: true, text: 'Responsif semua device' },
      { ok: true, text: 'Hingga 7x revisi' },
      { ok: true, text: 'SEO on-page dasar' },
      { ok: true, text: 'CMS sederhana (Laravel/CI)' },
      { ok: true, text: 'Delivery 14–21 hari kerja' },
    ],
    cta: 'Pilih Paket Ini',
    ctaStyle: 'bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 shadow-primary',
  },
  {
    tier: 'Enterprise',
    name: 'Scale',
    desc: 'Solusi digital penuh untuk perusahaan & startup yang ingin scale cepat.',
    price: 'Rp 4Jt',
    note: 'Mulai dari · custom sesuai kebutuhan',
    popular: false,
    features: [
      { ok: true, text: 'Aplikasi web full-stack' },
      { ok: true, text: 'Desain UI/UX premium (Figma)' },
      { ok: true, text: 'React / Laravel / CodeIgniter' },
      { ok: true, text: 'Database & REST API' },
      { ok: true, text: 'Revisi unlimited (30 hari)' },
      { ok: true, text: 'Payment gateway integration' },
      { ok: true, text: 'Support pasca-launch 1 bulan' },
    ],
    cta: 'Hubungi Kami',
    ctaStyle: 'bg-brand-dark text-white hover:bg-primary hover:-translate-y-0.5',
  },
]

export default function Pricing() {
  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 bg-brand-light" aria-labelledby="pricing-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="inline-block border border-brand-border rounded-full px-4 py-1 text-xs font-medium text-brand-grey mb-4 tracking-wide">
            Harga Layanan
          </span>
          <h2
            id="pricing-title"
            className="font-display font-extrabold leading-tight text-brand-dark mb-3"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Investasi yang tepat<br />untuk brand kamu
          </h2>
          <p className="text-sm text-brand-grey max-w-md mx-auto leading-relaxed">
            Harga transparan tanpa biaya tersembunyi. Konsultasi gratis sebelum deal.
          </p>
          <div className="mt-8 inline-block bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-full px-6 py-3">
            <span className="text-sm font-semibold text-primary">✓ Konsultasi Gratis - Tidak ada biaya tersembunyi</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(({ tier, name, desc, price, note, popular, features, cta, ctaStyle }) => (
            <div
              key={name}
              className={`rounded-card p-8 bg-white hover:-translate-y-1 transition-all duration-300 relative ${
                popular ? 'border-2 border-primary hover:shadow-primary' : 'border border-brand-border hover:shadow-card'
              }`}
            >
              {popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white font-display font-bold text-[0.65rem] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                  ✦ Paling Populer
                </div>
              )}
              <span className={`inline-block text-[0.65rem] font-bold uppercase tracking-widest mb-4 ${popular ? 'text-primary' : 'text-brand-grey'}`}>
                {tier}
              </span>
              <h3 className="font-display text-xl font-extrabold text-brand-dark mb-1">{name}</h3>
              <p className="text-xs text-brand-grey mb-5 leading-relaxed">{desc}</p>
              <div className="mb-1">
                <span className="font-display text-3xl font-extrabold text-brand-dark">{price}</span>
              </div>
              <p className="text-[0.72rem] text-slate-400 mb-6">{note}</p>
              <div className="h-px bg-brand-border mb-6" />
              <ul className="flex flex-col gap-3 mb-8">
                {features.map(({ ok, text }) => (
                  <li key={text} className={`flex items-start gap-2.5 text-sm ${ok ? 'text-brand-grey' : 'text-slate-300'}`}>
                    <span className={`font-bold mt-0.5 shrink-0 ${ok ? 'text-primary' : ''}`}>{ok ? '✓' : '✕'}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className={`block text-center font-display font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 ${ctaStyle}`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-8">
          * Harga dapat berubah sesuai kebutuhan proyek. Konsultasi gratis, tidak ada biaya tersembunyi.
        </p>
      </div>
    </section>
  )
}
