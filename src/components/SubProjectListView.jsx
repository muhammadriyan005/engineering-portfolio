import React from 'react';
import { motion } from 'framer-motion';

const animConfig = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export default function SubProjectListView({ project, onBack, onSelectSubProject }) {
  if (!project || project.type !== 'parent') return null;

  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      className="max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-16 md:pt-24 pb-32 space-y-16"
    >
      {/* ── Minimalist Back Button ───────────────────────────────────────── */}
      <motion.button
        variants={animConfig}
        onClick={onBack}
        className="group flex items-center gap-2 font-mono text-[14px] uppercase tracking-widest text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        <span className="text-orange-600 dark:text-orange-500 group-hover:-translate-x-1 transition-transform duration-200  ">←</span>
        <span>BACK TO INDEX</span>
      </motion.button>

      {/* ── Parent Header ────────────────────────────────────────────────── */}
      <motion.div variants={animConfig} className="border-b border-neutral-300 dark:border-[#222222] pb-12 space-y-4">
        <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 flex items-center gap-2">
          <span>INDEX</span>
          <span className="text-neutral-300 dark:text-[#222222]">/</span>
          <span className="text-orange-600 dark:text-orange-500">PROJECT SERIES</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase text-neutral-900 dark:text-neutral-100 leading-none">
          {project.title}
        </h1>
        <p className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest pt-2">
          {project.domain}
        </p>
      </motion.div>

      {/* ── 12-Column Sub-Project Grid ───────────────────────────────────── */}
      <div className="border-t border-neutral-300 dark:border-[#222222]">
        {project.subProjects.map((sub, index) => (
          <motion.div
            key={sub.id}
            variants={animConfig}
            onClick={() => onSelectSubProject(sub)}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline py-8 px-4 cursor-pointer border-b border-neutral-200 dark:border-[#1c1c1c] hover:bg-white/80 dark:hover:bg-[#111111]/80 transition-colors duration-200 rounded-sm"
          >
            {/* Index */}
            <div className="lg:col-span-1 font-mono text-[11px] text-orange-600 dark:text-orange-500 font-medium tracking-widest">
              [0{index + 1}]
            </div>

            {/* Title & Domain */}
            <div className="lg:col-span-4 space-y-2">
              <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                {sub.title}
                <span className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-orange-600 dark:text-orange-500 transition-all duration-300">
                  ↗
                </span>
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                {sub.domain}
              </p>
            </div>

            {/* Description */}
            <div className="lg:col-span-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {sub.description}
            </div>

            {/* Tags */}
            <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end font-mono text-[11px]">
              {sub.tags.map(tag => (
                <span key={tag} className="px-2 py-1 border border-neutral-300 dark:border-[#222222] text-neutral-500 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
