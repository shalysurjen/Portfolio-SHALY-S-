import useScrollReveal from '../hooks/useScrollReveal';
import shoppingbot from '../assets/projects/shoppingbot.mp4';
import instagramwireframe from '../assets/projects/InstaWireFrame.mp4';
import junkfile from '../assets/projects/junkfile.jpg';

const projects = [
  {
    num: '01',
    tag: 'Python · Automation',
    title: 'Junk File Organizer',
    desc: 'Automatically organizes desktop files into categorized folders (Images, Videos, Documents, Audio, PDFs, Scripts) based on file extensions. Enhances workspace productivity through smart file-system automation.',
    stack: ['Python','File I/O','OS Module','Automation','Scripting'],
    github: 'https://github.com/shalysurjen/file-organizer-python',
    live: null,
    accent: '#38BDF8',
    media: junkfile,
    mediaType: 'image',
  },
  {
    num: '02',
    tag: 'UiPath · RPA',
    title: 'Shopping Helper Bot',
    desc: 'An RPA bot that searches iPhone products on Flipkart, extracts product details, filters results by user-defined price range, stores data in Excel, and automatically emails the filtered results.',
    stack: ['UiPath Studio','RPA','Web Scraping','Excel','SMTP Email'],
    github: null,
    live: 'https://www.linkedin.com/posts/shaly-s-528308255_uipath-rpa-automation-activity-7388492761651580929-5bi-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD7fLPAB5CsvMUyz6HoSJu8mctBy5iJiW8M',
    accent: '#818CF8',
    media: shoppingbot,
    mediaType: 'video',
  },
  {
    num: '03',
    tag: 'UI/UX · Wireframe Design using Figma',
    title: 'Instagram Wireframe by using Figma',
    desc: 'A fully responsive personal portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, clean UI design prototyped in Figma, and an intuitive UX.',
    stack: ['Figma','Responsive Design'],
    figma: 'https://www.figma.com/design/HDdlOqOkG0JYVweM5r6rmt/Instagram-Wireframe?node-id=0-1&t=137lpYHOpMPZzuIh-1',
    live: 'https://www.linkedin.com/posts/shaly-s-528308255_uiuxdesign-figma-technohacks-activity-7308208884744081408-Nlyx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7fLPAB5CsvMUyz6HoSJu8mctBy5iJiW8M',
    accent: '#22D3EE',
    media: instagramwireframe,
    mediaType: 'video',
  },
];

function MediaBox({ project }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: 12,
      overflow: 'hidden',
      position: 'relative',
      background: `linear-gradient(135deg, ${project.accent}12, rgba(255,255,255,0.02))`,
      border: `1px solid ${project.accent}25`,
      flexShrink: 0,
    }}>
      {/* Subtle grid pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(${project.accent}08 1px, transparent 1px), linear-gradient(90deg, ${project.accent}08 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }} />

      {project.media ? (
        project.mediaType === 'video' ? (
          <video
            src={project.media} autoPlay muted loop playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'relative', zIndex: 1 }}
          />
        ) : (
          <img
            src={project.media} alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'relative', zIndex: 1 }}
          />
        )
      ) : (
        <div style={{
          width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 12,
          position: 'relative', zIndex: 1,
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            border: `1px dashed ${project.accent}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke={project.accent} strokeWidth="1.3" opacity="0.5">
              <rect x="3" y="3" width="18" height="18" rx="3"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
          </div>
          <span style={{ fontSize: 11, color: project.accent, opacity: 0.4, letterSpacing: '1px', textTransform: 'uppercase' }}>
            Preview
          </span>
        </div>
      )}

      {/* Corner accents */}
      <div style={{
        position: 'absolute', top: 0, left: 0, zIndex: 2,
        width: 40, height: 40,
        borderTop: `2px solid ${project.accent}60`,
        borderLeft: `2px solid ${project.accent}60`,
        borderTopLeftRadius: 12,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, right: 0, zIndex: 2,
        width: 40, height: 40,
        borderBottom: `2px solid ${project.accent}30`,
        borderRight: `2px solid ${project.accent}30`,
        borderBottomRightRadius: 12,
      }} />
    </div>
  );
}

