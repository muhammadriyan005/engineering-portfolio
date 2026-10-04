/**
 * StatusBadge — Reusable pulsing status pill.
 *
 * Usage:
 *   import StatusBadge from './StatusBadge';
 *   <StatusBadge label="IDEATION" />
 *   <StatusBadge label="IN PROGRESS" />
 *   <StatusBadge label="ARCHIVED" />
 *
 * Props:
 *   label  {string}  — text shown inside the badge (auto-uppercased via CSS)
 */
export default function StatusBadge({ label }) {
  if (!label) return null;
  return (
    <span
      className="inline-flex items-center gap-1.5
                 px-3 py-1 rounded-full
                 border border-amber-500/30 dark:border-amber-500/30
                 bg-orange-50 dark:bg-amber-500/10
                 text-orange-700 dark:text-amber-400
                 font-mono text-xs font-semibold tracking-wider uppercase"
    >
      {/* Pulsing dot */}
      <span className="w-1.5 h-1.5 rounded-full
                       bg-orange-600 dark:bg-amber-400
                       animate-pulse shrink-0" />
      STATUS: {label}
    </span>
  );
}
