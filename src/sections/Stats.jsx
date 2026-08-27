import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    ["01", "Selected projects", "A growing collection of real builds"],
    ["02", "Digital experiences", "From business sites to applications"],
    ["03", "Industries explored", "Travel, finance, beauty, fitness and more"],
    ["∞", "Ideas built", "Always learning, refining and shipping"],
  ];
  return (
    <section className="stats-wrap">
      <div className="stats-grid">
        {stats.map(([n, title, copy], i) => (
          <motion.div
            className="stat"
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <span className="stat-no">{n}</span>
            <div>
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
