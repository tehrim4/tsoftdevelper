import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectPreview from "./ProjectPreview";

export default function ProjectList({ projects }) {
  const [active, setActive] = useState(null);

  return (
    <div className="project-list">
      {projects.map((p) => (
        <div
          key={p.slug}
          className={`project-row ${active === p.slug ? "is-active" : ""}`}
          onMouseEnter={() => setActive(p.slug)}
          onMouseLeave={() => setActive(null)}
          onClick={() => setActive(active === p.slug ? null : p.slug)}
        >
          <div className="project-index">{p.number}</div>

          <div className="project-main">
            <div className="project-category">{p.category}</div>

            <div className="project-title-line">
              <span className="project-name">{p.name}</span>

              <span className="project-view-label">
                View Project
                <ArrowUpRight size={15} />
              </span>
            </div>
          </div>

          <div className="project-meta">
            <span>{p.status}</span>

            <span>{p.stack.slice(0, 2).join(" · ")}</span>
          </div>

          <Link
            to={`/projects/${p.slug}`}
            className="project-arrow"
            aria-label={`View ${p.name}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowUpRight />
          </Link>

          <AnimatePresence>
            {active === p.slug && (
              <motion.div
                className="project-flyout"
                initial={{
                  opacity: 0,
                  y: 18,
                  scale: 0.94,
                  rotate: 1,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 12,
                  scale: 0.97,
                  rotate: -1,
                }}
                transition={{
                  duration: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectPreview project={p} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="project-mobile-hint">
            <Plus size={15} />
            preview
          </div>
        </div>
      ))}
    </div>
  );
}
