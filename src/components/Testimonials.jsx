import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  { id: 0,  initials: 'RH', name: 'Rizky Handoko',   role: 'Owner, Toko Batik Nusantara',     imgSrc: 'https://i.pravatar.cc/150?img=31', text: 'Jujur awalnya ragu, takut hasilnya biasa aja. Eh ternyata beneran beda banget! Website toko online kita sekarang keliatan lebih profesional dan penjualan naik lumayan. Makasih ArioAdi!' },
  { id: 1,  initials: 'SA', name: 'Siti Aminah',      role: 'Founder, Warung Kopi Siji',       imgSrc: 'https://i.pravatar.cc/150?img=44', text: 'Tim ArioAdi responsif banget, WA dibalas cepet, revisi nggak dipersulit. Hasilnya memuaskan, desain logo kita sekarang udah keliatan kayak brand beneran. Recommended deh!' },
  { id: 2,  initials: 'BP', name: 'Bagas Pratama',    role: 'CEO, PT Maju Digital',            imgSrc: 'https://i.pravatar.cc/150?img=12', text: 'Udah pakai jasa desainer lain sebelumnya, hasilnya mengecewakan. Nyoba ArioAdi dan langsung kapok pindah. Prosesnya jelas, hasilnya rapi, dan harganya masuk akal buat kualitas segini.' },
  { id: 3,  initials: 'DK', name: 'Dewi Kartika',     role: 'Marketing, Properti Sejahtera',   imgSrc: 'https://i.pravatar.cc/150?img=47', text: 'Landing page yang mereka bikin buat campaign kita beneran convert! Dari 100 pengunjung bisa 8-9 yang hubungi kita. Sebelumnya nggak nyampe 2. Luar biasa, langsung repeat order.' },
  { id: 4,  initials: 'YW', name: 'Yanto Wibowo',     role: 'Pemilik, UD Sinar Jaya',          imgSrc: 'https://i.pravatar.cc/150?img=15', text: 'Kita UMKM kecil yang baru mau go digital, takutnya nggak dilayani dengan serius. Tapi ArioAdi malah sabar banget jelasin dari awal. Hasilnya website kita udah live dan keren banget!' },
  { id: 5,  initials: 'NR', name: 'Nadia Rahayu',     role: 'IT Manager, Koperasi Makmur',     imgSrc: 'https://i.pravatar.cc/150?img=49', text: 'Desain UI dashboard internal kantor kita jauh lebih rapi sekarang. Karyawan juga jadi lebih mudah pakainya. ArioAdi ngerti kebutuhan bisnis, bukan cuma soal tampilan doang.' },
  { id: 6,  initials: 'DR', name: 'dr. Rina Susanti', role: 'Direktur, Klinik Sehat Bersama',  imgSrc: 'https://i.pravatar.cc/150?img=32', text: 'Brand identity klinik kami sekarang keliatan lebih terpercaya di mata pasien. Beberapa pasien baru bilang mereka tertarik karena liat Instagram kita. Hasilnya nyata!' },
  { id: 7,  initials: 'AF', name: 'Arief Fauzi',      role: 'CTO, Startup Logistik Cepat',     imgSrc: 'https://i.pravatar.cc/150?img=18', text: 'Aplikasi mobile kita diredesign sama ArioAdi dan rating di Play Store langsung naik dari 3.6 jadi 4.5 dalam dua bulan. User banyak yang komen UI-nya jadi enak banget dipake.' },
  { id: 8,  initials: 'HS', name: 'Hendra Santoso',   role: 'Direktur, CV Berkah Konstruksi',  imgSrc: 'https://i.pravatar.cc/150?img=53', text: 'Pertama ketemu ArioAdi lewat rekomendasi teman, dan itu salah satu keputusan terbaik buat bisnis kita. Website company profile kita sekarang sering dipuji klien yang baru kenal kita.' },
  { id: 9,  initials: 'FL', name: 'Fitri Larasati',   role: 'Brand Manager, Skincare Alami.id', imgSrc: 'https://i.pravatar.cc/150?img=38', text: 'Kami pesan paket branding lengkap — logo, warna, tipografi, sampai template sosmed. Hasilnya konsisten dan profesional banget. Sekarang konten kita jauh lebih gampang dibikin.' },
  { id: 10, initials: 'TP', name: 'Tommy Prasetyo',   role: 'Product Owner, EduTech Pintar',   imgSrc: 'https://i.pravatar.cc/150?img=57', text: 'Deadline kita mepet banget, cuma 2 minggu. ArioAdi sanggup dan hasilnya nggak asal-asalan. Justru bagus banget. Serius tim yang handal dan bisa diandalkan pas situasi darurat.' },
  { id: 11, initials: 'MF', name: 'Maya Fitriani',    role: 'Owner, Butik Zahara Collection',  imgSrc: 'https://i.pravatar.cc/150?img=40', text: 'Toko kita dulu sering dikira nggak resmi gara-gara tampilannya polos. Setelah ArioAdi rebranding, pelanggan makin percaya dan omzet bulan pertama langsung naik 30%. Mantap!' },
];

