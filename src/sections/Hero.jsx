import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const greetings = [
  "مرحباً",
  "Hello",
  "शुभेच्छा",
  "Hola",
  "Hey",
  "నమస్కారం",
  "Olá",
];

export default function Hero() {
  const [greeting, setGreeting] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGreeting((g) => (g + 1) % greetings.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero section-pad" id="home">
      <div className="hero-copy">
        <div className="eyebrow-row">
          <span className="eyebrow">HELLO, WE'RE TSOFTDEVELPER.</span>

          <span className="greeting" key={greetings[greeting]}>
            {greetings[greeting]}
          </span>
        </div>
        <div className="hero-subline">
          <span>
            WE BUILD. WE <em>MAINTAIN</em>. WE GROW.
          </span>
        </div>
        <br />
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Websites built for your <em>business</em>. Managed for the long run.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          We design, develop, deploy and maintain modern websites that help
          businesses build a strong online presence and keep it running
          smoothly.
        </motion.p>

        <div className="hero-actions">
          <a className="btn btn-dark" href="#work">
            Explore our work
            <ArrowDownRight size={16} />
          </a>

          <a className="btn btn-outline" href="#contact">
            Start a project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <motion.div
        className="hero-art"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        <Link to="/projects/aura" className="hero-featured-project">
          {/* <div className="hero-featured-label">
            <span>FEATURED PROJECT</span>
            <span> </span>
            <span>01 — 08</span>
          </div> */}

          <div className="hero-featured-image">
            <img
              src="/assets/images/projects/aura1.png"
              alt="AURA luxury real estate website"
            />
          </div>

          <div className="hero-featured-caption">
            <div className="hero-featured-main">
              <span className="hero-project-name">AURA</span>
              <span className="hero-project-type">
                Luxury spaces <i>·</i> Digital experience
              </span>
            </div>

            <span className="hero-project-arrow">↗</span>
          </div>
        </Link>

        <div className="organic-leaf leaf-a">✦</div>
        <div className="organic-leaf leaf-b">◌</div>
      </motion.div>
    </section>
  );
}
