import { ArrowUpRight, AtSign } from "lucide-react";

const InstagramMark = ({ size = 14 }) => (
  <span
    aria-hidden="true"
    style={{
      width: size,
      height: size,
      display: "inline-grid",
      placeItems: "center",
      fontWeight: 700,
      fontFamily: "Arial, sans-serif",
      fontSize: size * 0.58,
      lineHeight: 1,
    }}
  >
    IG
  </span>
);

const FacebookMark = ({ size = 14 }) => (
  <span
    aria-hidden="true"
    style={{
      width: size,
      height: size,
      display: "inline-grid",
      placeItems: "center",
      fontWeight: 700,
      fontFamily: "Arial, sans-serif",
      fontSize: size * 0.82,
      lineHeight: 1,
    }}
  >
    f
  </span>
);
// /public/favicon.ico
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/assets/tsoftdevelper-logo.jpeg" alt="TSoftDevelper logo" />
          <div>
            <strong>TSoftDevelper</strong>
            <p>Build. Launch. Maintain. Improve.</p>
          </div>
        </div>
        <div className="footer-cols">
          <div>
            <span>Explore</span>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <span>Social</span>
            <a
              href="https://instagram.com/t.softdevelper"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramMark size={14} /> Instagram
            </a>
            <a
              href="https://facebook.com/T.Softdevelper"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookMark size={14} /> Facebook
            </a>
            <a
              href="https://threads.net/@t.softdevelper"
              target="_blank"
              rel="noreferrer"
            >
              <AtSign size={14} /> Threads
            </a>
            <span className="muted-social">
              GitHub · LinkedIn links not supplied
            </span>
          </div>
          <div>
            <span>Contact</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=t.softdevelper@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              t.softdevelper@gmail.com
            </a>
            <p>
              Founder — Eram Sayed
              <br />
              Co-Founder — Tehrim Ansari
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© TSoftDevelper</span>
        <span>Websites built for the long run.</span>
        <div>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
