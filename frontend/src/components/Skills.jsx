import { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const skillGroups = [
  {
    icon: '🎨',
    cat: 'Design & Frontend',
    title: 'User Interface',
    color: 'blue',
    tags: ['HTML5','CSS3','JavaScript','React.js','Bootstrap','Responsive Design','Figma','Adobe XD'],
  },
  {
    icon: '⚙️',
    cat: 'Backend & Logic',
    title: 'Server & Data',
    color: 'violet',
    tags: ['Node.js','Express.js','Java (Basic)','Python','MySQL','REST API','JSON'],
  },
  {
    icon: '🤖',
    cat: 'Automation & Analytics',
    title: 'Tools & Platforms',
    color: 'cyan',
    tags: ['UiPath RPA','Power BI','Excel','Git','WordPress','Wix','Linux'],
  },
];

const bars = [
  { label:'HTML / CSS / JavaScript', pct:88 },
  { label:'Figma / UI/UX Design',    pct:82 },
  { label:'Python / Automation',     pct:75 },
  { label:'Power BI / Analytics',    pct:70 },
  { label:'React.js (Exploring)',    pct:55 },
  { label:'Node.js / Express',       pct:60 },
];

const tagStyle = {
  blue:   { background:'rgba(56,189,248,.1)',  border:'1px solid rgba(56,189,248,.22)',  color:'var(--blue)'   },
  violet: { background:'rgba(129,140,248,.1)', border:'1px solid rgba(129,140,248,.22)', color:'var(--violet)' },
  cyan:   { background:'rgba(34,211,238,.1)',  border:'1px solid rgba(34,211,238,.22)',  color:'var(--cyan)'   },
};

function SkillCard({ icon, cat, title, color, tags, delay }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="glass-card" style={{ padding:28, transitionDelay:`${delay}ms` }}>
      <div style={{ fontSize:30, marginBottom:12 }}>{icon}</div>
      <div style={{ fontSize:11, letterSpacing:'2px', textTransform:'uppercase', color:'var(--blue)', marginBottom:8, fontWeight:500 }}>{cat}</div>
      <div style={{ fontFamily:'Syne,sans-serif', fontSize:20, fontWeight:700, color:'var(--text)', marginBottom:20 }}>{title}</div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
        {tags.map(t => (
          <span key={t} style={{ padding:'5px 12px', borderRadius:6, fontSize:12, ...tagStyle[color] }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const titleRef = useScrollReveal();
  const barsRef  = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimated(true); obs.disconnect(); }
    }, { threshold: .3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" style={{ position:'relative', zIndex:1 }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'90px 40px' }}>

        <div ref={titleRef}>
          <div className="section-label">Expertise</div>
          <h2 className="grad-text" style={{ fontFamily:'Syne,sans-serif', fontSize:'clamp(32px,4vw,46px)', fontWeight:800, letterSpacing:'-1px', marginBottom:8 }}>
            Skills & Technologies
          </h2>
          <div className="divider" />
          <p style={{ color:'var(--muted)', maxWidth:480, lineHeight:1.7, marginBottom:52 }}>
            A curated toolkit I use to build and design — from pixels to APIs.
          </p>
        </div>

        {/* Skill cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:20, marginBottom:56 }}>
          {skillGroups.map((g,i) => <SkillCard key={g.title} {...g} delay={i*80} />)}
        </div>

        {/* Skill bars */}
        <div ref={barsRef} style={{ maxWidth:1000 }}>
          <div style={{ fontFamily:'Syne,sans-serif', fontSize:16, fontWeight:700, color:'var(--text)', marginBottom:24 }}>
            Proficiency Overview
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            {bars.map(b => (
              <div key={b.label}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8, fontSize:14 }}>
                  <span style={{ color:'var(--text)' }}>{b.label}</span>
                  <span style={{ color:'var(--blue)' }}>{b.pct}%</span>
                </div>
                <div style={{ height:4, borderRadius:4, background:'rgba(255,255,255,.06)', overflow:'hidden' }}>
                  <div
                    className="skill-bar-fill"
                    style={{ width: animated ? `${b.pct}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
