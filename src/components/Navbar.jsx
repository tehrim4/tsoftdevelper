import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Services", "#services"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const jump = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <Link className="brand" to="/" aria-label="TSoftDevelper home">
          <img src="/assets/tsoftdevelper-logo.jpeg" alt="TSoftDevelper logo" />
          <span>TSoftDevelper</span>
        </Link>
        <nav className="desktop-nav">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Let's work together <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.77, 0, 0.18, 1] }}
          >
            {links.map(([label, href], i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => jump(href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <span>0{i + 1}</span>
                {label}
              </motion.a>
            ))}
            <a
              className="mobile-menu-cta"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Start a project <ArrowUpRight />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
