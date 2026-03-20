import { motion } from 'framer-motion';

const fadeUp = (delay=0) => ({
  initial:   { opacity:0, y:28 },
  animate:   { opacity:1, y:0  },
  transition:{ duration:.7, delay, ease:[.4,0,.2,1] },
});

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });

  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const r = document.createElement('span');
    r.className = 'ripple-el';
    r.style.left = `${e.clientX - rect.left - 4}px`;
    r.style.top  = `${e.clientY - rect.top  - 4}px`;
    btn.appendChild(r);
    setTimeout(() => r.remove(), 520);
  };

  return (
    <section
      id="home"
      style={{
        minHeight:'100vh', display:'flex', alignItems:'center',
        justifyContent:'center', padding:'100px 40px 60px',
        textAlign:'center', position:'relative', zIndex:1,
      }}
    >
      <div style={{ maxWidth:820 }}>
        {/* Badge */}
        <motion.div {...fadeUp(0)} style={{ display:'inline-flex', alignItems:'center', gap:8,
          padding:'6px 18px', borderRadius:100,
          border:'1px solid rgba(56,189,248,.3)',
          background:'rgba(56,189,248,.06)',
          fontSize:13, color:'var(--blue)', marginBottom:28,
        }}>
          <span style={{
            width:7, height:7, borderRadius:'50%', background:'var(--cyan)',
            animation:'pulse 2s ease-in-out infinite',
          }} />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(.1)}
          className="grad-text"
          style={{
            fontFamily:'Syne,sans-serif',
            fontSize:'clamp(52px,9vw,96px)',
            fontWeight:800, lineHeight:1.04, letterSpacing:'-3px',
            marginBottom:16,
          }}
        >
          Shaly S
        </motion.h1>

        {/* Title */}
        <motion.p {...fadeUp(.2)} style={{ fontSize:18, color:'var(--muted)', marginBottom:24, fontWeight:300 }}>
          Full Stack Developer &amp; UI/UX Designer
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(.3)}
          style={{ fontSize:16, color:'#94A3B8', lineHeight:1.8, maxWidth:560, margin:'0 auto 44px' }}
        >
          Innovative engineering student passionate about building clean, scalable, and user-focused digital
          products. Turning ideas into beautiful, functional interfaces.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(.4)} style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
          <button
            className="btn-primary"
            onClick={(e) => { handleRipple(e); scrollTo('projects'); }}
          >
            <span>View My Work ↓</span>
          </button>
          <button
            className="btn-outline"
            onClick={() => scrollTo('contact')}
          >
            Let's Connect
          </button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
          style={{ position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)' }}
        >
          <div style={{ animation:'bounce 2s ease-in-out infinite' }}>
            <svg width="24" height="24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(9px)} }
      `}</style>
    </section>
  );
}
