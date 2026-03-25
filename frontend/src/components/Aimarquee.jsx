import React from "react";

const AI_TOOLS = [
  {
    name: "ChatGPT",
    color: "#10A37F",
    logo: (
      <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M37.532 16.87a9.963 9.963 0 00-.856-8.184 10.078 10.078 0 00-10.855-4.835 9.964 9.964 0 00-7.505-3.348 10.079 10.079 0 00-9.612 6.977 9.967 9.967 0 00-6.664 4.834 10.08 10.08 0 001.24 11.817 9.965 9.965 0 00.856 8.185 10.079 10.079 0 0010.855 4.835 9.965 9.965 0 007.504 3.347 10.078 10.078 0 009.617-6.981 9.967 9.967 0 006.663-4.834 10.079 10.079 0 00-1.243-11.813zM22.498 37.886a7.474 7.474 0 01-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 00.655-1.134V19.054l3.366 1.944a.12.12 0 01.066.092v9.299a7.505 7.505 0 01-7.49 7.496zM6.392 31.006a7.471 7.471 0 01-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 001.308 0l9.724-5.614v3.888a.12.12 0 01-.048.103l-8.051 4.649a7.504 7.504 0 01-10.24-2.744zM4.297 13.62A7.469 7.469 0 018.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 00.654 1.132l9.723 5.614-3.366 1.944a.12.12 0 01-.114.012L7.044 23.86a7.504 7.504 0 01-2.747-10.24zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 01.114-.012l8.048 4.648a7.498 7.498 0 01-1.158 13.528v-9.476a1.293 1.293 0 00-.647-1.13zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 00-1.308 0l-9.723 5.614v-3.888a.12.12 0 01.048-.103l8.05-4.645a7.497 7.497 0 0111.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 01-.065-.092v-9.299a7.497 7.497 0 0112.293-5.756 6.94 6.94 0 00-.236.134l-7.965 4.6a1.294 1.294 0 00-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.497v4.996l-4.331 2.5-4.331-2.5V18z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Claude",
    color: "#D97706",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.239.048-4.272 2.408-.163.21.163.21.28.222.54-.093zM14.188 5.235l-2.069 5.806.222.222h.128l.27-.08 2.458-5.925-.048-.27-.222-.163-.27.048-.469.362zM4.386 17.521l-.116.28.28.386.386.093.51-.14 4.72-2.753.128-.28-.116-.222h-.128l-.28.048-5.384 2.588zM12.585 4.827l-2.753 7.418.163.28h.28l.222-.08 2.856-7.31-.093-.28-.28-.116-.395.088zM3.972 19.135l-.094.386.386.397.397.047.432-.14 4.057-2.753.094-.28-.14-.222H9l-.28.047-4.748 2.518zM10.934 4.024l-3.447 9.405.28.386h.163l.28-.094 3.38-9.252-.047-.28-.28-.163-.33-.002zM3.675 20.723l.024.397.374.34.397-.024 4.57-2.987.047-.28-.14-.222-.28.024-4.992 2.752zM9.527 3.407L5.674 13.72l.222.386h.222l.222-.093 3.898-10.038-.093-.28-.28-.163-.338.075zM3.663 22.287l.374.34.374-.024 5.29-3.24.047-.28-.14-.222h-.28l-5.665 3.009v.417zM8.376 3.05L4.11 14.425l.28.386.28-.024.163-.093 4.3-10.99-.093-.28-.28-.163-.384-.21zM3.85 23.802h.397l5.665-3.447v-.397l-.14-.14h-.14l-5.758 3.424-.024.56zM7.225 2.835L2.527 15.273l.28.386.28-.024.116-.047 4.934-12.2-.14-.28-.28-.117-.492-.156zM5.946 2.855l-4.85 13.05.28.387.28-.024.117-.047 4.734-11.923-.14-.28-.28-.117-.14-.046z" fill="currentColor"/>
        <path d="M19.068 8.058l-4.72 2.647-.08.23.08.128h.229l.239-.048 4.272-2.408.163-.21-.163-.21-.28-.222-.74.093zM9.57 18.778l2.069-5.806-.222-.222h-.128l-.27.08-2.458 5.925.048.27.222.163.27-.048.469-.362zM19.39 6.492l.116-.28-.28-.386-.386-.093-.51.14-4.72 2.753-.128.28.116.222h.128l.28-.048 5.384-2.588zM11.172 19.186l2.753-7.418-.163-.28h-.28l-.222.08-2.856 7.31.093.28.28.116.395-.088zM19.804 4.878l.094-.386-.386-.397-.397-.047-.432.14-4.057 2.753-.094.28.14.222h.11l.28-.047 4.748-2.518zM12.822 19.989l3.447-9.405-.28-.386h-.163l-.28.094-3.38 9.252.047.28.28.163.33.002zM20.1 3.29l-.024-.397-.374-.34-.397.024-4.57 2.987-.047.28.14.222.28-.024 4.992-2.752zM14.23 20.606l3.853-10.314-.222-.386h-.222l-.222.093-3.898 10.038.093.28.28.163.338-.074zM20.113 1.726l-.374-.34-.374.024-5.29 3.24-.047.28.14.222h.28l5.665-3.01v-.416zM15.38 20.963l4.267-11.375-.28-.386-.28.024-.163.093-4.3 10.99.093.28.28.163.383.21zM19.927.21h-.397l-5.665 3.447v.397l.14.14h.14l5.758-3.424.024-.56zM16.53 21.178l4.698-12.438-.28-.386-.28.024-.116.047-4.934 12.2.14.28.28.117.492.156zM17.81 21.158l4.85-13.05-.28-.387-.28.024-.117.047-4.734 11.923.14.28.28.117.14.046z" fill="currentColor"/>
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
    name: "Copilot",
    color: "#0078D4",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M18.25 2a3.25 3.25 0 013.245 3.066L21.5 5.25V12a8.5 8.5 0 01-7.993 8.496L13.339 20.5H10.5A8.5 8.5 0 012 12V5.25a3.25 3.25 0 013.066-3.245L5.25 2h13zm0 1.5H5.75a1.75 1.75 0 00-1.744 1.607L4 5.25V12a7 7 0 006.735 6.996L10.9 19h2.5a7 7 0 006.995-6.735L20.5 12V5.25a1.75 1.75 0 00-1.607-1.744L18.25 3.5zM12 7a5 5 0 110 10A5 5 0 0112 7zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Perplexity",
    color: "#20B2AA",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M22 12l-5-5v3.5H7V7l-5 5 5 5v-3.5h10V17l5-5z" fill="currentColor"/>
        <path d="M12 2v5.5M12 22v-5.5M7 12H2M22 12h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Midjourney",
    color: "#000000",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M2 18L7.5 6.5 11 13l2.5-3.5L17 18H2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <circle cx="19" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M17 18h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Hugging Face",
    color: "#FF9D00",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2.5 7.5a1 1 0 110 2 1 1 0 010-2zm5 0a1 1 0 110 2 1 1 0 010-2zm-5.864 4.5h6.728a.5.5 0 01.416.777C14.768 16.5 13.452 17.5 12 17.5c-1.452 0-2.768-1-3.78-2.723a.5.5 0 01.416-.777z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Stable Diffusion",
    color: "#7C3AED",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "LangChain",
    color: "#1C3553",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M3 8l4-4 4 4-4 4-4-4zM13 8l4-4 4 4-4 4-4-4zM8 13l4-4 4 4-4 4-4-4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
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
    animation: marquee 28s linear infinite;
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