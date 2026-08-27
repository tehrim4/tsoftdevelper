import { motion } from "framer-motion";

export default function Statement() {
  return (
    <section className="statement">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="quote-mark">“</span>
        <strong>
          Build. Launch. Maintain. <em>Improve.</em>
        </strong>
        <p>
          Good websites don't just explain what a business does.{" "}
          <em>They make people want to stay.</em>
        </p>
        <strong>Websites that keep working as your business grows.</strong>
        <br />
        <strong>
          <em>That's what I build.</em>{" "}
        </strong>
      </motion.div>
    </section>
  );
}
