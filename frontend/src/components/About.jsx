import { motion } from 'framer-motion';
import Aimarquee from './Aimarquee';

const stats = [
  { value: '7.98', label: 'CGPA' },
  { value: '4+',   label: 'Internships' },
  { value: '10+',  label: 'Certifications' },
  { value: '2026', label: 'Graduating' },
];

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: .7, delay, ease: [.4, 0, .2, 1] },
});

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: .6, ease: [.4,0,.2,1] } },
};

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* ── Avatar side ── */}
          <motion.div
            {...fadeUp(0)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}
          >
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Floating spinning rings */}
              {[320, 370].map((s, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute', width: s, height: s, borderRadius: 28,
                    border: `1px solid rgba(${i === 0 ? '34,211,238' : '129,140,248'},.1)`,
                  }}
                  animate={{ rotate: i === 0 ? 360 : -360 }}
                  transition={{ duration: i === 0 ? 12 : 18, repeat: Infinity, ease: 'linear' }}
                />
              ))}

              {/* Avatar box — floating animation */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 280, height: 280, borderRadius: 28,
                  background: 'linear-gradient(135deg, #0d1f3a, #0a1a30)',
                  border: '1px solid rgba(34,211,238,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                  boxShadow: '0 0 60px rgba(34,211,238,0.08), 0 24px 64px rgba(0,0,0,0.4)',
                }}
              >
                {/* Inner glow */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(34,211,238,0.06), rgba(129,140,248,0.04), transparent)',
                }} />
                {/* Corner accent lines */}
                {[
                  { top: 0, left: 0, borderTop: '2px solid rgba(34,211,238,0.5)', borderLeft: '2px solid rgba(34,211,238,0.5)', borderTopLeftRadius: 28 },
                  { bottom: 0, right: 0, borderBottom: '2px solid rgba(129,140,248,0.3)', borderRight: '2px solid rgba(129,140,248,0.3)', borderBottomRightRadius: 28 },
                ].map((s, i) => (
                  <div key={i} style={{ position: 'absolute', width: 44, height: 44, ...s }} />
                ))}
                <span className="grad-text-aurora" style={{
                  fontFamily: 'Syne,sans-serif', fontSize: 112,
                  fontWeight: 800, position: 'relative', zIndex: 1, lineHeight: 1,
                }}>S</span>
              </motion.div>
            </div>

            {/* Stat chips */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}
            >
              {stats.map(s => (
                <motion.div
                  key={s.label}
                  variants={item}
                  whileHover={{ scale: 1.06, y: -3 }}
                  style={{
                    padding: '12px 20px', borderRadius: 12, textAlign: 'center',
                    background: 'rgba(34,211,238,0.05)',
                    border: '1px solid rgba(34,211,238,0.15)',
                    backdropFilter: 'blur(12px)',
                    transition: 'box-shadow .25s',
                  }}
                  whileHover-boxshadow="0 8px 32px rgba(34,211,238,0.15)"
                >
                  <div className="grad-text-aurora" style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Syne,sans-serif' }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Text side ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div variants={item} className="section-label">About Me</motion.div>
            <motion.h2
              variants={item}
              className="grad-text"
              style={{
                fontFamily: 'Syne,sans-serif', fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 8,
              }}
            >
              Crafting Digital<br />Experiences
            </motion.h2>
            <motion.div variants={item} className="divider" />

            {[
              "I'm a final-year Computer Science & Business Systems student at Ramco Institute of Technology, bridging great design with functional code.",
              "Passionate about UI/UX design with Figma and currently exploring React.js. I've interned across web development, data analytics, UI design, and real industrial environments — giving me a 360° view of product building.",
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

      <style>{`@media(max-width:768px){ .about-grid{ grid-template-columns:1fr !important; } }`}</style>
      <Aimarquee />
    </section>
  );
}
