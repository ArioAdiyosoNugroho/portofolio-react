import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

// ── ZoomParallax core ──────────────────────────────────────────────────────────
function ZoomParallax({ images }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={[
                'absolute top-0 flex h-full w-full items-center justify-center',
                index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : '',
                index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : '',
                index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : '',
                index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : '',
                index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : '',
                index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : '',
              ].join(' ')}
            >
              <div className="relative h-[25vh] w-[25vw]">
                <img
                  src={src}
                  alt={alt || `Parallax image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ── Portfolio images (7 max) ───────────────────────────────────────────────────
const portfolioImages = [
  {
    src: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Brand & Identity System',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'AI Product Dashboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'FinTech Mobile Experience',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Startup Brand Package',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Mountain Campaign',
  },
  {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Minimalist UI Kit',
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Nature Brand Identity',
  },
];

// ── Section header ─────────────────────────────────────────────────────────────
function PortfolioHeader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 bg-gray-950 text-white text-center px-6">
      <span className="inline-block border border-white/20 bg-white/10 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6">
        Portfolio
      </span>
      <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl">
        Jelajahi proyek-proyek<br className="hidden md:block" /> terbaik kami
      </h2>
    </div>
  );
}

// ── Portfolio footer CTA ───────────────────────────────────────────────────────
function PortfolioFooter() {
  return (
    <div className="flex flex-col items-center justify-center py-24 bg-gray-950 text-white text-center px-6">
    <a                      
        href="portfolio.html"
        className="inline-flex items-center bg-white text-gray-900 rounded-full pl-6 pr-2 py-2 gap-4 hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
      >
        <span className="text-sm font-semibold tracking-wide">Semua proyek</span>
        <span className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center shrink-0 group-hover:scale-95 transition-transform duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </a>
    </div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-950">
      <PortfolioHeader />
      <ZoomParallax images={portfolioImages} />
      <PortfolioFooter />
    </section>
  );
}