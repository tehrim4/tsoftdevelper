const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const headers = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  "Content-Type": "application/json",
};

export async function getPublishedTestimonials() {
  if (!isConfigured) return [];

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/testimonials?select=id,name,company,rating,message,created_at&rating=eq.5&is_approved=eq.true&order=created_at.desc`,
    { headers },
  );

  if (!response.ok) {
    throw new Error("Unable to load testimonials.");
  }

  return response.json();
}

export async function submitTestimonial(testimonial) {
  if (!isConfigured) {
    throw new Error("Testimonials are not connected yet.");
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/testimonials`, {
    method: "POST",
    headers: {
      ...headers,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      ...testimonial,
      is_approved: testimonial.rating === 5,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to submit testimonial.");
  }
}

export { isConfigured };
