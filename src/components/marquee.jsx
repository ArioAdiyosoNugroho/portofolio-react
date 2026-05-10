import { useEffect, useRef } from 'react'

const HERO_ITEMS = [
  'Web Development','UI/UX Design','Backend Dev',
  'Frontend Dev','Mobile App','REST API',
  'Full-Stack','Software Dev',
]

const SVC_ITEMS = [
  '✦ Web Design','✦ UI/UX Design',
  '✦ Frontend Dev','✦ Website Dev','✦ Mobile App',
  '✦ Software Dev',
]

export function HeroMarquee() {
  const items = [...HERO_ITEMS, ...HERO_ITEMS]
  return (
    <div className="relative w-full h-28 mt-24 mb-10" aria-hidden="true">
      <div className="absolute left-0 right-0 h-14 top-1/2 -translate-y-1/2 overflow-visible pointer-events-none z-0">
        <div className="band-tilt" style={{ background: '#0c4a5a' }} />
      </div>
      <div className="marquee-wrap absolute left-0 right-0 h-14 top-1/2 -translate-y-1/2 overflow-hidden z-10 shadow-md" style={{ background: '#1a7a8a' }}>
        <div className="marquee-track to-left flex items-center h-full gap-0">
          {items.map((item, i) => (
            <span
              key={i}
              className="font-display text-base font-bold uppercase px-10 whitespace-nowrap"
              style={{ letterSpacing: '0.18em', color: 'rgba(255,255,255,0.82)' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ServiceMarquee() {
  const items = [...SVC_ITEMS, ...SVC_ITEMS]
  return (
    <div className="w-full overflow-hidden py-3.5" style={{ background: 'linear-gradient(90deg,#0c4a5a,#1a7a8a,#0c4a5a)' }} aria-hidden="true">
      <div className="marquee-wrap w-full overflow-hidden">
        <div className="marquee-track to-right flex items-center gap-4 py-0.5">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex-none inline-flex items-center border border-white/20 text-white text-sm font-medium px-5 py-1.5 rounded-full whitespace-nowrap hover:bg-white hover:text-primary transition-all duration-300 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}