import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { technologies } from "../data/projects";

export default function Skills() {
  const [active, setActive] = useState(technologies[0]);
  return (
    <section className="skills section-pad" id="skills">
      <SectionHeading
        eyebrow="TECHNOLOGY THAT POWERS THE EXPERIENCE"
        title="Modern technology. Reliable digital experiences."
        copy="We use modern technologies to build reliable, scalable and maintainable digital experiences."
      />
      <div className="skills-layout">
        <div className="tech-cloud">
          {technologies.map((t, i) => (
            <motion.button
              key={t[0]}
              className={`tech-pill ${active[0] === t[0] ? "active" : ""}`}
              onMouseEnter={() => setActive(t)}
              onFocus={() => setActive(t)}
              onClick={() => setActive(t)}
              whileHover={{ y: -3 }}
            >
              {t[0]}
            </motion.button>
          ))}
        </div>
        <motion.aside
          className="tech-detail"
          key={active[0]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>{active[1]}</span>
          <h3>{active[0]}</h3>
          <p>{active[2]}</p>
          <div className="detail-line" />
          <small>
            {" "}
            Used to build and support TSoftDevelper digital experiences.
          </small>
        </motion.aside>
      </div>
    </section>
  );
}
