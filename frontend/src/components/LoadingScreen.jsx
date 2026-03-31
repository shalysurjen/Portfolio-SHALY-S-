import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';



export default function LoadingScreen() {
  const { isDark } = useTheme();

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.65, ease: 'easeInOut' }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: isDark ? '#07070b' : '#f8f9fb',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 28,
      }}
    >
      {/* Ambient glow behind logo */}
      <div style={{
        position: 'absolute', width: 200, height: 200, borderRadius: '50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* SS text logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          fontFamily: 'Syne, sans-serif', fontSize: 52, fontWeight: 800,
          letterSpacing: '-3px', lineHeight: 1,
          background: isDark
            ? 'linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)'
            : 'linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          position: 'relative', zIndex: 1,
          userSelect: 'none',
        }}
      >
        SS
      </motion.div>

      {/* Progress bar track */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        style={{
          width: 160, height: 2, borderRadius: 2,
          background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)',
          overflow: 'hidden',
          position: 'relative', zIndex: 1,
        }}
      >
        <motion.div
          className="load-bar"
          style={{
            height: '100%', borderRadius: 2,
            background: isDark
              ? 'linear-gradient(90deg, #1e788a, #22d3ee, #818cf8)'
              : 'linear-gradient(90deg, #0891b2, #0284c7, #7c3aed)',
            boxShadow: isDark
              ? '0 0 12px rgba(34,211,238,0.6)'
              : '0 0 10px rgba(8,145,178,0.45)',
          }}
        />
      </motion.div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 10,
          letterSpacing: '5px', textTransform: 'uppercase',
          color: isDark ? '#374151' : '#94a3b8',
          position: 'relative', zIndex: 1,
        }}
      >
        Loading portfolio…
      </motion.p>
    </motion.div>
  );
}
