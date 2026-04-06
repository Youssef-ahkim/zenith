// app/robots.js
// Generates /robots.txt via the Next.js App Router Metadata API.

const BASE_URL = "https://zenith-ruby-eight.vercel.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",   // Next.js internal chunks
          "/api/",     // API routes (add if you ever create them)
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
