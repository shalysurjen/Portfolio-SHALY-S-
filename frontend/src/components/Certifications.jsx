import { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

// Import all individual certificate images
import cert1  from '../assets/certificates/cert1.jpg';
import cert2  from '../assets/certificates/cert2.jpg';
import cert3  from '../assets/certificates/cert3.jpg';
import cert4  from '../assets/certificates/cert4.jpg';
import cert5  from '../assets/certificates/cert5.jpg';
import cert6  from '../assets/certificates/cert6.jpg';
import cert7  from '../assets/certificates/cert7.jpg';
import cert8  from '../assets/certificates/cert8.jpg';
import cert9  from '../assets/certificates/cert9.jpeg';
import cert10 from '../assets/certificates/cert10.jpg';
import cert11 from '../assets/certificates/cert11.jpeg';

const certImages = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8, cert9, cert10, cert11];

const certs = [
  {
    title:  'Oracle Cloud Infrastructure 2025 Foundations Associate',
    issuer: 'Oracle',
    valid:  'Valid till Aug 2027',
    color:  '#F97316',
    url:    'https://catalog-education.oracle.com/pls/certview/sharesandbadges',
  },
  {
    title:  'Microsoft Power BI Data Analyst Associate',
    issuer: 'ICT Academy',
    color:  '#F59E0B',
    url:    '',
  },
  {
    title:  'Figma for UI/UX: Master Web Design in Figma',
    issuer: 'Packt · Coursera',
    color:  '#A78BFA',
    url:    'https://www.coursera.org/account/accomplishments',
  },
  {
    title:  'Naan Mudhalvan RPA Diploma of Completion',
    issuer: 'Govt. of Tamil Nadu',
    color:  '#38BDF8',
    url:    '',
  },
  {
    title:  'Python Fundamentals',
    issuer: 'Infosys Springboard',
    color:  '#3B82F6',
    url:    'https://infyspringboard.onwingspan.com',
  },
  {
    title:  'Certified Security Expert Level-1',
    issuer: 'Supraja Technologies',
    color:  '#EF4444',
    url:    '',
  },
  {
    title:  'Build a Full Website using WordPress',
    issuer: 'Coursera',
    color:  '#22C55E',
    url:    'https://www.coursera.org/account/accomplishments',
  },
  {
    title:  'Develop a Company Website with Wix',
    issuer: 'Coursera Project Network',
    color:  '#06B6D4',
    url:    'https://www.coursera.org/account/accomplishments',
  },
  {
    title:  'Junior Grade Typewriting (First Class with Distinction)',
    issuer: 'Dept. of Technical Education, TN',
    color:  '#8B5CF6',
    url:    '',
  },
  {
    title:  'Fundamentals of C Language: Variables & Datatypes',
    issuer: 'Skillsoft',
    color:  '#EC4899',
    url:    'https://www.skillsoft.com',
  },
];

