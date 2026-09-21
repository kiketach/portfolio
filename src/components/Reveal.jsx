import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-moss">
      <span aria-hidden="true">◆</span>
      {children}
    </p>
  );
}

export function SectionTitle({ line1, line2 }) {
  return (
    <h2 className="display text-[clamp(2.6rem,6vw,4.6rem)] text-ink">
      {line1}
      <br />
      <em className="font-light italic text-moss">{line2}</em>
    </h2>
  );
}
