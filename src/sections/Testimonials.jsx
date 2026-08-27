import { useEffect, useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import {
  getPublishedTestimonials,
  isConfigured,
  submitTestimonial,
} from "../lib/testimonials";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submittedRating, setSubmittedRating] = useState(0);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getPublishedTestimonials()
      .then((items) => {
        if (active) setTestimonials(items);
      })
      .catch(() => {
        if (active) setTestimonials([]);
      });

    return () => {
      active = false;
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitted(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await submitTestimonial({
        name: formData.get("name").trim(),
        email: formData.get("email").trim(),
        company: formData.get("company").trim(),
        rating,
        message: formData.get("message").trim(),
      });

      if (rating === 5) {
        const items = await getPublishedTestimonials();
        setTestimonials(items);
      }

      setSubmittedRating(rating);
      form.reset();
      setRating(0);
      setSubmitted(true);
    } catch (err) {
      console.error("Testimonial error:", err);
      setError(
        isConfigured
          ? "We couldn't submit your testimonial. Please try again."
          : "Testimonials are not connected yet. Please try again later.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="testimonials section-pad" id="testimonials">
      <div className="testimonials-heading">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="Tell us about your experience."
          copy="Your honest feedback helps us keep building better digital experiences."
        />
      </div>

      <div className="testimonials-grid">
        <div className="testimonial-list" aria-live="polite">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.id}>
                <div
                  className="testimonial-stars"
                  aria-label="5 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={15} fill="currentColor" />
                  ))}
                </div>

                <p>“{testimonial.message}”</p>

                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  {testimonial.company && <span>{testimonial.company}</span>}
                </div>
              </article>
            ))
          ) : (
            <div className="testimonial-empty">
              <span>No published testimonials yet.</span>
              <p>
                Real client feedback will appear here after it is submitted.
              </p>
            </div>
          )}
        </div>

        <form className="testimonial-form" onSubmit={submit}>
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
            Company / Role
            <input name="company" placeholder="Optional" />
          </label>

          <fieldset>
            <legend>Rating</legend>
            <div className="testimonial-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star}>
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    checked={rating === star}
                    onChange={() => setRating(star)}
                    required
                  />
                  <span aria-hidden="true">
                    <Star
                      size={20}
                      fill={rating >= star ? "currentColor" : "none"}
                    />
                  </span>
                  <span className="sr-only">
                    {star} star{star > 1 ? "s" : ""}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="full">
            Your feedback
            <textarea
              required
              name="message"
              rows="6"
              placeholder="Tell us about your experience..."
            />
          </label>

          <button
            className="btn btn-dark full"
            type="submit"
            disabled={sending || rating === 0}
          >
            {sending
              ? "Submitting..."
              : submitted
                ? "Testimonial submitted ✓"
                : error
                  ? "Try again"
                  : "Submit testimonial"}
            <ArrowUpRight size={17} />
          </button>

          {submitted && (
            <p className="testimonial-status">
              Thank you for your feedback.{" "}
              {submittedRating === 5
                ? "Your 5-star testimonial is now visible above."
                : "Your feedback has been submitted and will not be displayed publicly."}
            </p>
          )}

          {error && <p className="testimonial-error">{error}</p>}
        </form>
      </div>
    </section>
  );
}
