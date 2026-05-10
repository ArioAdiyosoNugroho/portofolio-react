import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const B = {
  teal:       '#1a7a8a',
  tealDark:   '#0f5c6b',
  tealDarker: '#0c4a5a',
  tealLight:  '#e0f2f5',
  dark:       '#111318',
  mid:        '#1e2228',
  accent:     '#fdb213',
  grey:       '#6b7280',
}

// ─── Mobile BubbleMenu overlay ────────────────────────────────────────────────
const MOBILE_ITEMS = [
  { label: 'Home',      href: '#home',      hoverStyles: { bgColor: B.teal,       textColor: '#fff' } },
  { label: 'Tentang',   href: '#about',     hoverStyles: { bgColor: B.tealDark,   textColor: '#fff' } },
  { label: 'Layanan',   href: '#services',  hoverStyles: { bgColor: B.tealDarker, textColor: '#fff' } },
  { label: 'Portfolio', href: '#portfolio', hoverStyles: { bgColor: B.teal,       textColor: '#fff' } },
  { label: 'Harga',     href: '#pricing',   hoverStyles: { bgColor: B.accent,     textColor: B.dark } },
  { label: 'Kontak',    href: '#contact',   hoverStyles: { bgColor: B.dark,       textColor: '#fff' } },
]

