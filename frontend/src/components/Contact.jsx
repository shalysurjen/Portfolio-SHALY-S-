import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { submitContact } from '../services/api';

const EMAILJS_SERVICE_ID  = 'service_2jsgywn';
const EMAILJS_TEMPLATE_ID = 'template_ymlpa99';
const EMAILJS_PUBLIC_KEY  = 'GfnjJg05eYx5f_gBZ';

const contactLinks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'shalysurjen@gmail.com',
    href: 'mailto:shalysurjen@gmail.com',
    color: '#38bdf8',
  },
  {
    icon: (
      <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/shalysurjen',
    href: 'https://github.com/shalysurjen',
    color: '#818cf8',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/shaly-s',
    href: 'https://linkedin.com/in/shaly-s',
    color: '#22d3ee',
  },
];

const initForm = { name: '', email: '', subject: '', message: '' };

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: .6, ease: [.4,0,.2,1] } },
};

function Spinner() {
  return (
    <motion.svg
      width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
      animate={{ rotate: 360 }}
      transition={{ duration: .8, repeat: Infinity, ease: 'linear' }}
      style={{ display: 'inline-block' }}
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </motion.svg>
  );
}

export default function Contact() {
  const [form,    setForm]    = useState(initForm);
  const [loading, setLoading] = useState(false);
  const [status,  setStatus]  = useState(null);
  const [errMsg,  setErrMsg]  = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      await submitContact({
        name:    form.name.trim(),
        email:   form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        {
          name:    form.name.trim(),
          email:   form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          time:    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm(initForm);
    } catch (err) {
      setStatus('error');
      setErrMsg(err?.text || err?.message || 'Something went wrong. Please email me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 40px' }}>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: .7 }}
        >
          <div className="section-label">Get In Touch</div>
          <h2 className="grad-text" style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 8 }}>
            Let's Build<br />Something Together
          </h2>
          <div className="divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 52, alignItems: 'start' }} className="contact-grid">

          {/* Left — contact info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p variants={item} style={{ color: 'rgba(148,163,184,0.85)', lineHeight: 1.85, marginBottom: 32, fontSize: 15 }}>
              I'm currently looking for internship and full-time opportunities.
              Whether you have a project, a question, or just want to say hello —
              my inbox is always open!
            </motion.p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {contactLinks.map((c, i) => (
                <motion.a
                  key={c.label}
                  variants={item}
                  href={c.href} target="_blank" rel="noreferrer"
                  whileHover={{ x: 6, boxShadow: `0 8px 32px ${c.color}18`, borderColor: `${c.color}50` }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '14px 18px', borderRadius: 14, textDecoration: 'none',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    color: 'var(--text)', transition: 'all .25s',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: `${c.color}12`, border: `1px solid ${c.color}28`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color,
                    }}
                  >
                    {c.icon}
                  </motion.div>
                  <div>
                    <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 2, letterSpacing: '.5px', textTransform: 'uppercase' }}>{c.label}</div>
                    <div style={{ fontSize: 14, color: 'var(--text)' }}>{c.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: .7, delay: .15 }}
            className="glass-card"
            style={{ padding: 36 }}
          >
            <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 28 }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-row">
                <div>
                  <label style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.8px', display: 'block', marginBottom: 8, textTransform: 'uppercase' }}>Your Name *</label>
                  <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" required minLength={2} maxLength={100} />
                </div>
                <div>
                  <label style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.8px', display: 'block', marginBottom: 8, textTransform: 'uppercase' }}>Email Address *</label>
                  <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" required />
                </div>
              </div>

              <div>
                <label style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.8px', display: 'block', marginBottom: 8, textTransform: 'uppercase' }}>Subject</label>
                <input className="form-input" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Collaboration / Hiring" />
              </div>

              <div>
                <label style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.8px', display: 'block', marginBottom: 8, textTransform: 'uppercase' }}>Message *</label>
                <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." required minLength={10} rows={5} />
              </div>

              {/* Status messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: .97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ padding: 14, borderRadius: 10, fontSize: 14, textAlign: 'center', background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.25)', color: 'var(--cyan)' }}
                  >
                    ✓ Message sent! I'll get back to you soon. 🚀
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: .97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ padding: 14, borderRadius: 10, fontSize: 14, textAlign: 'center', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.25)', color: '#f87171' }}
                  >
                    ⚠ {errMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary"
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                style={{ width: '100%', opacity: loading ? .8 : 1, cursor: loading ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '14px 32px' }}
              >
                {loading ? (
                  <>
                    <Spinner />
                    <span>Sending…</span>
                  </>
                ) : (
                  <span>Send Message →</span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .contact-grid{ grid-template-columns:1fr !important; } .form-row{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}