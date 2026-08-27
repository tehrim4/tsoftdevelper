import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <motion.span
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.06 }}
      >
        {title}
      </motion.h2>
      {copy && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          {copy}
        </motion.p>
      )}
    </div>
  );
}
