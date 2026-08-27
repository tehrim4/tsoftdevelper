export default function WhatsAppButton() {
  const phoneNumber = "918976386044";

  const message = encodeURIComponent(
    "Hello TSoftDeveloper, I would like to discuss a website project.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TSoftDeveloper on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 3.9A10 10 0 0 0 3.7 16.2L3 21l4.9-1.3A10 10 0 1 0 20 3.9Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M8.7 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c.7 1.2 1.6 2.1 2.8 2.7l.6-.7c.2-.2.4-.3.7-.2l1.8.8c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.4-1.7-.2-3.3-1.1-4.6-2.3-1.3-1.3-2.1-2.8-2.4-4.5-.1-.5.1-1.1.4-1.4Z"
          fill="currentColor"
        />
      </svg>

      <span>WhatsApp</span>
    </a>
  );
}
