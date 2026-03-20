import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <style>{`
        .nb-link {
          position: relative;
          color: var(--muted);
          text-decoration: none;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .nb-link::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0; right: 0;
          height: 1px;
          background: var(--cyan);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.22s ease;
        }
        .nb-link:hover { color: var(--text); }
        .nb-link:hover::after { transform: scaleX(1); }

        .nb-hbar {
          display: block;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }

        .nb-mobile-btn {
          background: none;
          border: none;
          border-bottom: 1px solid rgba(30,120,138,0.10);
          color: var(--muted);
          font-size: 16px;
          font-family: var(--font-display);
          font-weight: 600;
          letter-spacing: -0.01em;
          text-align: left;
          cursor: pointer;
          padding: 13px 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: color 0.2s, padding-left 0.2s;
        }
        .nb-mobile-btn:last-of-type { border-bottom: none; }
        .nb-mobile-btn:hover { color: var(--text); padding-left: 6px; }
        .nb-mobile-btn .arr {
          font-size: 12px;
          color: var(--cyan);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .nb-mobile-btn:hover .arr { opacity: 1; transform: translateX(0); }

        @media (min-width: 768px) {
          .nb-desktop   { display: flex !important; }
          .nb-cta       { display: inline-block !important; }
          .nb-hamburger { display: none !important; }
        }
        @media (max-width: 767px) {
          .nb-desktop { display: none !important; }
          .nb-cta     { display: none !important; }
        }
      `}</style>

      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 500,
          height: 62,
          padding: '0 clamp(16px, 4vw, 40px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(244,248,249,0.97)' : 'rgba(244,248,249,0.82)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(30,120,138,0.11)',
          boxShadow: scrolled ? '0 1px 24px rgba(30,120,138,0.10)' : 'none',
          transition: 'background 0.3s, box-shadow 0.3s',
          boxSizing: 'border-box',
        }}
      >
        {/* Logo */}
        <span
          className="grad-text"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: '-0.5px',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          SS
        </span>

        {/* Desktop links */}
        <ul
          className="nb-desktop"
          style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}
        >
          {links.map(l => (
            <li key={l}>
              <button className="nb-link" onClick={() => scrollTo(l)}>{l}</button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="mailto:shalysurjen@gmail.com"
          className="nb-cta"
          style={{
            padding: '7px 20px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            fontFamily: 'var(--font-body)',
            color: 'var(--blue)',
            textDecoration: 'none',
            background: 'rgba(2,132,199,0.07)',
            border: '1px solid rgba(2,132,199,0.22)',
            transition: 'all 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(2,132,199,0.13)';
            e.currentTarget.style.borderColor = 'rgba(2,132,199,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(2,132,199,0.07)';
            e.currentTarget.style.borderColor = 'rgba(2,132,199,0.22)';
          }}
        >
          Hire Me ↗
        </a>

        {/* Hamburger */}
        <button
          className="nb-hamburger"
          onClick={() => setOpen(p => !p)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '10px', margin: '-10px',
            display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center',
          }}
        >
          <span className="nb-hbar" style={{
            width: 22,
            transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
          }} />
          <span className="nb-hbar" style={{
            width: open ? 22 : 14,
            opacity: open ? 0 : 1,
            transform: open ? 'scaleX(0)' : 'none',
          }} />
          <span className="nb-hbar" style={{
            width: 22,
            transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
          }} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="nb-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 498,
                background: 'rgba(13,31,36,0.18)',
              }}
            />

            <motion.div
              key="nb-drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                top: 62, left: 0, right: 0,
                zIndex: 499,
                background: 'rgba(244,248,249,0.98)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderBottom: '1px solid rgba(30,120,138,0.13)',
                boxShadow: '0 8px 32px rgba(30,120,138,0.10)',
                padding: '6px clamp(16px, 5vw, 32px) 20px',
              }}
            >
              {links.map((l, i) => (
                <motion.button
                  key={l}
                  className="nb-mobile-btn"
                  onClick={() => scrollTo(l)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  {l}
                  <span className="arr">→</span>
                </motion.button>
              ))}

              <motion.a
                href="mailto:shalysurjen@gmail.com"
                className="btn-primary"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05 + 0.05, duration: 0.2 }}
                style={{ display: 'block', marginTop: 16, textAlign: 'center', fontSize: 14 }}
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