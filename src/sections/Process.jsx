import { motion } from "framer-motion";
import { Compass, PenLine, Code2, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const steps = [
  [
    "01",
    "Discover",
    "Understand the idea, audience, and business objective.",
    Compass,
  ],
  [
    "02",
    "Design",
    "Create the visual direction, structure, and interaction system.",
    PenLine,
  ],
  [
    "03",
    "Develop",
    "Build the experience with clean, scalable technology.",
    Code2,
  ],
  ["04", "Refine", "Test, optimize, polish, and prepare for launch.", Sparkles],
];

export default function Process() {
  return (
    <section className="process section-pad" id="process">
      <SectionHeading
        eyebrow="HOW I BUILD"
        title="Ideas become clearer as they become real."
        copy="A simple process keeps the creative and technical sides moving together."
      />
      <div className="process-grid">
        {steps.map(([no, title, copy, Icon], i) => (
          <motion.article
            key={no}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="process-icon">
              <Icon size={19} />
            </div>
            <span>{no}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
