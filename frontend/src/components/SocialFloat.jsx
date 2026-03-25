const links = [
  {
    title: 'GitHub',
    href: 'https://github.com/shalysurjen',
    icon: (
      <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    ),
  },
  {
    title: 'LinkedIn',
    href: 'www.linkedin.com/in/shaly-s-528308255',
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    title: 'Email',
    href: 'mailto:shalysurjen@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function SocialFloat() {
  return (
    <div className="social-float">
      {links.map(l => (
        <a
          key={l.title}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          title={l.title}
          style={{
            width:32, height:32, borderRadius:8,
            background:'var(--glass)', border:'1px solid var(--glass-b)',
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'var(--muted)', textDecoration:'none', transition:'all .2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(56,189,248,.4)';
            e.currentTarget.style.color       = 'var(--blue)';
            e.currentTarget.style.background  = 'rgba(56,189,248,.08)';
            e.currentTarget.style.transform   = 'translateX(3px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--glass-b)';
            e.currentTarget.style.color       = 'var(--muted)';
            e.currentTarget.style.background  = 'var(--glass)';
            e.currentTarget.style.transform   = 'translateX(0)';
          }}
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
}
