import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5, ease: 'easeInOut' }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'var(--bg)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 24,
      }}
    >
      <motion.div
        initial={{ scale: .8, opacity: 0 }}
        animate={{ scale: 1,  opacity: 1 }}
        transition={{ duration: .4 }}
        className="grad-text-2"
        style={{ fontFamily:'Syne,sans-serif', fontSize:56, fontWeight:800 }}
      >
        SS.
      </motion.div>

      <div style={{ width:200, height:2, borderRadius:2, background:'rgba(255,255,255,.08)', overflow:'hidden' }}>
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: [.4,0,.2,1] }}
          style={{ height:'100%', background:'linear-gradient(90deg,#6366F1,#38BDF8,#22D3EE)', borderRadius:2 }}
        />
      </div>

      <motion.p
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.3 }}
        style={{ fontSize:12, color:'var(--muted)', letterSpacing:'3px', textTransform:'uppercase' }}
      >
        Initializing Portfolio
      </motion.p>
    </motion.div>
  );
}
