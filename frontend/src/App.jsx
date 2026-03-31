import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useTheme }       from './hooks/useTheme';
import LoadingScreen      from './components/LoadingScreen';
import Cursor             from './components/Cursor';
import Navbar             from './components/Navbar';
import Hero               from './components/Hero';
import About              from './components/About';
import Skills             from './components/Skills';
import Projects           from './components/Projects';
import Experience         from './components/Experience';
import Certifications     from './components/Certifications';
import Contact            from './components/Contact';
import SocialFloat        from './components/SocialFloat';
import Footer             from './components/Footer';

export default function App() {
  const [loading,   setLoading]  = useState(true);
  const [progress,  setProgress] = useState(0);
  const { isDark } = useTheme(); // initialises data-theme on <html>

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <Cursor />

      <div id="scroll-progress" style={{ width: `${progress}%` }} />

      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <SocialFloat />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
