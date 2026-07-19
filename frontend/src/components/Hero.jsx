import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROLES = [
  'Java Full Stack Developer',
  'Frontend Developer',
  'UI Developer',
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
      <span className="grad-text-aurora" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
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
            fontFamily: 'Space Grotesk, sans-serif',
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
          Java Full Stack Developer building responsive, scalable web applications with
          Java, Spring Boot, React.js, and MySQL — turning ideas into clean, production-ready software.
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

        {/* ── Floating particles: dots + glyphs + rings ── */}
        {[
          // [color, top, left, type:'dot'|'glyph'|'ring', size, dur, delay, yRange]
          // DOTS
          ['#22d3ee',  '4%',  '5%',  'dot',   3,   3.1, 0.0, 14],
          ['#818cf8',  '8%',  '18%', 'dot',   4,   4.2, 0.4, 18],
          ['#f472b6',  '6%',  '78%', 'dot',   2.5, 3.7, 0.7, 12],
          ['#34d399',  '3%',  '90%', 'dot',   3,   5.0, 0.2, 20],
          ['#fbbf24', '15%',  '3%',  'dot',   4.5, 3.9, 1.0, 16],
          ['#818cf8', '18%', '95%',  'dot',   3,   5.1, 0.5, 14],
          ['#f472b6', '22%',  '8%',  'dot',   2,   3.5, 0.8, 10],
          ['#22d3ee', '25%', '88%',  'dot',   5,   4.3, 0.3, 22],
          ['#34d399', '30%',  '2%',  'dot',   3.5, 4.7, 1.1, 18],
          ['#fbbf24', '33%', '92%',  'dot',   2.5, 3.8, 0.6, 14],
          ['#38bdf8', '38%', '97%',  'dot',   4,   5.3, 0.9, 20],
          ['#a78bfa', '42%',  '1%',  'dot',   3,   4.0, 0.3, 16],
          ['#fb923c', '47%', '85%',  'dot',   2,   4.5, 1.3, 12],
          ['#22d3ee', '52%', '12%',  'dot',   4.5, 3.4, 0.7, 18],
          ['#f472b6', '57%',  '4%',  'dot',   3,   4.8, 0.2, 14],
          ['#34d399', '62%', '93%',  'dot',   2.5, 3.6, 0.9, 16],
          ['#818cf8', '67%',  '6%',  'dot',   5,   5.2, 0.4, 22],
          ['#fbbf24', '72%', '80%',  'dot',   3,   4.1, 1.2, 14],
          ['#22d3ee', '77%',  '9%',  'dot',   4,   3.9, 0.6, 18],
          ['#a78bfa', '82%', '87%',  'dot',   2.5, 4.6, 0.1, 12],
          ['#38bdf8', '87%',  '3%',  'dot',   3.5, 3.3, 0.8, 16],
          ['#fb923c', '92%', '94%',  'dot',   4,   5.0, 0.3, 20],
          ['#f472b6', '12%', '45%',  'dot',   2,   4.4, 0.7, 10],
          ['#34d399', '48%', '55%',  'dot',   3,   3.7, 1.0, 14],
          ['#22d3ee', '68%', '38%',  'dot',   2.5, 5.1, 0.5, 12],
          ['#818cf8', '85%', '62%',  'dot',   4,   4.3, 0.2, 18],
          ['#fbbf24', '10%', '60%',  'dot',   3,   3.5, 0.9, 14],
          ['#fb923c', '28%', '32%',  'dot',   2,   4.9, 0.4, 10],
          // GLYPHS
          ['#22d3ee',  '5%', '28%',  'glyph', 12,  4.2, 0.0, 14],
          ['#818cf8', '20%', '70%',  'glyph', 10,  3.8, 0.6, 12],
          ['#f472b6', '40%', '15%',  'glyph', 14,  5.0, 0.9, 16],
          ['#34d399', '60%', '82%',  'glyph', 11,  4.5, 0.3, 14],
          ['#fbbf24', '78%', '22%',  'glyph', 13,  3.6, 1.1, 12],
          ['#a78bfa', '14%', '52%',  'glyph', 10,  4.8, 0.7, 18],
          ['#fb923c', '55%', '40%',  'glyph', 12,  4.0, 0.4, 14],
          ['#38bdf8', '90%', '58%',  'glyph', 14,  3.9, 0.8, 16],
          ['#22d3ee', '32%', '48%',  'glyph', 11,  5.3, 0.2, 12],
          // RINGS
          ['#22d3ee', '10%', '35%',  'ring',  18,  6.0, 0.2, 20],
          ['#818cf8', '35%', '72%',  'ring',  22,  7.2, 0.8, 24],
          ['#f472b6', '58%', '18%',  'ring',  16,  5.5, 0.4, 18],
          ['#34d399', '75%', '60%',  'ring',  20,  6.8, 1.0, 22],
          ['#fbbf24', '20%', '88%',  'ring',  14,  5.8, 0.6, 16],
          ['#a78bfa', '45%',  '8%',  'ring',  24,  7.5, 0.3, 26],
          ['#38bdf8', '88%', '30%',  'ring',  18,  6.2, 0.9, 20],
          ['#fb923c', '50%', '50%',  'ring',  26,  8.0, 0.5, 28],
        ].map(([color, top, left, type, size, dur, delay, yRange], i) => {
          if (type === 'glyph') return (
            <motion.div
              key={i}
              style={{
                position: 'absolute', fontSize: size, color, opacity: 0.45,
                top, left, pointerEvents: 'none', fontFamily: 'monospace',
                textShadow: `0 0 14px ${color}90`,
              }}
              animate={{ y: [0, -yRange, 0], opacity: [0.25, 0.65, 0.25], rotate: [0, 20, 0] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
            >
              {GLYPHS[i % GLYPHS.length]}
            </motion.div>
          );
          if (type === 'ring') return (
            <motion.div
              key={i}
              style={{
                position: 'absolute', top, left,
                width: size, height: size, borderRadius: '50%',
                border: `1.5px solid ${color}55`,
                boxShadow: `0 0 10px ${color}25, inset 0 0 6px ${color}15`,
                pointerEvents: 'none',
              }}
              animate={{ y: [0, -yRange, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.25, 1] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
            />
          );
          return (
            <motion.div
              key={i}
              style={{
                position: 'absolute', top, left,
                width: size, height: size, borderRadius: '50%',
                background: color, boxShadow: `0 0 ${size * 3}px ${color}`,
                opacity: 0.7, pointerEvents: 'none',
              }}
              animate={{ y: [0, -yRange, 0], opacity: [0.35, 1, 0.35], scale: [1, 1.6, 1] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
            />
          );
        })}

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
