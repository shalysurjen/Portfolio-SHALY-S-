import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'TechnoHacks',
    type: 'Remote',
    duration: '1 Month · 2023',
    desc: 'Designed a personal portfolio website, web-based calculator, and responsive login page. Applied responsive design principles, wrote clean maintainable HTML/CSS/JS code, and integrated interactive UI elements.',
    tags: ['HTML','CSS','JavaScript','Responsive Design','DOM'],
    color: '#38bdf8',
    link: '',
  },
  {
    role: 'UI/UX Design Intern',
    company: 'TechnoHacks',
    type: 'Remote',
    duration: '1 Month · 2023',
    desc: 'Worked on real-world web and mobile projects — wireframing, prototyping, and high-fidelity design in Figma. Designed a full Instagram clone wireframe (Home, Profile, Search, Post pages) and a polished Login UI.',
    tags: ['Figma','Wireframing','Prototyping','User Flow','High-Fidelity UI'],
    color: '#818cf8',
  },
  {
    role: 'UI Developer Intern',
    company: 'The India Cements Limited',
    type: 'On-site',
    duration: '1 Month · 2024',
    desc: 'Designed a proof-of-concept e-commerce platform interface. Gained exposure to cement manufacturing, factory operations, and product export processes — bridging academic learning with large-scale industrial workflows.',
    tags: ['Frontend Dev','UI Design','Industry Exposure','E-commerce UI'],
    color: '#22d3ee',
  },
  {
    role: 'Data Analytics Intern',
    company: 'Inspire Softech Solutions',
    type: 'Remote',
    duration: '1 Month · 2024',
    desc: 'Analyzed sales data using Excel and Power BI. Performed data preparation, cleaning, and visualization. Built an interactive sales analysis dashboard enabling dynamic reporting and actionable business insights.',
    tags: ['Excel','Power BI','Data Visualization','Dashboards','Sales Analysis'],
    color: '#f472b6',
  },
];

function TimelineItem({ exp, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: .65, delay, ease: [.4,0,.2,1] }}
      style={{ position: 'relative', marginBottom: 36, paddingLeft: 28 }}
    >
      {/* Glowing dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .4, delay: delay + .1, type: 'spring', stiffness: 300 }}
        style={{
          position: 'absolute', left: -5, top: 12,
          width: 11, height: 11, borderRadius: '50%',
          background: exp.color, border: '2px solid var(--bg)',
          boxShadow: `0 0 18px ${exp.color}90`,
        }}
      />

      {/* Card */}
      <motion.div
        whileHover={{ y: -4, boxShadow: `0 20px 60px ${exp.color}12, 0 0 0 1px ${exp.color}18` }}
        className="glass-card"
        style={{ padding: 26, transition: 'all .3s ease' }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
          <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>
            {exp.role}
          </h3>
          <span style={{
            padding: '3px 12px', borderRadius: 100, fontSize: 11,
            background: `${exp.color}15`, border: `1px solid ${exp.color}35`, color: exp.color,
            whiteSpace: 'nowrap',
          }}>{exp.type}</span>
        </div>
        <div style={{ color: exp.color, fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{exp.company}</div>
        <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ display: 'inline-block', width: 16, height: 1, background: 'var(--muted)', opacity: .5 }} />
          {exp.duration}
        </div>
        <p style={{ color: 'rgba(148,163,184,0.8)', fontSize: 13.5, lineHeight: 1.78, marginBottom: 18 }}>{exp.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {exp.tags.map(t => (
            <span key={t} style={{
              padding: '3px 10px', borderRadius: 5, fontSize: 11,
              background: `${exp.color}10`, border: `1px solid ${exp.color}28`, color: exp.color,
            }}>{t}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: .7 }}
        >
          <div className="section-label">Journey</div>
          <h2 className="grad-text" style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 8 }}>
            Experience
          </h2>
          <div className="divider" />
          <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7, marginBottom: 56 }}>
            Real-world exposure across web development, UI/UX, data analytics, and industrial environments.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 48px' }} className="timeline-grid">
          <div style={{ position: 'relative', paddingLeft: 28 }}>
            <div className="timeline-line" />
            {experiences.slice(0,2).map((e, i) => <TimelineItem key={e.role+e.company} exp={e} delay={i * 0.12} />)}
          </div>
          <div style={{ position: 'relative', paddingLeft: 28 }}>
            <div className="timeline-line" />
            {experiences.slice(2).map((e, i) => <TimelineItem key={e.role+e.company} exp={e} delay={i * 0.12 + 0.06} />)}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .timeline-grid{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
