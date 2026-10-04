import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Live IST Clock ────────────────────────────────────────────────────────────
function useLiveClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit', minute: '2-digit', hour12: false,
      }).format(new Date());
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// Add a leading slash "/" so the router knows to go to the home page first!
const NAV = [
  { num: '01', label: 'ABOUT',     href: '/#about'    },
  { num: '02', label: 'WORK',      href: '/#projects' },
  { num: '03', label: 'EXPERTISE', href: '/#skills'   },
  { num: '04', label: 'CONTACT',   href: '/#contact'  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}
function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

// ─── Nav Content ──────────────────────────────────────────────────────────────
function NavContent({ darkMode, toggleDarkMode, onMobileToggle, mobileOpen, time, scrolled }) {
  return (
    <div className="px-6 md:px-10 h-14 flex items-center justify-between">

      {/* ── Left: Identity + Status ───────────────────────────────────────── */}
      <div className="flex items-center gap-5">
        <a
          href="/#hero" // <-- Added slash here so clicking logo goes to home
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight
                     text-neutral-900 dark:text-neutral-100
                     hover:text-orange-600 dark:hover:text-white
                     transition-colors duration-200"
        >
          <span className="text-orange-600 dark:text-orange-500">/</span>
          <span>M. RIYAN</span>
        </a>

        {!scrolled && (
          <div className="hidden sm:flex items-center gap-2 pl-4
                          border-l border-neutral-300 dark:border-[#222222]
                          font-mono text-xs text-neutral-500 dark:text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-500 shrink-0" />
            <span>CET TRIVANDRUM</span>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            {time && <span>{time} IST</span>}
          </div>
        )}
      </div>

      {/* ── Right: Nav + Toggles ──────────────────────────────────────────── */}
      <div className="flex items-center gap-5 md:gap-7">
        <nav className="hidden md:flex items-center gap-6 lg:gap-7
                        font-mono text-xs uppercase tracking-widest">
          {NAV.map(({ num, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-1
                         text-neutral-600 dark:text-neutral-400
                         hover:text-neutral-900 dark:hover:text-neutral-100
                         transition-colors duration-200"
            >
              <span className="text-neutral-400 dark:text-neutral-600">{num}</span>
              {label}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className="flex items-center justify-center w-7 h-7
                     text-neutral-500 dark:text-neutral-400
                     hover:text-neutral-900 dark:hover:text-neutral-100
                     hover:bg-neutral-200 dark:hover:bg-[#1f1f1f]
                     border border-transparent hover:border-neutral-300 dark:hover:border-[#262626]
                     rounded transition-all duration-200"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={darkMode ? 'sun' : 'moon'}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{    rotate:  30, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </motion.span>
          </AnimatePresence>
        </button>

        <button
          onClick={onMobileToggle}
          aria-label="Toggle navigation"
          className="md:hidden flex items-center justify-center w-7 h-7
                     text-neutral-500 dark:text-neutral-400
                     hover:text-neutral-900 dark:hover:text-neutral-100
                     transition-colors duration-200"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{    rotate:  90, opacity: 0 }}
              transition={{ duration: 0.14 }}
              className="flex"
            >
              {mobileOpen ? <XIcon /> : <MenuIcon />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}

// ─── StatusBar ────────────────────────────────────────────────────────────────
export default function StatusBar({ darkMode, toggleDarkMode }) {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const time = useLiveClock();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile    = () => setMobileOpen(false);
  const toggleMobile   = () => setMobileOpen(p => !p);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <motion.div
          animate={scrolled ? { paddingTop: 12, paddingLeft: 16, paddingRight: 16 }
                            : { paddingTop: 0,  paddingLeft: 0,  paddingRight: 0  }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={scrolled
              ? {
                  borderRadius: '16px',
                  boxShadow:    darkMode
                    ? '0 8px 32px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.04) inset'
                    : '0 8px 32px rgba(0,0,0,0.12)',
                }
              : {
                  borderRadius: '0px',
                  boxShadow:    'none',
                }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={[
              'max-w-editorial mx-auto overflow-hidden',
              scrolled
                ? 'border border-neutral-200 dark:border-[#2a2a2a] bg-[#f0f0ee]/95 dark:bg-[#111111]/95 backdrop-blur-2xl'
                : 'border-b border-neutral-300 dark:border-[#222222] bg-[#f5f5f4]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md',
            ].join(' ')}
          >
            <NavContent
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              onMobileToggle={toggleMobile}
              mobileOpen={mobileOpen}
              time={time}
              scrolled={scrolled}
            />
          </motion.div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 z-40 md:hidden"
            style={{ top: scrolled ? 84 : 56 }}
          >
            <div className={[
              'max-w-editorial mx-auto',
              scrolled ? 'mx-4 rounded-xl border border-neutral-200 dark:border-[#2a2a2a] overflow-hidden' : '',
            ].join(' ')}>
              <nav className="bg-[#f5f5f4]/98 dark:bg-[#0d0d0d]/98 backdrop-blur-xl
                              border-b border-neutral-200 dark:border-[#1a1a1a]
                              px-6 py-2 flex flex-col font-mono text-xs uppercase tracking-widest">
                {NAV.map(({ num, label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={closeMobile}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.18 }}
                    className="flex items-center gap-3 px-2 py-3.5
                               text-neutral-600 dark:text-neutral-400
                               hover:text-neutral-900 dark:hover:text-neutral-100
                               border-b border-neutral-200 dark:border-[#1f1f1f] last:border-0
                               transition-colors duration-150"
                  >
                    <span className="text-orange-600 dark:text-orange-500">{num}</span>
                    {label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}