function MobileBubbleMenu({ isOpen, onClose }) {
  const overlayRef = useRef(null)
  const bubblesRef = useRef([])
  const labelRefs  = useRef([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => { if (isOpen) setMounted(true) }, [isOpen])

  useEffect(() => {
    const overlay = overlayRef.current
    const bubbles = bubblesRef.current.filter(Boolean)
    const labels  = labelRefs.current.filter(Boolean)
    if (!overlay || !bubbles.length) return

    if (isOpen) {
      gsap.set(overlay, { display: 'flex' })
      gsap.fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.28, ease: 'power2.out' })
      gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' })
      gsap.set(labels,  { y: 20, autoAlpha: 0 })
      bubbles.forEach((bubble, i) => {
        const tl = gsap.timeline({ delay: i * 0.08 })
        tl.to(bubble, { scale: 1, duration: 0.5, ease: 'back.out(1.7)' })
        if (labels[i]) tl.to(labels[i], { y: 0, autoAlpha: 1, duration: 0.32, ease: 'power3.out' }, '-=0.38')
      })
    } else if (mounted) {
      gsap.to(labels,  { y: 16, autoAlpha: 0, duration: 0.14, ease: 'power2.in' })
      gsap.to(bubbles, {
        scale: 0, duration: 0.18, ease: 'power2.in', stagger: 0.04,
        onComplete: () => {
          gsap.to(overlay, {
            autoAlpha: 0, duration: 0.18,
            onComplete: () => { gsap.set(overlay, { display: 'none' }); setMounted(false) }
          })
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  if (!mounted && !isOpen) return null

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 49,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `rgba(11,18,20,0.92)`,
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        padding: '100px 20px 48px',
      }}
    >
      <ul style={{
        listStyle: 'none', margin: 0, padding: 0,
        display: 'flex', flexWrap: 'wrap', gap: 10,
        width: '100%', maxWidth: 400, justifyContent: 'center',
      }}>
        {MOBILE_ITEMS.map((item, idx) => (
          <li key={idx} style={{ flex: '0 0 calc(50% - 5px)', display: 'flex' }}>
            <a
              href={item.href}
              ref={el => { if (el) bubblesRef.current[idx] = el }}
              onClick={e => {
                e.preventDefault(); onClose()
                setTimeout(() => { document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' }) }, 340)
              }}
              onPointerEnter={e => {
                Object.assign(e.currentTarget.style, {
                  background: item.hoverStyles.bgColor,
                  color: item.hoverStyles.textColor,
                  borderColor: item.hoverStyles.bgColor,
                  transform: 'scale(1.05)',
                  boxShadow: `0 8px 28px ${item.hoverStyles.bgColor}55`,
                })
              }}
              onPointerLeave={e => {
                Object.assign(e.currentTarget.style, {
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.85)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  transform: 'scale(1)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                })
              }}
              style={{
                width: '100%', minHeight: 90, borderRadius: 26,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.22s ease', cursor: 'pointer',
              }}
            >
              <span
                ref={el => { if (el) labelRefs.current[idx] = el }}
                style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: 18, fontWeight: 700,
                  letterSpacing: '-0.02em', display: 'inline-block',
                }}
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── HamburgerIcon ────────────────────────────────────────────────────────────
function HamburgerIcon({ isOpen }) {
  const l1 = useRef(null)
  const l2 = useRef(null)

  useEffect(() => {
    if (!l1.current || !l2.current) return
    if (isOpen) {
      gsap.to(l1.current, { rotation: 45,  y: 3.5,  duration: 0.28, ease: 'power2.inOut', transformOrigin: '50% 50%' })
      gsap.to(l2.current, { rotation: -45, y: -3.5, duration: 0.28, ease: 'power2.inOut', transformOrigin: '50% 50%' })
    } else {
      gsap.to(l1.current, { rotation: 0, y: 0, duration: 0.28, ease: 'power2.inOut' })
      gsap.to(l2.current, { rotation: 0, y: 0, duration: 0.28, ease: 'power2.inOut' })
    }
  }, [isOpen])

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" style={{ display: 'block', overflow: 'visible' }}>
      <rect ref={l1} x="2" y="7"  width="16" height="2" rx="1" fill={isOpen ? '#fff' : B.dark} />
      <rect ref={l2} x="2" y="12" width="16" height="2" rx="1" fill={isOpen ? '#fff' : B.dark} />
    </svg>
  )
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mousePos,    setMousePos]    = useState({ x: 0, y: 0 })
  const [isHovered,   setIsHovered]   = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [isMobile,    setIsMobile]    = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { setScrolled(window.scrollY > 50); ticking = false })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { if (!isMobile) setMobileOpen(false) }, [isMobile])

  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { href: '#home',      label: 'Home' },
    { href: '#about',     label: 'Tentang' },
    { href: '#services',  label: 'Layanan' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#pricing',   label: 'Harga' },
  ]

  const wrapperStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    display: 'flex', justifyContent: 'center',
    padding: scrolled ? '14px 20px' : '0',
    transition: 'padding 0.5s cubic-bezier(0.4,0,0.2,1)',
  }

  const barStyle = scrolled ? {
    // Floating glass pill
    width: '100%', maxWidth: 880, borderRadius: 9999,
    background: 'rgba(255,255,255,0.82)',
    backdropFilter: 'blur(28px) saturate(180%)',
    WebkitBackdropFilter: 'blur(28px) saturate(180%)',
    border: '1px solid rgba(26,122,138,0.15)',
    boxShadow: `0 8px 32px rgba(26,122,138,0.10), 0 1px 0 rgba(255,255,255,0.9) inset`,
    position: 'relative', overflow: 'hidden',
    transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
  } : {
    // Solid top bar
    width: '100%', maxWidth: '100%', borderRadius: 0,
    background: 'rgba(255,255,255,0.96)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(26,122,138,0.1)',
    boxShadow: '0 1px 0 rgba(0,0,0,0.03)',
    position: 'relative', overflow: 'hidden',
    transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
  }

  const innerStyle = {
    position: 'relative', zIndex: 2,
    maxWidth: 1200, margin: '0 auto',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', gap: 16,
    padding: scrolled ? '10px 22px' : '13px 24px',
    transition: 'padding 0.5s cubic-bezier(0.4,0,0.2,1)',
  }

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%,100% { transform: translateX(-30%); opacity: 0; }
          40%,60%  { opacity: 1; }
          100%     { transform: translateX(130%); }
        }
      `}</style>

      <MobileBubbleMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div style={wrapperStyle}>
        <header
          ref={navRef}
          role="banner"
          style={barStyle}
          onMouseMove={e => {
            if (!navRef.current) return
            const r = navRef.current.getBoundingClientRect()
            setMousePos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Teal shimmer (scrolled only) */}
          {scrolled && (
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: `linear-gradient(105deg, transparent 38%, rgba(26,122,138,0.06) 50%, rgba(253,178,19,0.05) 56%, transparent 66%)`,
              animation: 'shimmer 7s ease-in-out infinite',
            }} />
          )}

          {/* Top accent line */}
          {scrolled && (
            <div style={{
              position: 'absolute', top: 0, left: '8%', right: '8%',
              height: 1,
              background: `linear-gradient(90deg, transparent, ${B.teal}55, transparent)`,
            }} />
          )}

          {/* Mouse glow blob — teal */}
          {scrolled && isHovered && (
            <div style={{
              position: 'absolute', pointerEvents: 'none', borderRadius: '50%',
              background: `radial-gradient(circle, ${B.teal}18 0%, transparent 70%)`,
              width: 260, height: 260, transform: 'translate(-50%,-50%)',
              left: `${mousePos.x}%`, top: `${mousePos.y}%`,
            }} />
          )}

          <div style={innerStyle}>

            {/* ── Logo ── */}
            <a
              href="#home"
              onClick={e => handleAnchorClick(e, '#home')}
              aria-label="ArioAdi home"
              style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 12, flexShrink: 0,
                background: B.tealLight,
                border: `1px solid ${B.teal}33`,
                overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src="/assets/img/dev.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 18, fontWeight: 800,
                letterSpacing: '-0.03em',
                color: B.dark,
                lineHeight: 1, whiteSpace: 'nowrap',
              }}>
                Ario<span style={{ color: B.teal }}>Adi</span>
              </span>
            </a>

            {/* ── Desktop nav links ── */}
            {!isMobile && (
              <nav aria-label="Main navigation">
                <ul style={{
                  display: 'flex', alignItems: 'center', gap: 2,
                  listStyle: 'none', margin: 0, padding: 0,
                }}>
                  {navLinks.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={e => handleAnchorClick(e, href)}
                        style={{
                          display: 'block', padding: '6px 13px', borderRadius: 9999,
                          textDecoration: 'none', fontSize: 13.5, fontWeight: 500,
                          color: B.grey, letterSpacing: '-0.01em',
                          transition: 'color 0.2s, background 0.2s',
                          fontFamily: "'Inter',sans-serif",
                        }}
                        onMouseEnter={e => Object.assign(e.currentTarget.style, {
                          color: B.teal,
                          background: `${B.teal}12`,
                        })}
                        onMouseLeave={e => Object.assign(e.currentTarget.style, {
                          color: B.grey,
                          background: 'transparent',
                        })}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* ── Right side ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, marginLeft: 'auto' }}>

              {/* Desktop CTA */}
              {!isMobile && (
                <a
                  href="#contact"
                  onClick={e => handleAnchorClick(e, '#contact')}
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    padding: '9px 20px', borderRadius: 9999,
                    background: B.teal, color: '#fff',
                    fontSize: 13, fontWeight: 600,
                    letterSpacing: '-0.01em', textDecoration: 'none',
                    border: `1px solid ${B.tealDark}`,
                    boxShadow: `0 2px 12px ${B.teal}40`,
                    transition: 'all 0.25s ease',
                    fontFamily: "'Inter',sans-serif", whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => Object.assign(e.currentTarget.style, {
                    background: B.tealDark,
                    boxShadow: `0 4px 20px ${B.teal}55`,
                    transform: 'translateY(-1px)',
                  })}
                  onMouseLeave={e => Object.assign(e.currentTarget.style, {
                    background: B.teal,
                    boxShadow: `0 2px 12px ${B.teal}40`,
                    transform: 'translateY(0)',
                  })}
                >
                  Hubungi Kami
                </a>
              )}

              {/* Mobile hamburger */}
              {isMobile && (
                <button
                  onClick={() => setMobileOpen(v => !v)}
                  aria-label="Toggle navigation"
                  aria-pressed={mobileOpen}
                  style={{
                    width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
                    background: mobileOpen ? B.teal : B.tealLight,
                    border: `1.5px solid ${mobileOpen ? B.teal : B.teal + '44'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: mobileOpen ? `0 4px 16px ${B.teal}44` : '0 1px 4px rgba(0,0,0,0.08)',
                    transition: 'all 0.25s ease', padding: 0,
                  }}
                >
                  <HamburgerIcon isOpen={mobileOpen} />
                </button>
              )}

            </div>
          </div>
        </header>
      </div>
    </>
  )
}