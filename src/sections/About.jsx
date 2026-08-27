import { motion } from "framer-motion";

const roles = [
  "Build — Custom websites designed around your business.",
  "Frontend development",
  "Backend development",
  "Launch — Deployment and technical setup to get you online.",
  "UI implementation",
  "Responsive web design",
  "API integration",
  "Maintain — Updates, fixes and ongoing technical support.",
  "Database applications",
  "Improve — Performance, content and experience improvements.",
  "Business websites",
];

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="about-grid">
        {/* =====================================================
            ABOUT CONTENT
        ===================================================== */}

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="eyebrow-row">
            <span className="eyebrow">About TSoftDeveloper</span>
          </div>

          <p className="lead">
            More than a website. A long-term digital partner.
          </p>

          <p>
            <strong>TSoftDevelper</strong> helps businesses build, launch and
            maintain their digital presence. From the first line of code to
            ongoing updates and improvements, we create websites designed to
            work for your business — and stay working.
          </p>

          <div className="roles">
            {roles.map((role, index) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.035,
                }}
              >
                {role}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            ABOUT VISUAL
        ===================================================== */}

        <motion.div
          className="about-art"
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* LOGO CARD */}

          <div className="about-photo-frame">
            <img
              src="/assets/tsoftdevelper-logo.jpeg"
              alt="TSoftDeveloper logo"
            />
          </div>

          {/* APPROACH CARD */}

          <motion.div
            className="about-note"
            initial={{
              opacity: 0,
              x: -18,
              rotate: -7,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: -3,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Design is the feeling technology makes possible.
          </motion.div>

          {/* TEAM */}

          <motion.div
            className="about-people"
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <div>
              <small>Founder</small>
              <strong>Eram Sayed</strong>
            </div>

            <div>
              <small>Co-Founder</small>
              <strong>Tehrim Ansari</strong>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
