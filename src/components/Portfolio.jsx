import { Link } from 'react-router-dom';

// ── Portfolio images ───────────────────────────────────────────────────────────
const portfolioImages = [
  { src: '/assets/img/web/web-alhadi.png',      alt: 'Alhadi',              tag: 'Web Design' },
  { src: '/assets/img/web/web-gf2.png',          alt: 'GF2 Racing',          tag: 'UI/UX' },
  { src: '/assets/img/web/web-resik.png',        alt: 'Resik.id',            tag: 'Web App' },
  { src: '/assets/img/web/web-ads.png',          alt: 'ADS Motor Racing',    tag: 'Branding' },
  { src: '/assets/img/web/perpustakaan.png',     alt: 'Perpustakaan Digital',tag: 'Web App' },
  { src: '/assets/img/web/web-putri-jaya.jpeg',  alt: 'Zalfa Jaya',          tag: 'Web Design' },
  { src: '/assets/img/web/web-pos.png',          alt: 'Aplikasi POS',        tag: 'Dashboard' },
  { src: '/assets/img/web/web-hutan-kita.png',   alt: 'Hutan Kita',          tag: 'Landing Page' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-950 py-24 px-5 md:px-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-14 text-center">
        <span className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-white/60 mb-5">
          Portfolio
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
          Proyek-proyek terbaik kami
        </h2>
        <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xl mx-auto">
          Dari branding hingga web app — setiap karya dibuat dengan penuh dedikasi.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {portfolioImages.map(({ src, alt, tag }, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/5 aspect-[4/3] cursor-pointer"
            style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Image */}
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-1">
                {tag}
              </span>
              <h3 className="text-white font-bold text-base leading-tight">
                {alt}
              </h3>
            </div>

            {/* Always-visible bottom tag on mobile */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:hidden">
              <h3 className="text-white font-semibold text-sm">{alt}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          Punya ide luar biasa? Mari kita wujudkan bersama.
        </p>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-3 bg-white text-gray-900 rounded-full pl-6 pr-2 py-2 hover:bg-gray-100 transition-all duration-300 group"
        >
          <span className="text-sm font-bold">Lihat Semua Proyek</span>
          <span className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center shrink-0 group-hover:rotate-[-45deg] transition-transform duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}