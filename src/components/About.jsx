import { useRef, useState, useEffect } from 'react';

export default function About() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  // Default di-mute agar browser mengizinkan autoplay
  const [isMuted, setIsMuted] = useState(true);

  // Intersection Observer untuk auto play/pause saat di-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika 50% elemen terlihat di layar, play video. Jika tidak, pause.
        if (entry.isIntersecting) {
          videoRef.current?.play().catch((err) => {
            console.warn("Autoplay dicegah oleh browser:", err);
          });
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="about" className="py-24 bg-white" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Video Section */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="group h-96 rounded-card bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden" 
            role="figure" 
            aria-label="Video profil tim"
          >
            <video
              ref={videoRef}
              src="/assets/video/video.mp4"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              loop
              playsInline
              muted={isMuted}
            />
            {/* Overlay gelap transparan */}
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/0" />
            
            {/* Toggle Sound Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:bg-black/50 hover:scale-110 active:scale-95"
              aria-label={isMuted ? "Bunyikan suara" : "Matikan suara"}
            >
              {isMuted ? (
                // Icon Mute
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                // Icon Volume
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Badge Pengalaman */}
          <div className="absolute -bottom-5 -right-5 bg-white border border-brand-border rounded-2xl px-5 py-4 shadow-card z-10 transition-transform duration-500 hover:-translate-y-1">
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
            <div className="flex flex-wrap gap-2 max-w-[260px]">
              {['Creative Developer', 'Scalable Web Apps', 'Cross-platform Dev', 'System Design'].map(tag => (
                <span key={tag} className="border border-white/15 bg-white/5 text-white/70 rounded-full px-4 py-1.5 text-[0.8125rem]">
                  {tag}
                </span>
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
  );
}