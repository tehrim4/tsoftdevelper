import Navbar from "../components/Navbar";
import RippleEffect from "../components/RippleEffect";
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import About from "../sections/About";
import Work from "../sections/Work";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import Process from "../sections/Process";
import Statement from "../sections/Statement";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Testimonials from "../sections/Testimonials";

export default function Home() {
  return (
    <>
      <RippleEffect />
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Work />
        <Services />
        <Skills />
        <Process />
        <Statement />
        <Testimonials />

        {/* <section className="testimonials section-pad" id="testimonials">
          <div className="testimonials-inner">
            <span className="eyebrow">TESTIMONIALS</span> */}
        {/* <h2>Real client feedback will appear here.</h2>
            <p>We will add genuine testimonials after receiving feedback from our clients.</p> */}
        {/* </div>
        </section> */}

        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
