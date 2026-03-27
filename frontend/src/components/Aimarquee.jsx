import React from "react";

const AI_TOOLS = [
  {
    name: "Zencoder",
    color: "#6366F1",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M4 6h16M4 12h10M4 18h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 15l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "OpenClay AI",
    color: "#F97316",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 3c2 1.5 3.5 4 4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Claude",
    color: "#D97706",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.239.048-4.272 2.408-.163.21.163.21.28.222.54-.093zM14.188 5.235l-2.069 5.806.222.222h.128l.27-.08 2.458-5.925-.048-.27-.222-.163-.27.048-.469.362zM4.386 17.521l-.116.28.28.386.386.093.51-.14 4.72-2.753.128-.28-.116-.222h-.128l-.28.048-5.384 2.588zM12.585 4.827l-2.753 7.418.163.28h.28l.222-.08 2.856-7.31-.093-.28-.28-.116-.395.088zM19.068 8.058l-4.72 2.647-.08.23.08.128h.229l.239-.048 4.272-2.408.163-.21-.163-.21-.28-.222-.74.093zM9.57 18.778l2.069-5.806-.222-.222h-.128l-.27.08-2.458 5.925.048.27.222.163.27-.048.469-.362z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Visily",
    color: "#8B5CF6",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect x="3" y="3" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.8"/>
        <rect x="13" y="3" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.5"/>
        <rect x="3" y="13" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.5"/>
        <rect x="13" y="13" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: "Runway",
    color: "#E63946",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        <polygon points="10,9 16,12 10,15" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "RecCloud",
    color: "#0EA5E9",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M6.5 19a4.5 4.5 0 01-.44-8.99A6 6 0 0118 11h1a4 4 0 01.44 7.99" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="16" r="2.5" fill="currentColor"/>
        <path d="M12 13v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Canva AI",
    color: "#00C4CC",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 12c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Microsoft Designer",
    color: "#0078D4",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect x="3" y="3" width="8.5" height="8.5" fill="currentColor" opacity="0.9"/>
        <rect x="12.5" y="3" width="8.5" height="8.5" fill="currentColor" opacity="0.7"/>
        <rect x="3" y="12.5" width="8.5" height="8.5" fill="currentColor" opacity="0.7"/>
        <rect x="12.5" y="12.5" width="8.5" height="8.5" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: "Grammarly",
    color: "#15C39A",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 10h4.5a2.5 2.5 0 010 5H9V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Google Slides",
    color: "#FBBC04",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 9h8M8 12h5M8 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Zapier",
    color: "#FF4A00",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Bardeen",
    color: "#6D28D9",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 12h8M14 9l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "FireFlies",
    color: "#F59E0B",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M12 2c0 6-5 8-5 13a5 5 0 0010 0c0-5-5-7-5-13z" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 8c0 3-2.5 4.5-2.5 7a2.5 2.5 0 005 0C14.5 12.5 12 11 12 8z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Laxis",
    color: "#3B82F6",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 8l5 8 5-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Synthesia",
    color: "#2563EB",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "HeyGen",
    color: "#7C3AED",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect x="3" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M17 9l4-2v10l-4-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Durable",
    color: "#059669",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M12 3L3 8v8l9 5 9-5V8L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M3 8l9 5 9-5M12 13v8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "10Web",
    color: "#0284C7",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M3 9h18M9 9v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 14l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Iconfinder",
    color: "#1DA462",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="3" fill="currentColor" opacity="0.35"/>
      </svg>
    ),
  },
  {
    name: "Icons8",
    color: "#FF4081",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M4 8a4 4 0 014-4h8a4 4 0 010 8H8a4 4 0 010 8h8a4 4 0 004-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Manus AI",
    color: "#334155",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M12 3l1.5 4.5H18l-3.75 2.75 1.5 4.5L12 12l-3.75 2.75 1.5-4.5L6 7.5h4.5L12 3z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 17l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Stitch (Google)",
    color: "#4285F4",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M21.805 10.023H12v3.955h5.618c-.242 1.322-1.01 2.443-2.14 3.193l3.457 2.682C20.776 17.69 22 15.025 22 12c0-.68-.07-1.34-.195-1.977z" fill="#4285F4"/>
        <path d="M12 22c2.7 0 4.97-.895 6.626-2.43l-3.457-2.682c-.904.607-2.06.966-3.169.966-2.436 0-4.502-1.645-5.24-3.856L3.225 16.6C4.89 19.64 8.195 22 12 22z" fill="#34A853"/>
        <path d="M6.76 13.998A5.9 5.9 0 016.4 12c0-.694.12-1.37.34-2L3.225 7.4A9.967 9.967 0 002 12c0 1.61.386 3.13 1.065 4.48L6.76 13.998z" fill="#FBBC05"/>
        <path d="M12 6.145c1.373 0 2.607.472 3.578 1.4l2.685-2.686C16.565 3.24 14.43 2.29 12 2.29 8.195 2.29 4.89 4.65 3.225 7.69L6.76 10.29C7.498 8.08 9.564 6.145 12 6.145z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: "Leonardi AI",
    color: "#BE185D",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" opacity="0.2"/>
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    color: "#10A37F",
    logo: (
      <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M37.532 16.87a9.963 9.963 0 00-.856-8.184 10.078 10.078 0 00-10.855-4.835 9.964 9.964 0 00-7.505-3.348 10.079 10.079 0 00-9.612 6.977 9.967 9.967 0 00-6.664 4.834 10.08 10.08 0 001.24 11.817 9.965 9.965 0 00.856 8.185 10.079 10.079 0 0010.855 4.835 9.965 9.965 0 007.504 3.347 10.078 10.078 0 009.617-6.981 9.967 9.967 0 006.663-4.834 10.079 10.079 0 00-1.243-11.813zM22.498 37.886a7.474 7.474 0 01-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 00.655-1.134V19.054l3.366 1.944a.12.12 0 01.066.092v9.299a7.505 7.505 0 01-7.49 7.496z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Gemini",
    color: "#4285F4",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "GitHub Copilot",
    color: "#24292F",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Figma AI",
    color: "#A259FF",
    logo: (
      <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M19 28.5A9.5 9.5 0 1128.5 19 9.5 9.5 0 0119 28.5z" fill="#1ABCFE"/>
        <path d="M0 47.5A9.5 9.5 0 019.5 38H19v9.5A9.5 9.5 0 010 47.5z" fill="#0ACF83"/>
        <path d="M19 0v19h9.5a9.5 9.5 0 000-19z" fill="#FF7262"/>
        <path d="M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z" fill="#F24E1E"/>
        <path d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    name: "Notion AI",
    color: "#191919",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M4 4h10l6 6v10H4V4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M14 4v6h6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M8 11h8M8 14h6M8 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Midjourney",
    color: "#000000",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M2 18L7.5 6.5 11 13l2.5-3.5L17 18H2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <circle cx="19" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M17 18h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "DALL·E",
    color: "#10A37F",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
        <path d="M3 16l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// Duplicate for seamless loop
const ITEMS = [...AI_TOOLS, ...AI_TOOLS];

const style = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .ai-marquee-section {
    width: 100%;
    overflow: hidden;
    background: transparent;
    padding: 20px 0;
    position: relative;
  }

  .ai-marquee-section::before,
  .ai-marquee-section::after {
    content: '';
    position: absolute;
    top: 0;
    width: 120px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  .ai-marquee-section::before {
    left: 0;
    background: linear-gradient(to right, #e8f0f7ad, transparent);
  }

  .ai-marquee-section::after {
    right: 0;
    background: linear-gradient(to left, #e8f0f776, transparent);
  }

  .ai-marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 55s linear infinite;
  }

  .ai-marquee-section:hover .ai-marquee-track {
    animation-play-state: paused;
  }

  .ai-logo-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 12px;
    background: rgba(255,255,255,0.7);
    border: 1px solid rgba(255,255,255,0.9);
    backdrop-filter: blur(8px);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    cursor: default;
    white-space: nowrap;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }

  .ai-logo-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    background: rgba(255,255,255,0.95);
  }

  .ai-logo-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .ai-logo-name {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    letter-spacing: 0.01em;
  }

  .ai-marquee-label {
    text-align: center;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 14px;
  }
`;

export default function AIMarquee() {
  return (
    <>
      <style>{style}</style>
      <section className="ai-marquee-section">
        <p className="ai-marquee-label">AI Tools I Know & Use</p>
        <div className="ai-marquee-track">
          {ITEMS.map((tool, i) => (
            <div className="ai-logo-card" key={i}>
              <div
                className="ai-logo-icon"
                style={{
                  background: `${tool.color}18`,
                  color: tool.color,
                }}
              >
                {tool.logo}
              </div>
              <span className="ai-logo-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}