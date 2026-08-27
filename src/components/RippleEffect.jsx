import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RippleEffect() {
  const [ripples, setRipples] = useState([]);
  useEffect(() => {
    const handler = (e) => {
      if (window.matchMedia("(min-width: 769px)").matches) return;
      const id = Date.now() + Math.random();
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(
        () => setRipples((r) => r.filter((x) => x.id !== id)),
        900,
      );
    };
    window.addEventListener("pointerdown", handler);
    return () => window.removeEventListener("pointerdown", handler);
  }, []);
  return (
    <AnimatePresence>
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="touch-ripple"
          initial={{ left: r.x, top: r.y, scale: 0, opacity: 0.35 }}
          animate={{ scale: 1, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        />
      ))}
    </AnimatePresence>
  );
}
