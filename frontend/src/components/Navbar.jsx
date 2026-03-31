import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

/* ── Clean SS text logo ── */
function SSLogo({ isDark }) {
  const grad = isDark
    ? 'linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)'
    : 'linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)';
  return (
    <span style={{
      fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800,
      letterSpacing: '-1.5px', lineHeight: 1,
      // background: grad,
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      backgroundClip: 'text', display: 'block',
      userSelect: 'none',
     }}></span>
  );
}

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const { isDark, toggle }      = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    sectionIds.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const navBg = isDark
    ? (scrolled ? 'rgba(7,7,11,0.96)' : 'rgba(7,7,11,0.55)')
    : (scrolled ? 'rgba(248,249,251,0.97)' : 'rgba(248,249,251,0.65)');

  const linkColor   = isDark ? '#6b7280' : '#64748b';
  const linkHover   = isDark ? '#cbd5e1' : '#0f172a';
  const activeColor = isDark ? '#22d3ee' : '#0891b2';

  return (
    <>
      <style>{`
        .nb-link {
          position: relative; color: ${linkColor}; text-decoration: none;
          font-family: var(--font-body); font-size: 12.5px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          background: none; border: none; cursor: pointer; padding: 6px 2px;
          transition: color 0.2s ease;
        }
        .nb-link:hover { color: ${linkHover}; }
        .nb-link.active-link { color: ${activeColor}; }

        .nb-mobile-btn {
          background: none; border: none;
          border-bottom: 1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'};
          color: ${linkColor}; font-size: 12.5px;
          font-family: var(--font-body); font-weight: 700;
          letter-spacing: 0.09em; text-transform: uppercase;
          text-align: left; cursor: pointer; padding: 16px 0; width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          transition: color 0.2s, padding-left 0.25s;
        }
        .nb-mobile-btn:last-of-type { border-bottom: none; }
        .nb-mobile-btn:hover { color: ${activeColor}; padding-left: 10px; }
        .nb-mobile-btn .arr { font-size: 11px; color: ${activeColor}; opacity: 0; transform: translateX(-6px); transition: opacity 0.2s, transform 0.25s; }
        .nb-mobile-btn:hover .arr { opacity: 1; transform: translateX(0); }

        .theme-toggle {
          width: 34px; height: 34px; border-radius: 9px; cursor: pointer;
          border: 1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.09)'};
          background: ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'};
          color: ${isDark ? '#94a3b8' : '#64748b'};
          display: flex; align-items: center; justify-content: center;
          transition: all 0.22s ease; flex-shrink: 0;
        }
        .theme-toggle:hover {
          background: ${isDark ? 'rgba(34,211,238,0.1)' : 'rgba(8,145,178,0.08)'};
          color: ${isDark ? '#22d3ee' : '#0891b2'};
          border-color: ${isDark ? 'rgba(34,211,238,0.35)' : 'rgba(8,145,178,0.3)'};
          transform: rotate(12deg);
        }

        .hire-btn {
          padding: 7px 18px; border-radius: 9px; font-size: 11.5px; font-weight: 700;
          font-family: var(--font-body); color: ${isDark ? '#94a3b8' : '#475569'};
          text-decoration: none; letter-spacing: 0.07em; text-transform: uppercase;
          display: inline-flex; align-items: center; gap: 7px;
          background: ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'};
          border: 1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.09)'};
          transition: all 0.25s ease; white-space: nowrap;
        }
        .hire-btn:hover {
          background: ${isDark ? 'rgba(34,211,238,0.08)' : 'rgba(8,145,178,0.07)'};
          border-color: ${isDark ? 'rgba(34,211,238,0.3)' : 'rgba(8,145,178,0.25)'};
          color: ${activeColor};
          transform: translateY(-1px);
          box-shadow: 0 4px 20px ${isDark ? 'rgba(34,211,238,0.1)' : 'rgba(8,145,178,0.1)'};
        }

        .nb-hbar {
          display: block; height: 1.5px; border-radius: 2px;
          transition: transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.3s, width 0.3s, background 0.3s;
          transform-origin: center;
        }

        @media (min-width: 768px) {
          .nb-desktop    { display: flex !important; }
          .nb-cta-wrap   { display: inline-flex !important; }
          .nb-hamburger  { display: none !important; }
        }
        @media (max-width: 767px) {
          .nb-desktop    { display: none !important; }
          .nb-cta-wrap   { display: none !important; }
        }
      `}</style>

      {/* ── Sticky Nav ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [.4,0,.2,1], delay: 0.1 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          height: 64, padding: '0 clamp(16px,4vw,44px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: navBg,
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          boxSizing: 'border-box',
          transition: 'background 0.4s ease',
        }}
      >
        {/* Logo Monogram */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0, display: 'flex', alignItems: 'center' }}
        >
          <SSLogo isDark={isDark} />
        </motion.button>

        {/* Desktop Links */}
        <ul className="nb-desktop" style={{ display: 'flex', gap: 30, listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
          {links.map((l, i) => (
            <motion.li key={l} style={{ position: 'relative' }}
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
            >
              <button className={`nb-link${active === l.toLowerCase() ? ' active-link' : ''}`} onClick={() => scrollTo(l)}>
                {l}
              </button>
              {active === l.toLowerCase() && (
                <motion.div layoutId="nav-underline"
                  style={{
                    position: 'absolute', bottom: -1, left: 0, right: 0,
                    height: 1.5, borderRadius: 2,
                    background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)`,
                    boxShadow: `0 0 10px ${activeColor}`,
                  }}
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          {/* Theme toggle */}
          <motion.button
            className="theme-toggle"
            onClick={toggle}
            whileTap={{ scale: 0.9 }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={isDark ? 'moon' : 'sun'}
                initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.22 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Hire Me CTA */}
          <motion.div className="nb-cta-wrap"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 }}
          >
            <a href="mailto:shalysurjen@gmail.com" className="hire-btn">
              <motion.span
                animate={{ opacity: [1, .35, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                style={{ width: 5, height: 5, borderRadius: '50%', background: activeColor, display: 'inline-block', boxShadow: `0 0 7px ${activeColor}`, flexShrink: 0 }}
              />
              Hire Me
            </a>
          </motion.div>

          {/* Hamburger */}
          <motion.button className="nb-hamburger" onClick={() => setOpen(p => !p)}
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
            whileTap={{ scale: 0.9 }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px', margin: '-10px', display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' }}
          >
            {[
              { width: 22, transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' },
              { width: open ? 22 : 14, opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' },
              { width: 22, transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' },
            ].map((s, i) => (
              <span key={i} className="nb-hbar" style={{
                ...s,
                background: open && i !== 1 ? activeColor : (isDark ? '#6b7280' : '#94a3b8'),
              }} />
            ))}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div key="nb-backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              style={{ position: 'fixed', inset: 0, zIndex: 498, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div key="nb-drawer"
              initial={{ opacity: 0, y: -12, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -12, scaleY: 0.95 }}
              transition={{ duration: 0.28, ease: [.4,0,.2,1] }}
              style={{
                position: 'fixed', top: 64, left: 0, right: 0, zIndex: 499,
                background: isDark ? 'rgba(7,7,11,0.98)' : 'rgba(248,249,251,0.98)',
                backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)',
                borderBottom: `1px solid ${isDark ? 'rgba(34,211,238,0.1)' : 'rgba(0,0,0,0.06)'}`,
                boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
                padding: '10px clamp(16px,5vw,36px) 28px',
                transformOrigin: 'top',
              }}
            >
              {links.map((l, i) => (
                <motion.button key={l} className="nb-mobile-btn" onClick={() => scrollTo(l)}
                  initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.24 }}
                >
                  <span style={{ letterSpacing: '0.07em', fontSize: 12.5 }}>{l}</span>
                  <span className="arr">→</span>
                </motion.button>
              ))}
              <motion.a href="mailto:shalysurjen@gmail.com" className="btn-primary"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.06 + 0.06, duration: 0.24 }}
                style={{ display: 'block', marginTop: 20, textAlign: 'center', fontSize: 13 }}
              >
                Hire Me ↗
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}