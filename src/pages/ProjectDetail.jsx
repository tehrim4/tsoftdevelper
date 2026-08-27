import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import ProjectPreview from "../components/ProjectPreview";

import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <CustomCursor />
        <Navbar />

        <main className="not-found">
          <h1>Project not found.</h1>

          <Link to="/">Back home</Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="project-detail">
        {/* BACK LINK */}
        <Link className="back-link" to="/#work">
          <ArrowLeft size={16} />
          Back to selected work
        </Link>

        {/* HERO */}
        <section className="detail-hero">
          <div className="detail-hero-copy">
            <span className="eyebrow">
              {project.number} / {project.category}
            </span>

            <h1>{project.name}</h1>

            <p>{project.description}</p>

            {project.url && (
              <a
                className="btn btn-dark project-live-button"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live website
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>

          {/* PROJECT VISUAL */}
          <motion.div
            className="detail-preview"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProjectPreview project={project} />
          </motion.div>
        </section>

        {/* OVERVIEW */}
        <section className="detail-content">
          <div>
            <span className="eyebrow">OVERVIEW</span>

            <h2>{project.tagline}</h2>
          </div>

          <div className="detail-text">
            <p>{project.description}</p>

            <p>
              The project is presented as a focused digital experience: clear
              information architecture, responsive interaction, visual rhythm
              and a technology layer that supports the intended user journey.
            </p>
          </div>
        </section>

        {/* PROJECT DETAILS */}
        <section className="detail-specs">
          <div>
            <span>Category</span>
            <strong>{project.category}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{project.status}</strong>
          </div>

          <div>
            <span>Technology</span>
            <strong>{project.stack.join(" · ")}</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