// ── Card ──────────────────────────────────────────────────────────────────────
function TestimonialCard({ position, testimonial, handleMove, cardSize }) {
  const isCenter = position === 0;
  const absPos = Math.abs(position);

  return (
    <div
      onClick={() => handleMove(position)}
      className={[
        'absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out',
        isCenter
          ? 'z-10 bg-primary border-primary text-white'
          : 'z-0 bg-white border-brand-border text-brand-dark hover:border-primary/50',
      ].join(' ')}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? '0px 8px 0px 4px #e5e7eb'
          : '0px 0px 0px 0px transparent',
        zIndex: isCenter ? 10 : Math.max(0, 8 - absPos * 2),
        opacity: absPos > 2 ? 0 : absPos === 2 ? 0.5 : 1,
        pointerEvents: absPos > 2 ? 'none' : 'auto',
      }}
    >
      {/* diagonal cut line */}
      <span
        className="absolute block origin-top-right rotate-45 bg-brand-border"
        style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }}
      />

      <img
        src={testimonial.imgSrc}
        alt={testimonial.name}
        className="mb-4 h-14 w-12 object-cover object-top"
        style={{ boxShadow: '3px 3px 0px #f9fafb' }}
      />

      <h3 className={`text-base sm:text-lg font-medium leading-snug ${isCenter ? 'text-white' : 'text-brand-dark'}`}>
        "{testimonial.text}"
      </h3>

      <div className="absolute bottom-8 left-8 right-8">
        <p className={`text-sm font-semibold ${isCenter ? 'text-white' : 'text-brand-dark'}`}>
          {testimonial.name}
        </p>
        <p className={`text-xs mt-0.5 ${isCenter ? 'text-white/70' : 'text-brand-grey'}`}>
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Testimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [list, setList] = useState(
    testimonials.map((t) => ({ ...t, tempId: t.id }))
  );

  const handleMove = (steps) => {
    const newList = [...list];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setList(newList);
  };

  useEffect(() => {
    const update = () => {
      setCardSize(window.matchMedia('(min-width: 640px)').matches ? 365 : 290);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white" aria-labelledby="testi-title">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block border border-brand-border rounded-full px-4 py-1.5 text-xs font-semibold text-brand-grey mb-4 tracking-widest uppercase">
            Ulasan
          </span>
          <h2
            id="testi-title"
            className="font-display font-extrabold leading-tight text-brand-dark"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Kata mereka tentang<br />hasil kerja kami
          </h2>
        </div>

        {/* Cards */}
        <div
          className="relative w-full"
          style={{
            height: 600,
            maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          {list.map((testimonial, index) => {
            const position =
              list.length % 2
                ? index - (list.length + 1) / 2
                : index - list.length / 2;
            return (
              <TestimonialCard
                key={testimonial.tempId}
                testimonial={testimonial}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
              />
            );
          })}

          {/* Nav buttons */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
            <button
              onClick={() => handleMove(-1)}
              className="flex h-14 w-14 items-center justify-center border-2 border-brand-border bg-white text-brand-dark hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
              aria-label="Sebelumnya"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => handleMove(1)}
              className="flex h-14 w-14 items-center justify-center border-2 border-brand-border bg-white text-brand-dark hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
              aria-label="Berikutnya"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}