function ProjectCard({ project, index, delay }) {
  const ref = useScrollReveal();

  // Even index (0, 2, ...) → media LEFT; Odd index (1, 3, ...) → media RIGHT
  const mediaOnLeft = index % 2 === 0;

  const MediaPanel = (
    <div
      className="project-media-panel"
      style={{
        width: '50%',
        minWidth: 260,
        flexShrink: 0,
        padding: 20,
        // Border changes based on position
        borderRight: mediaOnLeft ? '1px solid var(--glass-b)' : 'none',
        borderLeft: mediaOnLeft ? 'none' : '1px solid var(--glass-b)',
        display: 'flex',
        alignItems: 'stretch',
        minHeight: 300,
      }}
    >
      <MediaBox project={project} />
    </div>
  );

  const ContentPanel = (
    <div style={{
      flex: 1,
      padding: '26px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
    }}>
      {/* Header: num + tag */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{
          fontFamily: 'Syne,sans-serif', fontSize: 48, fontWeight: 800, lineHeight: 1,
          background: `linear-gradient(135deg,${project.accent},transparent)`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: .35,
        }}>
          {project.num}
        </span>
        <span style={{
          padding: '4px 12px', borderRadius: 100, fontSize: 11, letterSpacing: '.5px',
          background: `${project.accent}18`, border: `1px solid ${project.accent}40`, color: project.accent,
          whiteSpace: 'nowrap',
        }}>
          {project.tag}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Syne,sans-serif', fontSize: 22, fontWeight: 700,
        color: 'var(--text)', marginBottom: 12, lineHeight: 1.2,
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{ color: 'var(--muted)', fontSize: 13.5, lineHeight: 1.75, margin: '0 0 18px', flex: 1 }}>
        {project.desc}
      </p>

      {/* Stack tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {project.stack.map(s => (
          <span key={s} style={{
            padding: '3px 9px', borderRadius: 5, fontSize: 11,
            background: 'rgba(255,255,255,.04)', border: '1px solid var(--glass-b)', color: '#94A3B8',
          }}>{s}</span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 10 }}>
        <a href={project.github} target="_blank" rel="noreferrer" style={{
          flex: project.live ? 1 : 'none',  
          padding: '8px 16px', borderRadius: 8, textAlign: 'center',
          fontSize: 12, textDecoration: 'none', color: 'var(--muted)',
          border: '1px solid var(--glass-b)', background: 'transparent',
          transition: 'all .2s',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = `${project.accent}50`; e.currentTarget.style.color = project.accent; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-b)'; e.currentTarget.style.color = 'var(--muted)'; }}
        >
          <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" style={{
            flex: 1, padding: '8px 16px', borderRadius: 8, textAlign: 'center',
            fontSize: 12, textDecoration: 'none', color: 'var(--muted)',
            border: '1px solid var(--glass-b)', background: 'transparent',
            transition: 'all .2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${project.accent}50`; e.currentTarget.style.color = project.accent; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-b)'; e.currentTarget.style.color = 'var(--muted)'; }}
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        border: '1px solid var(--glass-b)',
        background: 'var(--glass)',
        backdropFilter: 'blur(14px)',
        transition: 'all .35s ease',
        transitionDelay: `${delay}ms`,
        position: 'relative',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${project.accent}55`;
        e.currentTarget.style.transform   = 'translateY(-5px)';
        e.currentTarget.style.boxShadow   = `0 28px 70px ${project.accent}15`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--glass-b)';
        e.currentTarget.style.transform   = 'translateY(0)';
        e.currentTarget.style.boxShadow   = 'none';
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: 2, background: `linear-gradient(90deg, ${project.accent}, ${project.accent}40, transparent)` }} />

      {/* Row: swap order based on mediaOnLeft */}
      <div className="project-row" style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: 300,
      }}>
        {mediaOnLeft ? (
          <>
            {MediaPanel}
            {ContentPanel}
          </>
        ) : (
          <>
            {ContentPanel}
            {MediaPanel}
          </>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const titleRef = useScrollReveal();

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1 }}>
      <style>{`
        @media (max-width: 640px) {
          .project-row {
            flex-direction: column !important;
          }
          .project-media-panel {
            width: 100% !important;
            min-width: unset !important;
            border-right: none !important;
            border-left: none !important;
            border-bottom: 1px solid var(--glass-b) !important;
            min-height: 220px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '90px 40px' }}>
        <div ref={titleRef}>
          <div className="section-label">Work</div>
          <h2 className="grad-text" style={{
            fontFamily: 'Syne,sans-serif', fontSize: 'clamp(32px,4vw,46px)',
            fontWeight: 800, letterSpacing: '-1px', marginBottom: 8,
          }}>
            Featured Projects
          </h2>
          <div className="divider" />
          <p style={{ color: 'var(--muted)', maxWidth: 480, lineHeight: 1.7, marginBottom: 52 }}>
            A showcase of projects that reflect my passion for building and designing.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}