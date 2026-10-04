import React from 'react';
import { motion } from 'framer-motion';

const animConfig = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export default function ProjectDetailView({ project, onBack }) {
  if (!project || project.type !== 'leaf') return null;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-16 md:pt-24 pb-32 space-y-20"
    >
      {/* ── Minimalist Back Button ───────────────────────────────────────── */}
      <motion.button
        variants={animConfig}
        onClick={onBack}
        className="group flex items-center gap-2 font-mono text-[14px] uppercase tracking-widest text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        <span className="text-orange-600 dark:text-orange-500 group-hover:-translate-x-1 transition-transform duration-200 text-[14px] ">←</span>
        <span>BACK</span>
      </motion.button>

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <motion.div variants={animConfig} className="space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-neutral-900 dark:text-neutral-100 leading-[0.9]">
          {project.title}
        </h1>

        {/* Monospace Metadata Strip */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-neutral-300 dark:border-[#222222]">
          <div className="space-y-1">
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">Date</div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-900 dark:text-neutral-100">{project.date}</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">Role</div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-900 dark:text-neutral-100">{project.role}</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">Tech Stack</div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-900 dark:text-neutral-100">{project.stack.join(' · ')}</div>
          </div>
        </div>
      </motion.div>

      {/* ── Image Gallery ────────────────────────────────────────────────── */}
      {project.images && project.images.length > 0 && (
        <motion.div variants={animConfig} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((img, idx) => (
            <div
              key={img.id || idx}
              className={`border border-neutral-300 dark:border-[#222222] bg-white dark:bg-[#111111] overflow-hidden flex justify-center items-center ${img.fullWidth ? 'md:col-span-2' : 'col-span-1'}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full opacity-90 hover:opacity-100 transition-all duration-300 ${img.fullWidth
                    ? 'max-h-[50vh] md:max-h-[500px] object-contain p-8 md:p-12' // Hero mode (centered, padded)
                    : '' // Gallery mode (side-by-side, full bleed)
                  }`}
              />
            </div>
          ))}
        </motion.div>
      )}

      {/* ── Typographic Content Block ────────────────────────────────────── */}
      {project.content && project.content.length > 0 && (
        <motion.div variants={animConfig} className="max-w-3xl mx-auto space-y-16">
          {/* 
            We dynamically reduce the flat array into grouped sections. 
            Every time it hits a 'section', it starts a new block. 
          */}
          {project.content.reduce((acc, block) => {
            if (block.type === 'section') {
              acc.push({ title: block.title, items: [] });
            } else {
              if (acc.length === 0) acc.push({ title: null, items: [] });
              acc[acc.length - 1].items.push(block);
            }
            return acc;
          }, []).map((group, groupIdx) => (
            
            // Each grouped section gets its own wrapper div
            <div key={groupIdx} className="space-y-2
            ">
              
              {/* Render the section heading if it exists */}
              {group.title && (
                <h2 className="font-mono text-[14px] uppercase tracking-widest text-orange-600 dark:text-orange-500 border-b border-neutral-300 dark:border-[#222222] pb-2">
                  {group.title}
                </h2>
              )}
              
              {/* Render the paragraphs/highlights inside the group */}
              <div className="space-y-4">
                {group.items.map((item, itemIdx) => {
                  if (item.type === 'highlight') {
                    return (
                      <div 
                        key={itemIdx} 
                        className="pl-4 border-l-2 border-orange-600 dark:border-orange-500 text-lg md:text-xl text-neutral-900 dark:text-neutral-100 font-medium tracking-tight py-2"
                      >
                        {item.text}
                      </div>
                    );
                  }
                  return (
                    <p key={itemIdx} className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.text}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
