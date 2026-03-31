import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROLES = [
  'Full Stack Developer',
  'UI/UX Designer',
  'React Enthusiast',
  'Problem Solver',
];

function TypingText({ texts }) {
  const [index, setIndex]       = useState(0);
  const [shown, setShown]       = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout;
    if (!deleting && shown.length < current.length) {
      timeout = setTimeout(() => setShown(current.slice(0, shown.length + 1)), 58);
    } else if (!deleting && shown.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && shown.length > 0) {
      timeout = setTimeout(() => setShown(shown.slice(0, -1)), 30);
    } else if (deleting && shown.length === 0) {
      setDeleting(false);
      setIndex(i => (i + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [shown, deleting, index, texts]);

  return (
    <span>
      <span className="grad-text-aurora" style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700 }}>
        {shown}
      </span>
      <span style={{
        display: 'inline-block', width: 2.5, height: '1em',
        background: 'var(--cyan)', marginLeft: 3, verticalAlign: 'middle',
        borderRadius: 2,
        animation: 'blink .85s step-end infinite',
      }} />
    </span>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const letter = {
  hidden:  { opacity: 0, y: 50, rotateX: -50 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [.4,0,.2,1] } },
};

function SplitWord({ word }) {
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 1.05 }}>
      <motion.span variants={letter} style={{ display: 'inline-block' }}>
        {word}&nbsp;
      </motion.span>
    </span>
  );
}

/* Floating glyph decorations */
const GLYPHS = ['✦', '◈', '⬡', '∂', '⟡', '◊', '⌥', '∞'];

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const handleRipple = (e) => {
    const btn  = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const r    = document.createElement('span');
    r.className = 'ripple-el';
    r.style.left = `${e.clientX - rect.left - 4}px`;
    r.style.top  = `${e.clientY - rect.top  - 4}px`;
    btn.appendChild(r);
    setTimeout(() => r.remove(), 520);
  };

  const words = ['Shaly', 'S'];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: '100px 40px 60px',
        textAlign: 'center', position: 'relative', zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Layered ambient glows */}
      <div style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '40%', left: '10%',
        width: 420, height: 420, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 65%)',
        pointerEvents: 'none', animation: 'drift 10s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: '8%',
        width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,114,182,0.05) 0%, transparent 65%)',
        pointerEvents: 'none', animation: 'drift 7.5s ease-in-out infinite 1.5s',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '20%',
        width: 280, height: 280, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(52,211,153,0.04) 0%, transparent 65%)',
        pointerEvents: 'none', animation: 'drift 9s ease-in-out infinite 3s',
      }} />

      <div style={{ maxWidth: 880, position: 'relative' }}>

        {/* ── Availability badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [.4,0,.2,1] }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 22px', borderRadius: 100,
            border: '1px solid rgba(34,211,238,0.2)',
            background: 'rgba(34,211,238,0.05)',
            fontSize: 12, marginBottom: 36,
            backdropFilter: 'blur(12px)',
            letterSpacing: '0.04em',
          }}
        >
          <span style={{ position: 'relative', width: 7, height: 7, borderRadius: '50%', display: 'inline-block', flexShrink: 0 }}>
            <span className="ping-ring" />
            <span style={{ position: 'relative', zIndex: 1, display: 'block', width: 7, height: 7, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)' }} />
          </span>
          <span className="shimmer-text" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            Available for opportunities
          </span>
        </motion.div>

        {/* ── Main name heading ── */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'Syne,sans-serif',
            fontSize: 'clamp(58px,9.5vw,116px)',
            fontWeight: 800, lineHeight: 1.0, letterSpacing: '-4px',
            marginBottom: 24, perspective: 900,
          }}
          className="grad-text"
        >
          {words.map((w, i) => <SplitWord key={i} word={w} />)}
        </motion.h1>

        {/* ── Role typing ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ fontSize: 22, color: 'var(--text-soft)', marginBottom: 20, fontWeight: 300, minHeight: 38 }}
        >
          <TypingText texts={ROLES} />
        </motion.p>

        {/* ── Bio ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78 }}
          style={{ fontSize: 15.5, color: 'var(--text-muted)', lineHeight: 1.9, maxWidth: 520, margin: '0 auto 52px' }}
        >
          Innovative engineering student passionate about building clean, scalable, and
          user-focused digital products. Turning ideas into beautiful, functional interfaces.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.94 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            className="btn-primary"
            onClick={(e) => { handleRipple(e); scrollTo('projects'); }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>View My Work ↓</span>
          </motion.button>
          <motion.button
            className="btn-outline"
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Connect
          </motion.button>
        </motion.div>

        {/* ── Floating glyph particles ── */}
        {[
          ['#22d3ee',  '9%',  '3%',   true,  false, 3.1, 0.0 ],
          ['#818cf8', '17%', '11%',  false, false, 4.2, 0.4 ],
          ['#f472b6', '11%', '89%',  false,  true, 3.7, 0.7 ],
          ['#34d399', '23%', '93%',  false,  true, 5.0, 0.2 ],
          ['#fbbf24', '36%',  '5%',  false, false, 3.9, 1.0 ],
          ['#818cf8', '46%', '95%',  false,  true, 5.1, 0.5 ],
          ['#f472b6', '57%',  '2%',  false, false, 3.5, 0.8 ],
          ['#22d3ee', '66%', '91%',  false,  true, 4.3, 0.3 ],
          ['#34d399', '73%',  '7%',  false, false, 4.7, 1.1 ],
          ['#fbbf24', '79%', '86%',  false,  true, 3.8, 0.6 ],
          ['#38bdf8', '31%', '96%',  false,  true, 5.3, 0.9 ],
          ['#a78bfa', '49%',  '1%',  false, false, 4.0, 0.3 ],
          ['#fb923c', '14%', '76%',   true,  true, 4.5, 1.3 ],
          ['#22d3ee', '83%', '31%',  false, false, 3.4, 0.7 ],
          
        ].map(([color, top, pos, isGlyph, isRight, dur, delay], i) => (
          isGlyph ? (
            <motion.div
              key={i}
              style={{
                position: 'absolute', fontSize: 12, color,
                opacity: 0.4, top, [isRight ? 'right' : 'left']: pos,
                pointerEvents: 'none', fontFamily: 'monospace',
                textShadow: `0 0 12px ${color}`,
              }}
              animate={{ y: [0, -16, 0], opacity: [0.3, 0.7, 0.3], rotate: [0, 15, 0] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
            >
              {GLYPHS[i % GLYPHS.length]}
            </motion.div>
          ) : (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: 3.5, height: 3.5, borderRadius: '50%',
                background: color,
                boxShadow: `0 0 10px ${color}`,
                opacity: 0.65, top,
                [isRight ? 'right' : 'left']: pos,
                pointerEvents: 'none',
              }}
              animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
            />
          )
        ))}

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          style={{ position: 'absolute', bottom: -70, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
        >
          <span style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', opacity: 0.5 }}>scroll</span>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="18" height="18" fill="none" stroke="rgba(34,211,238,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 3v10M3 8l6 6 6-6"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes drift { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-26px) scale(1.04)} }
      `}</style>
    </section>
  );
}
