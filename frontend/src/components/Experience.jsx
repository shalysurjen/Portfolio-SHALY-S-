import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useCallback, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/* ── Asset imports ─────────────────────────────────────────────────────────────
   All files live in src/assets/media/ — Vite resolves them at build time.
─────────────────────────────────────────────────────────────────────────────── */
import webCalcVideo   from '../assets/media/WebCalculator.mp4';
import webLoginVideo  from '../assets/media/Weblogin.mp4';
import instaWireframe from '../assets/media/InstaWireFrame.mp4';
import ecommerceVideo from '../assets/media/E-commerce.mp4';
import inspireCertImg from '../assets/media/inspirecert.jpg';
import analysisDash1  from '../assets/media/inspireanalysis1.jpg';
import analysisDash2  from '../assets/media/inspireanalysis2.jpg';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const experiences = [
  {
    role:     'Web Development Intern',
    company:  'TechnoHacks',
    type:     'Remote',
    duration: '1 Month · 2023',
    desc:     'Designed a personal portfolio website, web-based calculator, and responsive login page. Applied responsive design principles, wrote clean maintainable HTML/CSS/JS code, and integrated interactive UI elements.',
    tags:     ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'DOM'],
    color:    '#38bdf8',
    media: [
      { type: 'video', src: webCalcVideo,  caption: 'Web Calculator'  },
      { type: 'video', src: webLoginVideo, caption: 'Login Page Demo' },
    ],
  },
  {
    role:     'UI/UX Design Intern',
    company:  'TechnoHacks',
    type:     'Remote',
    duration: '1 Month · 2023',
    desc:     'Worked on real-world web and mobile projects — wireframing, prototyping, and high-fidelity design in Figma. Designed a full Instagram clone wireframe (Home, Profile, Search, Post pages) and a polished Login UI.',
    tags:     ['Figma', 'Wireframing', 'Prototyping', 'User Flow', 'High-Fidelity UI'],
    color:    '#818cf8',
    media: [
      { type: 'video', src: instaWireframe, caption: 'Instagram Clone Wireframe' },
    ],
  },
  {
    role:     'UI Developer Intern',
    company:  'The India Cements Limited',
    type:     'On-site',
    duration: '1 Month · 2024',
    desc:     'Designed a proof-of-concept e-commerce platform interface. Gained exposure to cement manufacturing, factory operations, and product export processes — bridging academic learning with large-scale industrial workflows.',
    tags:     ['Frontend Dev', 'UI Design', 'Industry Exposure', 'E-commerce UI'],
    color:    '#22d3ee',
    media: [
      { type: 'video', src: ecommerceVideo, caption: 'E-commerce UI Demo' },
    ],
  },
  {
    role:     'Data Analytics Intern',
    company:  'Inspire Softech Solutions',
    type:     'Remote',
    duration: '1 Month · 2024',
    desc:     'Analyzed sales data using Excel and Power BI. Performed data preparation, cleaning, and visualization. Built an interactive sales analysis dashboard enabling dynamic reporting and actionable business insights.',
    tags:     ['Excel', 'Power BI', 'Data Visualization', 'Dashboards', 'Sales Analysis'],
    color:    '#f472b6',
    media: [
      { type: 'image', src: inspireCertImg, caption: 'Internship Certificate' },
      { type: 'image', src: analysisDash1,  caption: 'Sales Dashboard'        },
      { type: 'image', src: analysisDash2,  caption: 'Analysis Report'        },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────────── */
const STYLES = `
  .exp-card {
    padding: 28px;
    border-radius: 18px;
    background: rgba(255,255,255,0.032);
    border: 1px solid rgba(255,255,255,0.08);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06);
    position: relative;
    overflow: hidden;
    cursor: default;
    transform-style: preserve-3d;
  }
  .exp-card-topline {
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.13), transparent);
    pointer-events: none;
  }
  .exp-noise {
    position: absolute;
    inset: 0; border-radius: inherit; opacity: 0.018;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 128px;
  }

  .media-gallery {
    display: grid;
    gap: 10px;
    margin: 20px 0 18px;
  }
  .media-gallery[data-count="1"] { grid-template-columns: 1fr; }
  .media-gallery[data-count="2"] { grid-template-columns: 1fr 1fr; }
  .media-gallery[data-count="3"] { grid-template-columns: 1fr 1fr 1fr; }

  .media-tile {
    position: relative;
    border-radius: 11px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
  }
  .media-tile img,
  .media-tile video {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }

  .media-shimmer {
    position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%);
    background-size: 200% 100%;
    animation: exp-shimmer 1.6s infinite;
    pointer-events: none;
  }
  @keyframes exp-shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position:  200% 0; }
  }

  .media-caption {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 20px 10px 8px;
    background: linear-gradient(to top, rgba(0,0,0,0.72), transparent);
    font-size: 11px;
    color: rgba(255,255,255,0.65);
    letter-spacing: 0.03em;
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
  }
  .media-tile:hover .media-caption { opacity: 1; }

  .media-img-overlay {
    position: absolute; inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  .media-tile:hover .media-img-overlay { opacity: 1; }

  .exp-tags { display: flex; flex-wrap: wrap; gap: 6px; }

  @keyframes dot-pulse {
    0%, 100% { box-shadow: 0 0 0 0 currentColor; opacity: 1; }
    50%       { box-shadow: 0 0 0 7px transparent; opacity: .6; }
  }

  .lb-backdrop {
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(0,0,0,0.88);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    display: flex; align-items: center; justify-content: center;
    padding: 24px;
  }
  .lb-img {
    max-width: min(90vw, 1100px);
    max-height: 85vh;
    border-radius: 14px;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 40px 120px rgba(0,0,0,0.7);
    object-fit: contain;
    display: block;
  }
  .lb-close {
    position: fixed; top: 20px; right: 24px;
    width: 40px; height: 40px; border-radius: 50%;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.8);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 20px; line-height: 1;
    transition: background 0.2s, color 0.2s;
    z-index: 10000;
  }
  .lb-close:hover { background: rgba(255,255,255,0.15); color: #fff; }
  .lb-caption {
    position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
    font-size: 13px; color: rgba(255,255,255,0.45);
    letter-spacing: 0.04em; white-space: nowrap; pointer-events: none;
  }

  @media (max-width: 640px) {
    .media-gallery[data-count="2"],
    .media-gallery[data-count="3"] { grid-template-columns: 1fr !important; }
    .exp-card { padding: 18px; }
  }
  @media (max-width: 768px) {
    .timeline-grid { grid-template-columns: 1fr !important; }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('exp-styles-v3')) {
  const tag = document.createElement('style');
  tag.id = 'exp-styles-v3';
  tag.textContent = STYLES;
  document.head.appendChild(tag);
}

/* ─────────────────────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────────────────────── */
function Lightbox({ src, caption, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="lb-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.img
        src={src}
        alt={caption || 'Preview'}
        className="lb-img"
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
      />
      <button className="lb-close" onClick={onClose} aria-label="Close preview">×</button>
      {caption && <p className="lb-caption">{caption}</p>}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SINGLE MEDIA TILE  —  autoplay + useScrollReveal
───────────────────────────────────────────────────────────── */
function MediaTile({ item, color, index, onImageClick }) {
  const videoRef = useRef(null);
  const tileRef  = useScrollReveal({ rootMargin: '0px 0px -30px 0px' });
  const [loaded,  setLoaded]  = useState(false);
  const [hovered, setHovered] = useState(false);

  /* autoplay as soon as the video element is ready */
  useEffect(() => {
    if (item.type === 'video') {
      videoRef.current?.play().catch(() => {});
    }
  }, [item.type]);

  const onEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const onLeave = useCallback(() => {
    setHovered(false);
  }, []);

  const onClick = useCallback(() => {
    if (item.type === 'image') onImageClick(item);
  }, [item, onImageClick]);

  return (
    <div
      ref={tileRef}
      className="media-tile"
      style={{
        boxShadow: hovered
          ? `0 0 0 1.5px ${color}55, 0 8px 28px ${color}22`
          : '0 0 0 1px rgba(255,255,255,0.06)',
        cursor: item.type === 'image' ? 'zoom-in' : 'default',
        transitionDelay: `${index * 0.07}s`,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {!loaded && <div className="media-shimmer" />}

      {item.type === 'image' ? (
        <>
          <motion.img
            src={item.src}
            alt={item.caption || 'Project screenshot'}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.35s ease' }}
          />
          <div
            className="media-img-overlay"
            style={{ background: `linear-gradient(135deg, ${color}22, transparent 55%)` }}
          />
        </>
      ) : (
        <motion.video
          ref={videoRef}
          src={item.src}
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => {
            setLoaded(true);
            videoRef.current?.play().catch(() => {});
          }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.35s ease' }}
        />
      )}

      {item.caption && <div className="media-caption">{item.caption}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MEDIA GALLERY
───────────────────────────────────────────────────────────── */
function MediaGallery({ media, color }) {
  const [lightbox, setLightbox] = useState(null);

  if (!media || media.length === 0) return null;

  const count = Math.min(media.length, 3);

  return (
    <>
      <div className="media-gallery" data-count={String(count)}>
        {media.map((item, i) => (
          <MediaTile
            key={`${item.caption ?? i}-${i}`}
            item={item}
            color={color}
            index={i}
            onImageClick={(itm) => setLightbox({ src: itm.src, caption: itm.caption })}
          />
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            key="lightbox"
            src={lightbox.src}
            caption={lightbox.caption}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   3-D TILT CARD
───────────────────────────────────────────────────────────── */
function TiltCard({ children, color }) {
  const ref  = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const cfg  = { stiffness: 200, damping: 22, mass: 0.6 };
  const rotX = useSpring(useTransform(rawY, [-0.5, 0.5],  [5, -5]), cfg);
  const rotY = useSpring(useTransform(rawX, [-0.5, 0.5], [-5,  5]), cfg);

  const onMove = useCallback((e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set((e.clientX - r.left) / r.width  - 0.5);
    rawY.set((e.clientY - r.top)  / r.height - 0.5);
  }, [rawX, rawY]);

  const onLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={ref}
      className="exp-card"
      style={{ rotateX: rotX, rotateY: rotY, perspective: 900 }}
      whileHover={{
        y: -6,
        boxShadow: `0 24px 60px ${color}16, 0 0 0 1px ${color}28`,
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="exp-card-topline" />
      <div className="exp-noise" />
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   TAG VARIANTS
───────────────────────────────────────────────────────────── */
const tagVar = {
  hidden: { opacity: 0, y: 6 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.28, ease: [0.4, 0, 0.2, 1] },
  }),
};

/* ─────────────────────────────────────────────────────────────
   TIMELINE ITEM
───────────────────────────────────────────────────────────── */
function TimelineItem({ exp, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      style={{ position: 'relative', marginBottom: 36, paddingLeft: 28 }}
    >
      {/* pulsing dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.1, type: 'spring', stiffness: 300 }}
        style={{
          position: 'absolute', left: -5, top: 16,
          width: 11, height: 11, borderRadius: '50%',
          background: exp.color, border: '2px solid var(--bg)',
          color: exp.color,
          animation: 'dot-pulse 2.6s ease-in-out infinite',
        }}
      />

      <TiltCard color={exp.color}>

        {/* 1. Role + badge */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 17, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
            {exp.role}
          </h3>
          <span style={{
            padding: '3px 12px', borderRadius: 100, fontSize: 11,
            background: `${exp.color}15`, border: `1px solid ${exp.color}35`,
            color: exp.color, whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            {exp.type}
          </span>
        </div>

        {/* 2. Company */}
        <div style={{ color: exp.color, fontSize: 14, fontWeight: 600, marginBottom: 5 }}>
          {exp.company}
        </div>

        {/* 3. Duration */}
        <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 16, height: 1, display: 'inline-block', background: 'var(--muted)', opacity: 0.45 }} />
          {exp.duration}
        </div>

        {/* 4. Description */}
        <p style={{ color: 'rgba(148,163,184,0.82)', fontSize: 13.5, lineHeight: 1.78, marginBottom: 2 }}>
          {exp.desc}
        </p>

        {/* 5. Media gallery */}
        <MediaGallery media={exp.media ?? []} color={exp.color} />

        {/* 6. Tags */}
        <div className="exp-tags">
          {exp.tags.map((t, i) => (
            <motion.span
              key={t}
              custom={i}
              variants={tagVar}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{
                padding: '3px 10px', borderRadius: 5, fontSize: 11,
                background: `${exp.color}10`, border: `1px solid ${exp.color}28`,
                color: exp.color,
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>

      </TiltCard>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────── */
export default function Experience() {
  return (
    <section id="experience" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 40px' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Journey</div>
          <h2
            className="grad-text"
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 8 }}
          >
            Experience
          </h2>
          <div className="divider" />
          <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7, marginBottom: 56 }}>
            Real-world exposure across web development, UI/UX, data analytics, and industrial environments.
          </p>
        </motion.div>

        <div
          className="timeline-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 48px' }}
        >
          <div style={{ position: 'relative', paddingLeft: 28 }}>
            <div className="timeline-line" />
            {experiences.slice(0, 2).map((e, i) => (
              <TimelineItem key={e.role + e.company} exp={e} delay={i * 0.12} />
            ))}
          </div>
          <div style={{ position: 'relative', paddingLeft: 28 }}>
            <div className="timeline-line" />
            {experiences.slice(2).map((e, i) => (
              <TimelineItem key={e.role + e.company} exp={e} delay={i * 0.12 + 0.06} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}