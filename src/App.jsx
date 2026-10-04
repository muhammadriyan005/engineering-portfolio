import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';

import StatusBar from './components/StatusBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SubProjectListView from './components/SubProjectListView';
import ProjectDetailView from './components/ProjectDetailView';
import { PROJECTS } from './data/ProjectDataModel'; // Ensure this path matches your setup

// ─── Spec Panel Data ──────────────────────────────────────────────────────────
const SPECS = [
  { key: 'INSTITUTION', value: 'CET Trivandrum', accent: false },
  { key: 'DISCIPLINE', value: 'Electronics & Communication ', accent: false },
  { key: 'STACK FOCUS', value: 'KiCad / STM32 / React / Node', accent: false },
  { key: 'GEO-INDEX', value: '8.5241° N, 76.9366° E', accent: false },
  { key: 'PIPELINE', value: 'Schematics → Fabrication → Web', accent: true },
];

// ─── Hero Social / Quick Links ────────────────────────────────────────────────
const QUICK_LINKS = [
  { label: 'GitHub', href: 'https://github.com/muhammadriyan005', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-riyan-24014a358/', external: true },
  { label: 'Contact Dispatch', href: 'mailto:muhammadriyanvml@gmail.com', external: true },
  { label: 'View Work Index', href: '/#projects', external: false, arrow: '↓' },
];

// ─── About / Domain Cards ─────────────────────────────────────────────────────
const DOMAINS = [
  {
    id: 'A',
    label: 'EMBEDDED HARDWARE',
    title: 'Board-Level Integrity & Silicon Architecture',
    body: 'Schematic design, multi-layer routing, impedance matching, and manufacturing Gerber generation in KiCad. Low-overhead firmware on ARM Cortex and legacy 8-bit controllers where millivolts and microsecond cycles determine reliability.',
  },
  {
    id: 'B',
    label: 'FULL-STACK SYSTEMS',
    title: 'Decoupled Architecture & Fluid Interfaces',
    body: 'Scalable backend architectures in Node.js and Express coupled with structured frontend components in React and modern CSS. Built for low latency, predictable state flow, and clean typographic ergonomics.',
  },
];

// ─── Framer Motion Variants ───────────────────────────────────────────────────
const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Underline Link ───────────────────────────────────────────────────────────
function UnderlineLink({ href, label, arrow = '↗', external = false }) {
  const props = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
  return (
    <a
      href={href}
      {...props}
      className="group flex items-center gap-1
                 text-neutral-800 dark:text-neutral-300
                 hover:text-neutral-950 dark:hover:text-white
                 pb-0.5 border-b border-neutral-400 dark:border-neutral-700
                 hover:border-neutral-900 dark:hover:border-neutral-200
                 transition-all duration-200
                 font-mono text-sm uppercase tracking-wider"
    >
      {label}
      <span className="text-neutral-400 dark:text-neutral-500
                       group-hover:text-orange-600 dark:group-hover:text-orange-500
                       group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                       transition-transform duration-150">
        {arrow}
      </span>
    </a>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="border-b border-neutral-300 dark:border-[#222222] pb-20 md:pb-28">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap items-center justify-between gap-4
                   font-mono text-sm uppercase tracking-widest
                   text-neutral-500 dark:text-neutral-500
                   pb-8 border-b border-neutral-300 dark:border-[#1f1f1f]"
      >
        <div>HARDWARE &amp; FULL-STACK SYSTEMS</div>
        <div className="flex items-center gap-4">
          <span className="text-neutral-500 dark:text-neutral-400">STATUS:</span>
          <span className="text-neutral-900 dark:text-neutral-200 font-medium">
            OPEN TO ENGINEERING ROLES
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 space-y-8"
        >
          <motion.div variants={heroItem}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                           font-bold tracking-tight uppercase leading-[0.95]
                           text-neutral-900 dark:text-neutral-100">
              Muhammad
              <br />
              <span className="text-neutral-400 dark:text-neutral-400">Riyan</span>
            </h1>
            <p className="font-mono text-sm sm:text-base font-medium tracking-tight mt-6
                          text-orange-600 dark:text-orange-500">
              Electronics Engineer &amp; Full-Stack Developer
            </p>
          </motion.div>

          <motion.p
            variants={heroItem}
            className="text-lg md:text-xl font-light leading-relaxed max-w-2xl
                       text-neutral-700 dark:text-neutral-300"
          >
            Engineering student at the{' '}
            <span className="text-neutral-900 dark:text-neutral-100 font-normal">
              College of Engineering Trivandrum
            </span>
            . Bridging the physical and digital divide through multi-layer PCB design,
            low-level firmware engineering, and robust web applications.
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap items-center gap-6 pt-2">
            {QUICK_LINKS.map(({ label, href, external, arrow }) => (
              <UnderlineLink
                key={label}
                href={href}
                label={label}
                external={external}
                arrow={arrow}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4
                     border border-neutral-300 dark:border-[#222222]
                     bg-white/80 dark:bg-[#111111]/70
                     p-6 sm:p-7 space-y-6 shadow-sm dark:shadow-none"
        >

          <div className="space-y-4 font-mono text-sm">
            {SPECS.map(({ key, value, accent }, i) => (
              <div
                key={key}
                className={[
                  'grid grid-cols-3 gap-2',
                  i < SPECS.length - 1
                    ? 'border-b border-neutral-200 dark:border-[#1c1c1c] pb-3'
                    : '',
                ].join(' ')}
              >
                <span className="text-neutral-500 dark:text-neutral-400">{key}</span>
                <span className={[
                  'col-span-2 text-right',
                  accent
                    ? 'text-orange-600 dark:text-orange-400 font-medium'
                    : 'text-neutral-900 dark:text-neutral-200',
                ].join(' ')}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-sm leading-relaxed font-sans
                          text-neutral-600 dark:text-neutral-400
                          border-t border-neutral-200 dark:border-[#222222]">
            Engineering mindset grounded in physical laws, deterministic embedded systems,
            and clean decoupled application layers.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About Section (01) ───────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-4 space-y-3"
      >
        <div className="font-mono text-sm text-orange-600 dark:text-orange-500
                        uppercase tracking-widest font-medium">
          01 // PHILOSOPHY &amp; APPROACH
        </div>
        <h2 className="text-3xl font-bold tracking-tight uppercase
                       text-neutral-900 dark:text-neutral-100">
          Hardware Rigor.
          <br />
          Software Velocity.
        </h2>
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 pt-2">
          ARCHITECTURE PRINCIPLE: ZERO UNCHECKED ASSUMPTIONS.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8
                   border-t lg:border-t-0 border-neutral-300 dark:border-[#222222]
                   pt-8 lg:pt-0"
      >
        {DOMAINS.map(({ id, label, title, body }) => (
          <div
            key={id}
            className="border border-neutral-300 dark:border-[#222222]
                       bg-white/70 dark:bg-transparent
                       p-6 space-y-4 shadow-sm dark:shadow-none"
          >
            <div className="font-mono text-sm text-neutral-500 dark:text-neutral-400
                            uppercase tracking-wider
                            flex items-center justify-between
                            border-b border-neutral-200 dark:border-[#222222] pb-3">
              <span>DOMAIN {id}</span>
              <span className="text-neutral-900 dark:text-neutral-300 font-medium">{label}</span>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {title}
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

// ─── Contact Section (04) ─────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-300 dark:border-[#222222] pt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="border border-neutral-300 dark:border-[#222222]
                   bg-white/80 dark:bg-[#111111]/40
                   p-8 sm:p-14 space-y-10
                   shadow-sm dark:shadow-none"
      >
        <div className="max-w-2xl space-y-3">
          <div className="font-mono text-sm text-orange-600 dark:text-orange-500
                          uppercase tracking-widest font-medium">
            04 // INITIATE TRANSMISSION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase
                         text-neutral-900 dark:text-neutral-100">
            Let&apos;s Engineer Hardware or Software.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
            Available for hardware engineering inquiries, full-stack architecture roles,
            technical advisory, and research collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4
                        border-t border-neutral-200 dark:border-[#222222]">
          <div className="space-y-2">
            <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400
                             uppercase tracking-wider block">
              DIRECT DISPATCH
            </span>
            <a
              href="mailto:muhammadriyanvml@gmail.com"
              className="group inline-flex items-center gap-3
                         text-lg font-mono font-medium
                         text-neutral-900 dark:text-neutral-100
                         hover:text-orange-600 dark:hover:text-white
                         pb-1 border-b border-orange-600/50 dark:border-orange-500/50
                         hover:border-orange-600 dark:hover:border-orange-500
                         transition-colors duration-200"
            >
              <span>email</span>
              <span className="text-orange-600 dark:text-orange-500
                               group-hover:translate-x-1 group-hover:-translate-y-1
                               transition-transform duration-150">
                ↗
              </span>
            </a>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400
                             uppercase tracking-wider block">
              PROFESSIONAL NETWORK
            </span>
            <a
              href="https://www.linkedin.com/in/muhammad-riyan-24014a358/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3
                         text-lg font-mono font-medium
                         text-neutral-900 dark:text-neutral-100
                         hover:text-orange-600 dark:hover:text-white
                         pb-1 border-b border-neutral-400 dark:border-neutral-700
                         hover:border-neutral-900 dark:hover:border-neutral-300
                         transition-colors duration-200"
            >
              <span>linkedin</span>
              <span className="text-neutral-400 dark:text-neutral-500
                               group-hover:text-orange-600 dark:group-hover:text-orange-500
                               group-hover:translate-x-1 group-hover:-translate-y-1
                               transition-transform duration-150">
                ↗
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Footer (Editorial Colophon) ──────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-28 border-t border-neutral-300 dark:border-[#222222]
                       py-12 text-sm font-mono
                       text-neutral-600 dark:text-neutral-400
                       bg-[#f5f5f4] dark:bg-[#0a0a0a]">
      <div className="max-w-editorial mx-auto px-6 md:px-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:justify-around items-center sm:items-baseline
                        gap-6 pb-8 border-b border-neutral-300 dark:border-[#1c1c1c]">
          <div className="space-y-1  ">
            <div className="text-neutral-900 dark:text-neutral-300 uppercase tracking-wider font-medium">
              MUHAMMAD RIYAN • ENGINEERING PORTFOLIO
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs">
              Set in Inter &amp; JetBrains Mono. Structured on an asymmetrical 12-column Swiss editorial grid.
            </p>
          </div>
          <div className="space-y-1">
            <div className="text-neutral-400 uppercase text-xs">COORDINATES / BASE</div>
            <div className="text-neutral-800 dark:text-neutral-300">
              8.5241° N, 76.9366° E &nbsp;•&nbsp; Trivandrum, Kerala, IN
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center
                        justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div>
            &copy; {year} MUHAMMAD RIYAN. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-neutral-600 dark:text-neutral-400">VERSION 3.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating Back-to-Top Button ─────────────────────────────────────────────
function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          whileHover="hover"
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-20 rounded-3xl right-8 z-50
                     w-12 h-12
                     flex items-center justify-center
                     bg-neutral-900 dark:bg-neutral-100
                     shadow-xl shadow-black/25 dark:shadow-black/60
                     group "
        >
          <motion.span
            variants={{
              hover: { scaleY: 1 },
              rest: { scaleY: 0 },
            }}
            initial="rest"
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-orange-600 dark:bg-orange-500 origin-bottom"
          />
          <motion.span
            variants={{
              hover: { y: -3 },
              rest: { y: 0 },
            }}
            initial="rest"
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-lg
                       text-white dark:text-neutral-900
                       leading-none select-none"
          >
            ↑
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── Routing Wrappers ─────────────────────────────────────────────────────────
function CollectionRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) return <div className="pt-32 text-center text-neutral-500 font-mono uppercase">Collection not found.</div>;

  const handleSubSelect = (subProject) => {
    navigate(`/collection/${project.id}/project/${subProject.id}`);
  };

  return <SubProjectListView project={project} onBack={() => navigate('/')} onSelectSubProject={handleSubSelect} />;
}

function DetailRoute() {
  const { id, parentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  let project = null;
  let parentMeta = null;

  if (parentId) {
    parentMeta = PROJECTS.find(p => p.id === parentId);
    project = parentMeta?.subProjects?.find(s => s.id === id);
  } else {
    project = PROJECTS.find(p => p.id === id);
  }

  if (!project) return <div className="pt-32 text-center text-neutral-500 font-mono uppercase">Project not found.</div>;

  const handleBack = () => {
    if (parentId) navigate(`/collection/${parentId}`);
    else navigate('/');
  };

  return <ProjectDetailView project={project} parentMeta={parentMeta} onBack={handleBack} />;
}

// ─── App (Root) ───────────────────────────────────────────────────────────────
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync Tailwind 'dark' class on <html>
  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(p => !p);

  return (
    <BrowserRouter>
      {/* Orange 2px accent stripe */}
      <div className="fixed top-0 inset-x-0 h-0.5 z-[100] bg-orange-600 dark:bg-orange-500" />
      <BackToTopButton />

      <div className="min-h-screen flex flex-col justify-between bg-[#f5f5f4] dark:bg-[#0a0a0a] text-neutral-700 dark:text-neutral-300 transition-colors duration-300">

        <div className="mt-0.5">
          <StatusBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        <main className="max-w-editorial mx-auto w-full px-6 md:px-10 pt-16 md:pt-24 space-y-24 md:space-y-36 flex-1">
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </>
            } />

            {/* Direct Project Detail Route */}
            <Route path="/project/:id" element={<DetailRoute />} />

            {/* Parent Project / Collection Route */}
            <Route path="/collection/:id" element={<CollectionRoute />} />

            {/* Sub-Project Detail Route */}
            <Route path="/collection/:parentId/project/:id" element={<DetailRoute />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
