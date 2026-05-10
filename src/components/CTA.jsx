export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-white" aria-labelledby="cta-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-brand-dark rounded-[28px] px-8 md:px-14 py-20 text-center relative overflow-hidden">
          {/* decorative circles */}
          <div className="absolute w-56 h-56 rounded-full border border-primary/25 -top-14 -right-14 pointer-events-none" />
          <div className="absolute w-36 h-36 rounded-full border border-primary/15 -top-8 -right-8 pointer-events-none" />
          <div className="absolute w-52 h-52 rounded-full border border-primary/15 -bottom-14 -left-14 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-sm text-white/40 mb-3">— Yuk mulai desain proyekmu</p>
            <h2
              id="cta-title"
              className="font-display font-extrabold leading-tight text-white mb-3"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              Siap mengubah brand kamu<br />menjadi gaya yang tak terlupakan?
            </h2>
            <p className="text-[0.9375rem] text-white/40 mb-9">
              Mari bangun sesuatu yang luar biasa bersama.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:arionwebdev@gmail.com"
                className="inline-flex items-center bg-white rounded-full pl-7 pr-2 py-2 gap-5 hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 group"
              >
                <span className="text-brand-dark text-base font-semibold font-body">Kirim pesan</span>
                <span className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </a>
              <a
                href="https://wa.me/6283876717125"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary rounded-full pl-7 pr-2 py-2 gap-5 hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 group"
              >
                <span className="text-white text-base font-semibold font-body">Chat via WhatsApp</span>
                <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img src="/assets/img/icon/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