const STYLES = `
  .certs-layout {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .certs-image-col {
    position: static;
    width: 100%;
  }

  /* ── Slideshow — full width landscape banner ── */
  .cert-slideshow {
    position: relative;
    margin: 0 auto;
    width: 70%;
    aspect-ratio: 30 / 20;
    max-height: 1200px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    box-shadow:
      0 0 0 1px rgba(30,120,138,0.12),
      0 8px 32px rgba(30,120,138,0.10);
    background: var(--glass);
    transition: transform 0.15s ease;
  }
  .cert-slideshow:active { transform: scale(0.99); }

  /* Link icon button — top-right corner, opens URL without changing slide */
  .cert-slide-url-btn {
    position: absolute;
    top: 10px;
    right: 12px;
    z-index: 11;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.35);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    opacity: 0;
    transform: scale(0.85);
    transition: opacity 0.2s ease, transform 0.2s ease, background 0.2s ease;
  }
  .cert-slide-url-btn svg { width: 12px; height: 12px; }
  .cert-slideshow:hover .cert-slide-url-btn {
    opacity: 1;
    transform: scale(1);
  }
  .cert-slide-url-btn:hover {
    background: rgba(30,120,138,0.5);
    color: #fff;
  }

  /* Progress bar at top */
  .cert-progress-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: rgba(255,255,255,0.1);
    z-index: 10;
  }
  .cert-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #1e788a, #6ec6d7);
    will-change: width;
  }

  /* Individual slides */
  .cert-slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: scale(1.05) translateY(10px);
    transition:
      opacity   0.85s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.85s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    will-change: opacity, transform;
  }
  .cert-slide.active {
    opacity: 1;
    transform: scale(1) translateY(0);
    pointer-events: auto;
  }
  .cert-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Corner next-arrow — bottom-right, always visible, glows on hover */
  .cert-corner-arrow {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 10;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.38);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,0.18);
    color: rgba(255,255,255,0.65);
    pointer-events: none;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  }
  .cert-corner-arrow svg { width: 11px; height: 11px; }
  .cert-slideshow:hover .cert-corner-arrow {
    background: rgba(30,120,138,0.6);
    color: #fff;
    transform: scale(1.15);
  }

  /* Dark gradient overlay at bottom of each slide */
  .cert-slide-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 45%,
      rgba(5, 15, 25, 0.80) 100%
    );
    pointer-events: none;
  }

  /* ── Overlay text animation ── */
  @keyframes overlayLineUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Wrapper: sits at the bottom of the slide */
  .cert-slide-label {
    position: absolute;
    bottom: 32px;
    left: 14px;
    right: 14px;
    pointer-events: none;
    z-index: 3;
    overflow: hidden;
  }

  .overlay-line {
    display: block;
    opacity: 0;
    transform: translateY(20px);
  }

  /* Line 1 — issuer */
  .overlay-line.issuer {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.09em;
    color: rgba(255,255,255,0.85);
    text-transform: uppercase;
    line-height: 1.4;
    margin-bottom: 4px;
  }

  /* Line 2+ — title words */
  .overlay-line.title-word {
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0;
    text-transform: none;
    color: rgba(255,255,255,0.6);
    line-height: 1.5;
    white-space: normal;
  }

  .overlay-enter .overlay-line {
    animation: overlayLineUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  .overlay-enter .overlay-line.issuer       { animation-delay: 0.05s; }
  .overlay-enter .overlay-line.title-word-0 { animation-delay: 0.18s; }
  .overlay-enter .overlay-line.title-word-1 { animation-delay: 0.28s; }
  .overlay-enter .overlay-line.title-word-2 { animation-delay: 0.38s; }
  .overlay-enter .overlay-line.title-word-3 { animation-delay: 0.46s; }

  .cert-slide:not(.active) .overlay-line {
    opacity: 0;
    transform: translateY(20px);
    animation: none;
  }

  /* Counter badge — top-right, below URL button when both present */
  .cert-counter {
    position: absolute;
    top: 10px;
    right: 12px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: rgba(255,255,255,0.6);
    z-index: 10;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(6px);
    padding: 2px 7px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.12);
    /* Hide counter when URL button is visible on hover */
    transition: opacity 0.2s ease;
  }
  .cert-slideshow:hover .cert-counter { opacity: 0; }

  /* Arrow nav buttons */
  .cert-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.18);
    backdrop-filter: blur(8px);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.25s ease, background 0.2s ease, transform 0.2s ease;
    z-index: 5;
  }
  .cert-slideshow:hover .cert-arrow { opacity: 1; }
  .cert-arrow:hover {
    background: rgba(255,255,255,0.22);
    transform: translateY(-50%) scale(1.08);
  }
  .cert-arrow.prev { left: 8px; }
  .cert-arrow.next { right: 8px; }
  .cert-arrow svg { width: 13px; height: 13px; }

  /* Dot indicators */
  .cert-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 4px;
    align-items: center;
    z-index: 5;
  }
  .cert-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255,255,255,0.28);
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease, width 0.3s ease;
    border: none;
    padding: 0;
    flex-shrink: 0;
  }
  .cert-dot.active {
    background: rgba(255,255,255,0.9);
    transform: scale(1.3);
    width: 12px;
    border-radius: 3px;
  }

  /* Cert list — multi-column grid now that full width is available */
  .certs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 10px;
  }
  .cert-card-v2 {
    position: relative;
    overflow: hidden;
    padding: 14px 18px;
    border-radius: 10px;
    background: var(--glass);
    border: 1px solid var(--glass-b);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    gap: 12px;
    transition:
      transform    0.25s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.25s ease,
      box-shadow   0.25s ease;
  }
  /* Color dot replacing top bar in list mode */
  .cert-color-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .cert-card-body {
    flex: 1;
    min-width: 0;
  }
  .cert-top-bar { display: none; }
  .cert-glow-overlay {
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    border-radius: inherit;
    transition: opacity 0.3s ease;
  }
  .cert-card-v2:hover .cert-glow-overlay { opacity: 1; }
  .cert-link-btn {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(30,120,138,0.07);
    border: 1px solid rgba(30,120,138,0.14);
    text-decoration: none;
    flex-shrink: 0;
    opacity: 0;
    transform: scale(0.8);
    transition:
      opacity    0.2s ease,
      transform  0.2s ease,
      background 0.2s ease,
      color      0.2s ease;
    z-index: 2;
  }
  .cert-card-v2:hover .cert-link-btn { opacity: 1; transform: scale(1); }
  .cert-link-btn:hover {
    background: rgba(30,120,138,0.15) !important;
    color: var(--blue) !important;
  }
  .cert-link-btn svg { width: 12px; height: 12px; flex-shrink: 0; }
  .cert-title-text {
    font-size: 12px;
    font-weight: 500;
    color: var(--text);
    line-height: 1.4;
    margin-bottom: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cert-meta-text { font-size: 10px; color: var(--muted); }

  @media (max-width: 768px) {
    .certs-layout { gap: 20px; }
    .cert-slideshow { aspect-ratio: 16 / 7; max-height: 160px; }
    .cert-slide-label { bottom: 24px; left: 12px; right: 12px; }
    .overlay-line.issuer { font-size: 9px; }
    .overlay-line.title-word { font-size: 10px; }
    .certs-grid { grid-template-columns: 1fr; }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('cert-styles-v2')) {
  const tag = document.createElement('style');
  tag.id = 'cert-styles-v2';
  tag.textContent = STYLES;
  document.head.appendChild(tag);
}

const INTERVAL_MS = 30000; // 30 seconds

function CertSlideshow() {
  const ref = useScrollReveal();
  const [current, setCurrent]   = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(performance.now());
  const rafRef       = useRef(null);
  const total        = certImages.length;

  const currentUrl = certs[current]?.url ?? '';

  // Jump to a specific slide and reset timer
  const goTo = (idx) => {
    setCurrent(((idx % total) + total) % total);
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  // rAF loop for smooth progress bar + auto-advance
  useEffect(() => {
    const tick = (now) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min((elapsed / INTERVAL_MS) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        setCurrent(c => (c + 1) % total);
        setProgress(0);
        startTimeRef.current = performance.now();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [total]);

  // Click anywhere on slideshow → always go to next slide
  const handleSlideshowClick = () => {
    goTo(current + 1);
  };

  return (
    <div ref={ref} className="certs-image-col">
      <div
        className={`cert-slideshow${currentUrl ? ' has-url' : ''}`}
        onClick={handleSlideshowClick}
      >

        {/* Top progress bar */}
        <div className="cert-progress-bar">
          <div className="cert-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Corner arrow — bottom-right, indicates click = next */}
        <div className="cert-corner-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        {/* Link icon — top-right, opens URL, stops propagation so it doesn't trigger next */}
        {currentUrl && (
          <a
            href={currentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-slide-url-btn"
            aria-label="Open certificate"
            onClick={e => e.stopPropagation()}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}

        {/* Counter */}
        <div className="cert-counter">{current + 1} / {total}</div>

        {/* Slides */}
        {certImages.map((src, i) => (
          <div key={i} className={`cert-slide${i === current ? ' active' : ''}`}>
            <img
              src={src}
              alt={`Certificate ${i + 1} – ${certs[i]?.issuer ?? ''}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="cert-slide-overlay" />
            {certs[i] && (
              <div className={`cert-slide-label${i === current ? ' overlay-enter' : ''}`}>
                <span className="overlay-line issuer">
                  {certs[i].issuer}
                </span>
                {certs[i].title
                  .match(/.{1,30}(\s|$)/g)
                  ?.slice(0, 4)
                  .map((chunk, ci) => (
                    <span key={ci} className={`overlay-line title-word title-word-${ci}`}>
                      {chunk.trim()}
                    </span>
                  ))
                }
              </div>
            )}
          </div>
        ))}

        {/* Prev arrow */}
        <button
          className="cert-arrow prev"
          onClick={e => { e.stopPropagation(); goTo(current - 1); }}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          className="cert-arrow next"
          onClick={e => { e.stopPropagation(); goTo(current + 1); }}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="cert-dots">
          {certImages.map((_, i) => (
            <button
              key={i}
              className={`cert-dot${i === current ? ' active' : ''}`}
              onClick={e => { e.stopPropagation(); goTo(i); }}
              aria-label={`Certificate ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function CertCard({ cert, delay }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="cert-card-v2"
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.transform   = 'translateX(4px)';
        el.style.borderColor = `${cert.color}55`;
        el.style.boxShadow   = `0 4px 20px rgba(30,120,138,0.10), 0 0 16px ${cert.color}14`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.transform   = 'translateX(0)';
        el.style.borderColor = 'var(--glass-b)';
        el.style.boxShadow   = '';
      }}
    >
      <div className="cert-top-bar"
        style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />
      <div className="cert-glow-overlay"
        style={{ background: `radial-gradient(ellipse at left, ${cert.color}0d, transparent 70%)` }} />

      {/* Color dot */}
      <div className="cert-color-dot" style={{ background: cert.color }} />

      {/* Text body */}
      <div className="cert-card-body">
        <p className="cert-title-text">{cert.title}</p>
        <p className="cert-meta-text">
          {cert.issuer}{cert.valid ? ` · ${cert.valid}` : ''}
        </p>
      </div>

      {/* Link button */}
      {cert.url && (
        <a href={cert.url} target="_blank" rel="noopener noreferrer"
          className="cert-link-btn" aria-label={`View certificate: ${cert.title}`}
          style={{ color: cert.color }} onClick={e => e.stopPropagation()}>
          <ExternalLinkIcon />
        </a>
      )}
    </div>
  );
}

export default function Certifications() {
  const titleRef = useScrollReveal();

  return (
    <section id="certifications" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '90px clamp(16px, 4vw, 40px)' }}>

        <div ref={titleRef}>
          <div className="section-label">Credentials</div>
          <h2 className="grad-text" style={{
            fontSize: 'clamp(32px, 4vw, 46px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            marginBottom: 8,
          }}>
            Certifications
          </h2>
          <div className="divider" />
          <p style={{ color: 'var(--muted)', maxWidth: 480, lineHeight: 1.7, marginBottom: 52 }}>
            Verified credentials across design, development, analytics, and cloud platforms.
          </p>
        </div>

        <div className="certs-layout">
          <CertSlideshow />
          <div className="certs-grid">
            {certs.map((c, i) => (
              <CertCard key={c.title} cert={c} delay={i * 45} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}