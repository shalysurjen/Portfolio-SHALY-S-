import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    num: '01',
    tag: 'Python · Automation',
    title: 'Junk File Organizer',
    desc: 'Automatically organizes desktop files into categorized folders (Images, Videos, Documents, Audio, PDFs, Scripts) based on file extensions. Enhances workspace productivity through smart file-system automation.',
    stack: ['Python','File I/O','OS Module','Automation','Scripting'],
    github: 'https://github.com/shalysurjen',
    live: null,
    accent: '#38BDF8',
  },
  {
    num: '02',
    tag: 'UiPath · RPA',
    title: 'Shopping Helper Bot',
    desc: 'An RPA bot that searches iPhone products on Flipkart, extracts product details, filters results by user-defined price range, stores data in Excel, and automatically emails the filtered results.',
    stack: ['UiPath Studio','RPA','Web Scraping','Excel','SMTP Email'],
    github: 'https://github.com/shalysurjen',
    live: null,
    accent: '#818CF8',
  },
  {
    num: '03',
    tag: 'Frontend · Design',
    title: 'Developer Portfolio',
    desc: 'A fully responsive personal portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, clean UI design prototyped in Figma, and an intuitive UX.',
    stack: ['HTML','CSS','JavaScript','Figma','Responsive Design'],
    github: 'https://github.com/shalysurjen',
    live: '#',
    accent: '#22D3EE',
  },
];

function ProjectCard({ project, delay }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        borderRadius:18, overflow:'hidden',
        border:'1px solid var(--glass-b)',
        background:'var(--glass)',
        backdropFilter:'blur(14px)',
        transition:'all .3s ease',
        transitionDelay:`${delay}ms`,
        position:'relative',
        display:'flex', flexDirection:'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${project.accent}55`;
        e.currentTarget.style.transform   = 'translateY(-6px)';
        e.currentTarget.style.boxShadow   = `0 24px 60px ${project.accent}18`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--glass-b)';
        e.currentTarget.style.transform   = 'translateY(0)';
        e.currentTarget.style.boxShadow   = 'none';
      }}
    >
      {/* Top accent bar */}
      <div style={{ height:2, background:`linear-gradient(90deg,${project.accent},transparent)` }} />

      {/* Header */}
      <div style={{ padding:'22px 24px 0', display:'flex', alignItems:'flex-start', justifyContent:'space-between' }}>
        <span style={{
          fontFamily:'Syne,sans-serif', fontSize:48, fontWeight:800, lineHeight:1,
          background:`linear-gradient(135deg,${project.accent},transparent)`,
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', opacity:.35,
        }}>
          {project.num}
        </span>
        <span style={{
          padding:'4px 12px', borderRadius:100, fontSize:11, letterSpacing:'.5px',
          background:`${project.accent}18`, border:`1px solid ${project.accent}40`, color:project.accent,
        }}>
          {project.tag}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding:'10px 24px 20px', flex:1 }}>
        <h3 style={{ fontFamily:'Syne,sans-serif', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12, lineHeight:1.2 }}>
          {project.title}
        </h3>
        <p style={{ color:'var(--muted)', fontSize:14, lineHeight:1.75, marginBottom:20 }}>
          {project.desc}
        </p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
          {project.stack.map(s => (
            <span key={s} style={{
              padding:'4px 10px', borderRadius:5, fontSize:11,
              background:'rgba(255,255,255,.04)', border:'1px solid var(--glass-b)', color:'#94A3B8',
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div style={{ padding:'0 24px 22px', display:'flex', gap:10 }}>
        <a href={project.github} target="_blank" rel="noreferrer" style={{
          flex:1, padding:'9px 12px', borderRadius:8, textAlign:'center',
          fontSize:12, textDecoration:'none', color:'var(--muted)',
          border:'1px solid var(--glass-b)', background:'transparent',
          transition:'all .2s', display:'flex', alignItems:'center', justifyContent:'center', gap:6,
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor=`${project.accent}50`; e.currentTarget.style.color=project.accent; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--glass-b)'; e.currentTarget.style.color='var(--muted)'; }}
        >
          <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" style={{
            flex:1, padding:'9px 12px', borderRadius:8, textAlign:'center',
            fontSize:12, textDecoration:'none', color:'var(--muted)',
            border:'1px solid var(--glass-b)', background:'transparent',
            transition:'all .2s', display:'flex', alignItems:'center', justifyContent:'center', gap:6,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor=`${project.accent}50`; e.currentTarget.style.color=project.accent; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--glass-b)'; e.currentTarget.style.color='var(--muted)'; }}
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const titleRef = useScrollReveal();

  return (
    <section id="projects" style={{ position:'relative', zIndex:1 }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'90px 40px' }}>
        <div ref={titleRef}>
          <div className="section-label">Work</div>
          <h2 className="grad-text" style={{ fontFamily:'Syne,sans-serif', fontSize:'clamp(32px,4vw,46px)', fontWeight:800, letterSpacing:'-1px', marginBottom:8 }}>
            Featured Projects
          </h2>
          <div className="divider" />
          <p style={{ color:'var(--muted)', maxWidth:480, lineHeight:1.7, marginBottom:52 }}>
            A showcase of projects that reflect my passion for building and designing.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:24 }}>
          {projects.map((p,i) => <ProjectCard key={p.num} project={p} delay={i*100} />)}
        </div>
      </div>
    </section>
  );
}
