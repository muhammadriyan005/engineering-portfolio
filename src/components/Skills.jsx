import { motion } from 'framer-motion';

// ─── Data ─────────────────────────────────────────────────────────────────────
// Matches the "Swiss Architectural Matrix" exactly from the design
const SKILL_GROUPS = [
  {
    id:    'hardware',
    index: 'GROUP // 01',
    title: 'Electronics & Hardware',
    skills: [
      { name: 'PCB Design (KiCad)',     context: 'MULTI-LAYER'      },
      { name: 'Embedded (8051)',  context: 'ASSEMBLY '     },
      { name: 'VHDL / Verilog',         context: 'FPGA SYNTHESIS'   },
      { name: 'Proteus Simulation',     context: 'CIRCUIT MODELING' },
      { name: 'Digital Logic & ICs',    context: 'TTL / CMOS'       },
    ],
  },
  {
    id:    'web',
    index: 'GROUP // 02',
    title: 'Web & Distributed APIs',
    skills: [
      { name: 'JavaScript (ES6+)',    context: 'CLIENT / RUNTIME'  },
      { name: 'React.js',             context: 'SPA ARCHITECTURE'  },
      { name: 'Node.js & Express',    context: 'RESTFUL SERVICES'  },
      { name: 'HTML5 / Tailwind CSS', context: 'DESIGN SYSTEMS'    },
      { name: 'MongoDB',              context: 'DOCUMENT STORE'    },
    ],
  },
  {
    id:    'core',
    index: 'GROUP // 03',
    title: 'Core Languages & Tools',
    skills: [
      { name: 'C++',        context: 'SYSTEMS CODE'      },
      { name: 'Git & Versioning', context: 'CI / COLLAB'     },
      { name: 'Postman',        context: 'ENDPOINT AUDITING' },
    ],
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const colVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Skill Column ─────────────────────────────────────────────────────────────
function SkillColumn({ group, isLast }) {
  return (
    <motion.div
      variants={colVariants}
      className={[
        'p-8 space-y-6',
        // Right border on non-last columns (design splits with hairline)
        !isLast ? 'border-b md:border-b-0 md:border-r border-neutral-300 dark:border-[#222222]' : '',
      ].join(' ')}
    >
      {/* ── Column Header ────────────────────────────────────────────────── */}
      <div className="border-b border-neutral-200 dark:border-[#222222] pb-4">
        <span className="font-mono text-sm text-orange-600 dark:text-orange-500 font-medium">
          {group.index}
        </span>
        <h3 className="text-lg font-bold uppercase tracking-tight mt-1
                       text-neutral-900 dark:text-neutral-100">
          {group.title}
        </h3>
      </div>

      {/* ── Skill Rows ───────────────────────────────────────────────────── */}
      <ul className="space-y-4 font-mono text-sm">
        {group.skills.map(({ name, context }) => (
          <li key={name} className="flex items-baseline justify-between gap-4">
            {/* Skill name — left */}
            <span className="text-neutral-800 dark:text-neutral-200 font-medium shrink-0">
              {name}
            </span>
            {/* Context annotation — right, muted */}
            <span className="text-neutral-500 dark:text-neutral-400 text-right">
              {context}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Skills Component ─────────────────────────────────────────────────────────
/**
 * Skills — "03 // TECHNICAL STACK" section.
 *
 * Renders the three-column Swiss architectural matrix from the design.
 * Each column: GROUP index label, uppercase title, skill rows with
 * space-between name/context annotation pairs.
 */
export default function Skills() {
  return (
    <section id="skills" className="space-y-10 border-t border-neutral-300 dark:border-[#222222] pt-16">

      {/* ── Section Header ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <div className="font-mono text-sm text-orange-600 dark:text-orange-500
                          uppercase tracking-widest font-medium">
            03 // TECHNICAL STACK
          </div>
          <h2 className="text-3xl font-bold tracking-tight uppercase mt-1
                         text-neutral-900 dark:text-neutral-100">
            Core Competencies
          </h2>
        </div>
        <div className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
          PROVEN FLUENCY • AUDITED TOOLCHAINS
        </div>
      </motion.div>

      {/* ── 3-Column Matrix ────────────────────────────────────────────── */}
      {/* Outer border wraps all three columns as a single bordered block */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-3
                   border border-neutral-300 dark:border-[#222222]
                   bg-white/70 dark:bg-transparent
                   shadow-sm dark:shadow-none"
      >
        {SKILL_GROUPS.map((group, i) => (
          <SkillColumn
            key={group.id}
            group={group}
            isLast={i === SKILL_GROUPS.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
