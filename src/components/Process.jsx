const steps = [
  {
    num: '01',
    badge: 'Define',
    title: 'Discovery & Strategy',
    desc: 'Kami mendalami brand, audiens, dan tujuan bisnis kamu untuk membuat peta jalan strategis yang menjadi acuan setiap keputusan desain.',
    color: 'bg-primary ring-primary/20',
    indent: false,
  },
  {
    num: '02',
    badge: 'Design',
    title: 'Creative Design',
    desc: 'Dari wireframe hingga prototype visual yang memukau — semua dikerjakan di Figma dengan standar UI/UX terbaik.',
    color: 'bg-primary-dark ring-primary-dark/20',
    indent: true,
  },
  {
    num: '03',
    badge: 'Build',
    title: 'Development',
    desc: 'Kode bersih dan scalable bertemu desain pixel-perfect. Kami build produk digital yang cepat, accessible, dan siap perform.',
    color: 'bg-primary ring-primary/20',
    indent: false,
  },
  {
    num: '04',
    badge: 'Launch',
    title: 'Launch & Support',
    desc: 'Kami launch dengan presisi dan tetap menemani kamu pasca-launch untuk optimisasi, update, dan perbaikan berkelanjutan.',
    color: 'bg-primary-dark ring-primary-dark/20',
    indent: true,
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-950" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="inline-block border border-white/10 rounded-full px-4 py-1 text-xs font-medium text-brand-grey mb-4 tracking-wide">
            Cara kami bekerja
          </span>
          <h2
            id="process-title"
            className="font-display font-extrabold leading-tight text-white max-w-lg"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Bagaimana kami mengerjakan proyekmu dari awal sampai selesai
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Garis putus-putus disesuaikan agar lebih halus di bg gelap */}
          <div className="absolute left-8 top-10 bottom-10 w-px border-l-2 border-dashed border-white/10" aria-hidden="true" />

          {steps.map(({ num, badge, title, desc, color, indent }) => (
            <div key={num} className={`flex gap-8 mb-8 ${indent ? 'pl-0 md:pl-12' : ''}`}>
              <div className={`shrink-0 w-16 h-16 rounded-full ${color} ring-[6px] flex items-center justify-center z-10 relative font-display font-extrabold text-white text-sm`}>
                {num}
              </div>
              
              {/* Card menggunakan bg-brand-mid dan border halus */}
              <div className="flex-1 bg-brand-mid border border-white/5 rounded-card p-7 shadow-2xl">
                <span className="inline-block bg-primary/10 text-primary text-[0.7rem] font-bold uppercase tracking-widest rounded-full px-3 py-0.5 mb-3">
                  {badge}
                </span>
                <h3 className="font-display text-[1.1rem] font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}

          <p className="text-center mt-10 font-display text-[1.1rem] font-bold text-primary border-b-2 border-primary/30 pb-1 w-fit mx-auto">
            ✦ Siap dikirimkan!
          </p>
        </div>
      </div>
    </section>
  )
}