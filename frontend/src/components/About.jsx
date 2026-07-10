import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Aimarquee from './Aimarquee';

/* ── Animated counter hook ── */
function useCounter(target, duration = 2) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    target.includes('+') ? Math.round(v) + '+' : target.includes('.') ? v.toFixed(2) : String(Math.round(v))
  );
  const [display, setDisplay] = useState(target.replace('+', '').replace('.', '') === target ? target : '0');

  useEffect(() => {
    const numVal = parseFloat(target.replace('+', ''));
    const controls = animate(count, numVal, { duration, ease: [0.4, 0, 0.2, 1] });
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [target]);

  return display;
}

/* ── Typing effect hook ── */
function useTypingEffect(lines, speed = 45) {
  const [displayed, setDisplayed] = useState([]);
  const idx = useRef({ line: 0, char: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const { line, char } = idx.current;
      if (line >= lines.length) { clearInterval(timer); return; }
      setDisplayed((prev) => {
        const copy = [...prev];
        copy[line] = (copy[line] || '') + lines[line][char];
        return copy;
      });
      idx.current.char++;
      if (idx.current.char >= lines[line].length) {
        idx.current.line++;
        idx.current.char = 0;
      }
    }, speed);
    return () => clearInterval(timer);
  }, []);

  return displayed;
}

/* ── Tech stack data ── */
const techStack = [
  { name: 'React', color: '#61DAFB', icon: '⚛' },
  { name: 'Java', color: '#ED8B00', icon: '☕' },
  { name: 'Spring', color: '#6DB33F', icon: '🍃' },
  { name: 'MySQL', color: '#4479A1', icon: '🗄' },
  { name: 'Figma', color: '#F24E1E', icon: '🎨' },
  { name: 'Git', color: '#F05032', icon: '⚡' },
];

const stats = [
  { value: '7.99', label: 'CGPA', icon: '🎓' },
  { value: '5', label: 'Internships', icon: '💼' },
  { value: '17+', label: 'Certifications', icon: '📜' },
  { value: '2026', label: 'Graduating', icon: '🚀' },
];

const codeLines = [
  'const developer = {',
  '  name: "Shaly Surjen",',
  '  role: "Full Stack Dev",',
  '  passion: "Building UIs",',
  '  coffee: Infinity,',
  '};',
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

/* ── Stat Chip with animated count ── */
function StatChip({ stat, index }) {
  const val = useCounter(stat.value, 2.2);
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.05, y: -4 }}
      style={{
        flex: '1 1 calc(50% - 6px)',
        padding: '16px 14px',
        borderRadius: 14,
        textAlign: 'center',
        background: 'var(--glass)',
        border: '1px solid var(--glass-b)',
        backdropFilter: 'blur(14px)',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Hover glow */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0,
        background: `radial-gradient(circle at center, rgba(8,145,178,0.08), transparent 70%)`,
        transition: 'opacity .3s',
        pointerEvents: 'none',
      }} className="stat-glow" />
      <div style={{ fontSize: 18, marginBottom: 4 }}>{stat.icon}</div>
      <div className="grad-text-aurora" style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>
        {val}
      </div>
      <div style={{ fontSize: 9, color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: 3 }}>
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const typedLines = useTypingEffect(codeLines, 50);

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '100px 40px' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>

          {/* ═══════ LEFT — Bento Grid ═══════ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-80px' }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
          >
            {/* ── Code Editor Card (spans 2 cols) ── */}
            <motion.div
              variants={item}
              style={{
                gridColumn: '1 / -1',
                borderRadius: 16,
                overflow: 'hidden',
                background: 'var(--surface)',
                border: '1px solid var(--glass-b)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {/* Title bar */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '10px 14px',
                borderBottom: '1px solid var(--glass-b)',
                background: 'var(--glass)',
              }}>
                {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.85 }} />
                ))}
                <span style={{ marginLeft: 10, fontSize: 11, color: 'var(--muted)', fontFamily: 'monospace' }}>about.js</span>
              </div>
              {/* Code body */}
              <div style={{ padding: '16px 18px', fontFamily: "'DM Mono', 'Fira Code', monospace", fontSize: 13, lineHeight: 1.75 }}>
                {codeLines.map((line, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12 }}>
                    <span style={{ color: 'var(--muted)', opacity: 0.4, userSelect: 'none', minWidth: 16, textAlign: 'right', fontSize: 11 }}>{i + 1}</span>
                    <span style={{ color: 'var(--text-soft)' }}>
                      {typedLines[i] || ''}
                      {i === (typedLines.length - 1) && typedLines[i]?.length < codeLines[i]?.length && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          style={{ display: 'inline-block', width: 8, height: 16, background: 'var(--cyan)', marginLeft: 1, verticalAlign: 'text-bottom', borderRadius: 1 }}
                        />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Tech Stack Card (full width) ── */}
            <motion.div
              variants={item}
              style={{
                gridColumn: '1 / -1',
                borderRadius: 16, padding: '20px 20px',
                background: 'var(--glass)',
                border: '1px solid var(--glass-b)',
                backdropFilter: 'blur(14px)',
              }}
            >
              <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>
                Tech Stack
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}>
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      gap: 6, padding: '12px 6px', borderRadius: 12,
                      cursor: 'default',
                      background: 'rgba(8,145,178,0.03)',
                      border: '1px solid var(--glass-b)',
                      transition: 'background .2s, border-color .2s',
                    }}
                  >
                    <span style={{ fontSize: 24 }}>{tech.icon}</span>
                    <span style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 500 }}>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Stats Row (spans 2 cols) ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-40px' }}
              style={{
                gridColumn: '1 / -1',
                display: 'flex', gap: 12, flexWrap: 'wrap',
              }}
            >
              {stats.map((s, i) => (
                <StatChip key={s.label} stat={s} index={i} />
              ))}
            </motion.div>
          </motion.div>

          {/* ═══════ RIGHT — Text Side ═══════ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-60px' }}
          >
            <motion.div variants={item} className="section-label">About Me</motion.div>
            <motion.h2
              variants={item}
              className="grad-text"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-1.5px',
                marginBottom: 8,
              }}
            >
              Crafting Digital<br />Experiences
            </motion.h2>
            <motion.div variants={item} className="divider" />

            {[
              "I'm a final-year Computer Science & Business Systems student at Ramco Institute of Technology, currently working as a Full Stack Development Intern at Wenxt Technologies — building with Java, Spring Boot, React.js, and MySQL.",
              "Skilled in frontend development with HTML, CSS, JavaScript, and React.js, with an emphasis on clean UI design and REST API integration. I've interned across full-stack development, UI/UX design, data analytics, and real industrial environments — giving me a 360° view of product building.",
              "When I'm not coding, I'm prototyping in Figma, exploring automation with UiPath, or building dashboards in Power BI. I believe in clean code, intuitive interfaces, and continuous learning.",
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={item}
                style={{ color: 'rgba(148,163,184,0.85)', fontSize: 15.5, lineHeight: 1.85, marginBottom: 16 }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              variants={item}
              style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}
            >
              <motion.a
                href="mailto:shalysurjen@gmail.com"
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: 14, padding: '10px 24px' }}
              >
                <span>Email Me</span>
              </motion.a>
              <motion.a
                href="https://github.com/shalysurjen"
                target="_blank" rel="noreferrer"
                className="btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: 14, padding: '10px 24px' }}
              >
                GitHub ↗
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .about-grid{ grid-template-columns:1fr !important; }
        }
        .stat-glow { transition: opacity .3s; }
        div:hover > .stat-glow { opacity: 1 !important; }
      `}</style>
      <Aimarquee />
    </section>
  );
}
