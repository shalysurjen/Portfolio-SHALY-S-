import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

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
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 40px;
    align-items: start;
  }
  .certs-image-col {
    position: sticky;
    top: 100px;
  }
  .certs-collage {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 16px;
    display: block;
    box-shadow:
      0 0 0 1px rgba(30,120,138,0.12),
      0 8px 32px rgba(30,120,138,0.10);
    background: var(--glass);
  }
  .certs-collage-placeholder {
    width: 100%;
    aspect-ratio: 4 / 5;
    border-radius: 16px;
    border: 1px solid var(--glass-b);
    background: linear-gradient(
      135deg,
      rgba(30,120,138,0.06) 0%,
      rgba(110,198,215,0.08) 50%,
      rgba(2,132,199,0.04) 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: var(--muted);
    font-size: 13px;
    text-align: center;
    padding: 32px;
  }
  .certs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 14px;
  }
  .cert-card-v2 {
    position: relative;
    overflow: hidden;
    padding: 18px 20px;
    border-radius: 12px;
    background: var(--glass);
    border: 1px solid var(--glass-b);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition:
      transform    0.25s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.25s ease,
      box-shadow   0.25s ease;
  }
  .cert-top-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    pointer-events: none;
  }
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
    position: absolute;
    top: 10px; right: 10px;
    width: 26px; height: 26px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(30,120,138,0.07);
    border: 1px solid rgba(30,120,138,0.14);
    text-decoration: none;
    opacity: 0;
    transform: scale(0.8);
    transition:
      opacity    0.2s ease,
      transform  0.2s ease,
      background 0.2s ease,
      color      0.2s ease;
    z-index: 2;
  }
  .cert-card-v2:hover .cert-link-btn {
    opacity: 1;
    transform: scale(1);
  }
  .cert-link-btn:hover {
    background: rgba(30,120,138,0.15) !important;
    color: var(--blue) !important;
  }
  .cert-link-btn svg {
    width: 13px; height: 13px; flex-shrink: 0;
  }
  .cert-title-text {
    font-size: 13px;
    font-weight: 500;
    color: var(--text);
    line-height: 1.45;
    margin-bottom: 6px;
    padding-right: 22px;
  }
  .cert-meta-text {
    font-size: 11px;
    color: var(--muted);
  }

  @media (max-width: 768px) {
    .certs-layout {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .certs-image-col { position: static; }
    .certs-collage,
    .certs-collage-placeholder {
      aspect-ratio: 16 / 7;
      max-height: 220px;
      object-position: center top;
    }
    .certs-grid { grid-template-columns: 1fr; }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .certs-layout {
      grid-template-columns: 38% 1fr;
      gap: 28px;
    }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('cert-styles-v2')) {
  const tag = document.createElement('style');
  tag.id = 'cert-styles-v2';
  tag.textContent = STYLES;
  document.head.appendChild(tag);
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
        el.style.transform   = 'translateY(-4px)';
        el.style.borderColor = `${cert.color}55`;
        el.style.boxShadow   = `0 12px 32px rgba(30,120,138,0.12), 0 0 20px ${cert.color}18`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.transform   = 'translateY(0)';
        el.style.borderColor = 'var(--glass-b)';
        el.style.boxShadow   = '';
      }}
    >
      <div
        className="cert-top-bar"
        style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
      />
      <div
        className="cert-glow-overlay"
        style={{ background: `radial-gradient(ellipse at top left, ${cert.color}10, transparent 68%)` }}
      />
      {cert.url && (
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link-btn"
          aria-label={`View certificate: ${cert.title}`}
          style={{ color: cert.color }}
          onClick={e => e.stopPropagation()}
        >
          <ExternalLinkIcon />
        </a>
      )}
      <p className="cert-title-text">{cert.title}</p>
      <p className="cert-meta-text">
        {cert.issuer}{cert.valid ? ` · ${cert.valid}` : ''}
      </p>
    </div>
  );
}

function CertCollage() {
  const ref = useScrollReveal();
  // Use React state to track image load error
  const [imgError, setImgError] = useState(false);

  return (
    <div ref={ref} className="certs-image-col">
      {!imgError ? (
        <img
          src="certificates/Certificates.jpg"
          alt="Collage of professional certifications earned across cloud, design, development, and analytics"
          className="certs-collage"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        /* Clean fallback — no nested <img> that causes the broken-icon overlap */
        <div className="certs-collage-placeholder" aria-hidden="true">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" opacity="0.3">
            <rect x="2" y="2" width="20" height="20" rx="4" />
            <path d="M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span style={{ opacity: 0.45, lineHeight: 1.6 }}>
            Certificate collage<br />
            <span style={{ fontSize: 11 }}>Place image at /certificates/Certificates.jpg</span>
          </span>
        </div>
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
          <h2
            className="grad-text"
            style={{
              fontSize: 'clamp(32px, 4vw, 46px)',
              fontWeight: 800,
              letterSpacing: '-1px',
              marginBottom: 8,
            }}
          >
            Certifications
          </h2>
          <div className="divider" />
          <p style={{ color: 'var(--muted)', maxWidth: 480, lineHeight: 1.7, marginBottom: 52 }}>
            Verified credentials across design, development, analytics, and cloud platforms.
          </p>
        </div>

        <div className="certs-layout">
          <CertCollage />
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