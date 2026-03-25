import useScrollReveal from '../hooks/useScrollReveal';
import Aimarquee from './Aimarquee';

const stats = [
  { value: '7.98', label: 'CGPA' },
  { value: '4+',   label: 'Internships' },
  { value: '10+',  label: 'Certifications' },
  { value: '2026', label: 'Graduating' },
];

export default function About() {
  const leftRef  = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" style={{ position:'relative', zIndex:1 }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'90px 40px' }}>
        <div style={{
          display:'grid',
          gridTemplateColumns:'1fr 1fr',
          gap:56, alignItems:'center',
        }}
          className="about-grid"
        >
          {/* Avatar side */}
          <div ref={leftRef} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:28 }}>
            <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
              {/* Spinning rings */}
              {[320, 368].map((s, i) => (
                <div key={i} style={{
                  position:'absolute', width:s, height:s, borderRadius:24,
                  border:`1px solid rgba(${i===0?'56,189,248':'99,102,241'},.12)`,
                  animation:`spin ${i===0?'10':'14'}s linear infinite ${i===1?'reverse':''}`,
                }} />
              ))}
              {/* Avatar box */}
              <div style={{
                width:280, height:280, borderRadius:24,
                background:'linear-gradient(135deg,#0f2042,#0a2a40)',
                border:'1px solid rgba(56,189,248,.2)',
                display:'flex', alignItems:'center', justifyContent:'center',
                position:'relative', overflow:'hidden',
              }}>
                <div style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(135deg,rgba(56,189,248,.08),transparent)',
                }} />
                <span className="grad-text-2" style={{
                  fontFamily:'Syne,sans-serif', fontSize:108,
                  fontWeight:800, position:'relative', zIndex:1, lineHeight:1,
                }}>S</span>
              </div>
            </div>

            {/* Stat chips */}
            <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center' }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  padding:'10px 18px', borderRadius:10, textAlign:'center',
                  background:'rgba(56,189,248,.07)',
                  border:'1px solid rgba(56,189,248,.15)',
                }}>
                  <div style={{ fontSize:20, fontWeight:700, color:'var(--cyan)', fontFamily:'Syne,sans-serif' }}>{s.value}</div>
                  <div style={{ fontSize:11, color:'var(--muted)', letterSpacing:'1px', textTransform:'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div ref={rightRef}>
            <div className="section-label">About Me</div>
            <h2 style={{
              fontFamily:'Syne,sans-serif', fontSize:'clamp(32px,4vw,46px)',
              fontWeight:800, lineHeight:1.1, letterSpacing:'-1px',
              marginBottom:8,
            }} className="grad-text">
              Crafting Digital<br />Experiences
            </h2>
            <div className="divider" />

            <p style={{ color:'#94A3B8', fontSize:17, lineHeight:1.85, marginBottom:16 }}>
              I'm a final-year Computer Science & Business Systems student at
              Ramco Institute of Technology, bridging great design with functional code.
            </p>
            <p style={{ color:'#94A3B8', lineHeight:1.8, marginBottom:16 }}>
              Passionate about UI/UX design with Figma and currently exploring React.js.
              I've interned across web development, data analytics, UI design, and real
              industrial environments — giving me a 360° view of product building.
            </p>
            <p style={{ color:'#94A3B8', lineHeight:1.8 }}>
              When I'm not coding, I'm prototyping in Figma, exploring automation with
              UiPath, or building dashboards in Power BI. I believe in clean code,
              intuitive interfaces, and continuous learning.
            </p>

            <div style={{ display:'flex', gap:12, marginTop:28, flexWrap:'wrap' }}>
              <a href="mailto:shalysurjen@gmail.com" className="btn-primary" style={{ fontSize:14, padding:'10px 22px' }}>
                <span>Email Me</span>
              </a>
              <a href="https://github.com/shalysurjen" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize:14, padding:'10px 22px' }}>
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @media(max-width:768px){ .about-grid{ grid-template-columns:1fr !important; } }
      `}</style>
      <Aimarquee />
    </section>
  );
}
