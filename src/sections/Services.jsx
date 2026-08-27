import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/projects";

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <SectionHeading
        eyebrow="WHAT WE DO"
        title="Everything your website needs to work and grow."
        copy="From business websites to custom digital solutions, we build and support websites around your goals."
      />
      <div className="service-grid">
        {services.map(([title, copy], i) => (
          <motion.article
            key={title}
            className={`service-card service-${i % 3}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <span className="service-no">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <ArrowUpRight size={18} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
