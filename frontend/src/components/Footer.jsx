import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      padding: '52px 40px 40px',

      background: 'transparent',
      overflow: 'hidden',
    }}>
      {/* Top glow line */}
      <div style={{
        position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
        width: 280, height: 1,
        background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
        opacity: 0.35,
        pointerEvents: 'none',
      }} />

      {/* Background ambient glow */}
      <div style={{
        position: 'absolute', bottom: -60, left: '50%', transform: 'translateX(-50%)',
        width: 400, height: 200, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(34,211,238,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
        position: 'relative',
      }}>

        {/* Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6 }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1 }}>
            Designed & Built by{' '}
            <span className="grad-text-2" style={{ fontWeight: 700 }}>Shaly S</span>
            {' '}· {new Date().getFullYear()}
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 11, letterSpacing: '0.5px', opacity: 0.55 }}>
            Made with passion for great design and clean code ✦
          </p>
        </motion.div>
      </div>
    </footer>
  );
}