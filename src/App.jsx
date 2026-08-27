import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";

    const scrollToTarget = () => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    const frame = window.requestAnimationFrame(scrollToTarget);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}
