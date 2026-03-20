export default function Footer() {
  return (
    <footer style={{
      textAlign:'center', padding:'36px 40px',
      borderTop:'1px solid var(--glass-b)',
      position:'relative', zIndex:1,
    }}>
      <p style={{ color:'var(--muted)', fontSize:13 }}>
        Designed &amp; Built by{' '}
        <span style={{ color:'var(--blue)', fontWeight:500 }}>Shaly S</span>
        {' '}· {new Date().getFullYear()}
      </p>
      <p style={{ color:'var(--muted)', fontSize:11, marginTop:6, letterSpacing:'.5px' }}>
        Made with passion for great design and clean code
      </p>
    </footer>
  );
}
