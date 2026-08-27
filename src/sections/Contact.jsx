import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, AtSign } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const BrandMark = ({ label, size = 17 }) => (
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
      letterSpacing: "-0.04em",
    }}
  >
    {label}
  </span>
);

const InstagramMark = ({ size = 17 }) => <BrandMark label="IG" size={size} />;

const FacebookMark = ({ size = 17 }) => <BrandMark label="f" size={size} />;

const GithubMark = ({ size = 17 }) => <BrandMark label="GH" size={size} />;

const LinkedinMark = ({ size = 17 }) => <BrandMark label="in" size={size} />;

const socials = [
  [
    "Instagram",
    "@t.softdevelper",
    "https://instagram.com/t.softdevelper",
    InstagramMark,
  ],
  [
    "Facebook",
    "@T.Softdevelper",
    "https://facebook.com/T.Softdevelper",
    FacebookMark,
  ],
  ["Threads", "@t.softdevelper", "https://threads.net/@t.softdevelper", AtSign],
  ["GitHub", "Profile", null, GithubMark],
  ["LinkedIn", "Profile", null, LinkedinMark],
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [budget, setBudget] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSubmitted(false);
    setError(false);

    try {
      const form = e.currentTarget;

      await emailjs.sendForm("service_mb511ar", "template_6j1dupo", form, {
        publicKey: "stJ6OscbeRlJVNTTA",
      });

      setSubmitted(true);
      form.reset();
      setBudget("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-top">
        <SectionHeading
          eyebrow="START A CONVERSATION"
          title="Have an idea worth building?"
          copy="Let's turn it into something people remember."
        />

        <div className="contact-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=t.softdevelper@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            t.softdevelper@gmail.com
            <ArrowUpRight size={17} />
          </a>

          <span>Available for thoughtful web projects.</span>
        </div>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={submit}>
          <label>
            Name
            <input required name="name" placeholder="Your name" />
          </label>

          <label>
            Email
            <input
              required
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </label>

          <label>
            Phone
            <input name="phone" placeholder="Optional" />
          </label>

          <label>
            Project Type
            <select required name="type">
              <option value="">Select a project</option>

              <option>Business Website</option>
              <option>Portfolio</option>
              <option>E-Commerce</option>
              <option>Booking System</option>
              <option>Web Application</option>
              <option>Landing Page</option>
              <option>Custom Project</option>
            </select>
          </label>

          <label>
            Budget
            <select
              name="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="">Choose a range</option>

              <option>Under ₹25,000</option>
              <option>₹25,000 – ₹50,000</option>
              <option>₹50,000 – ₹1,00,000</option>
              <option>₹1,00,000+</option>
              <option>I'll describe it</option>
            </select>
          </label>

          {budget === "I'll describe it" && (
            <label>
              Budget details
              <input
                name="budgetDetails"
                placeholder="Tell us what you're comfortable investing"
              />
            </label>
          )}

          <label className="full">
            Message
            <textarea
              required
              name="message"
              rows="6"
              placeholder="Tell us a little about the idea..."
            />
          </label>

          <button
            className="btn btn-dark full"
            type="submit"
            disabled={sending}
          >
            {sending
              ? "Sending..."
              : submitted
                ? "Message sent ✓"
                : error
                  ? "Try again"
                  : "Start a project"}

            <ArrowUpRight size={17} />
          </button>
        </form>

        <aside className="contact-aside">
          <div className="contact-card">
            <span>Prefer a direct message?</span>

            <a
              className="whatsapp"
              href="https://wa.me/918655386044"
              target="_blank"
              rel="noreferrer"
              aria-label="Message us on WhatsApp"
            >
              WhatsApp
            </a>

            <small>Message us directly on WhatsApp.</small>
          </div>

          <div className="social-list">
            {socials.map(([label, value, url, Icon]) =>
              url ? (
                <a key={label} href={url} target="_blank" rel="noreferrer">
                  <Icon size={17} />

                  <span>{label}</span>

                  <small>{value}</small>

                  <ArrowUpRight size={15} />
                </a>
              ) : (
                <div className="social-disabled" key={label}>
                  <Icon size={17} />

                  <span>{label}</span>

                  <small>{value} not supplied</small>
                </div>
              ),
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
