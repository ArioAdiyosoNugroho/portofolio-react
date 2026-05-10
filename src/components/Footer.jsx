export default function Footer() {
  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-dark pt-16 pb-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
                <img src="/assets/img/dev.png" alt="ArioAdi Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-[1.1rem] text-white">
                Ario<span className="text-primary">Adi</span>
              </span>
            </div>
            <p className="text-sm text-white/35 leading-relaxed">
              Membuat brand dan pengalaman digital yang meninggalkan kesan mendalam.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="font-display font-bold text-sm text-white mb-4 tracking-wide">Navigasi</p>
            <ul className="flex flex-col gap-2.5 list-none">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'Tentang' },
                { href: '#services', label: 'Layanan' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: '#pricing', label: 'Harga' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} onClick={(e) => handleAnchorClick(e, href)} className="text-sm text-white/40 hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support links">
            <p className="font-display font-bold text-sm text-white mb-4 tracking-wide">Bantuan</p>
            <ul className="flex flex-col gap-2.5 list-none">
              <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="text-sm text-white/40 hover:text-white transition-colors duration-200">Hubungi Kami</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Syarat &amp; Ketentuan</a></li>
            </ul>
          </nav>

          {/* Social */}
          <nav aria-label="Social media links">
            <p className="font-display font-bold text-sm text-white mb-4 tracking-wide">Media Sosial</p>
            <ul className="flex flex-col gap-2.5 list-none">
              {['Instagram', 'LinkedIn', 'Twitter / X', 'Dribbble'].map(s => (
                <li key={s}><a href="#" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex justify-between items-center flex-wrap gap-3">
          <span className="text-xs text-white/25">© 2026 ArioAdi. Hak cipta dilindungi.</span>
          <span className="text-xs text-white/25">Dibuat dengan ♥ oleh ArioAdi</span>
        </div>
      </div>
    </footer>
  )
}
