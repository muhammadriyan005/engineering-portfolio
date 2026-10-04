import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import { PROJECTS } from '../data/ProjectDataModel';

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rowVariants = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function ProjectRow({ project, displayNumber }) {
  // Determine if it routes to a sub-project list or directly to a detail page
  const destination = project.type === 'parent' 
    ? `/collection/${project.id}` 
    : `/project/${project.id}`;

  return (
    <Link to={destination} className="block">
      <motion.div
        variants={rowVariants}
        className="group py-8 px-2 transition-colors duration-150 cursor-pointer hover:bg-white/80 dark:hover:bg-[#111111]/80"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
          <div className="lg:col-span-1 font-mono text-sm text-orange-600 dark:text-orange-500 font-medium">
            [{displayNumber}]
          </div>
          
          <div className="lg:col-span-4 space-y-1">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 dark:group-hover:text-white flex items-center gap-2 leading-snug">
              {project.name}
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 group-hover:text-orange-600 dark:group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-200 shrink-0">
                ↗
              </span>
            </h3>
            <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              {project.domain}
            </p>
            {project.badge && (
              <div className="mt-2.5">
                <StatusBadge label={project.badge} />
              </div>
            )}
          </div>

          <div className="lg:col-span-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.description}
          </div>

          <div className="lg:col-span-3 flex flex-wrap gap-1.5 font-mono text-xs lg:justify-end">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 border border-neutral-300 dark:border-[#262626] text-neutral-700 dark:text-neutral-400 bg-white dark:bg-neutral-900/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-300 dark:border-[#222222] pb-6"
      >
        <div>
          <div className="font-mono text-sm text-orange-600 dark:text-orange-500 uppercase tracking-widest font-medium">
            02 // SELECTED WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase mt-1 text-neutral-900 dark:text-neutral-100">
            Project Index
          </h2>
        </div>
        <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400 uppercase max-w-sm">
          CHRONOLOGICAL CATALOG OF SCHEMATICS, FIRMWARE, AND DEPLOYED SOFTWARE ARTIFACTS.
        </p>
      </motion.div>

      <div className="border-t border-neutral-300 dark:border-[#222222]" />

      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="divide-y divide-neutral-300 dark:divide-[#222222]"
      >
        {[...PROJECTS].reverse().map((project, index) => {
          const calculatedId = String(PROJECTS.length - index).padStart(2, '0');
          return (
            <ProjectRow 
              key={project.id} 
              project={project} 
              displayNumber={calculatedId}
            />
          );
        })}
      </motion.div>
    </section>
  );
}