// app/sitemap.js
// Generates /sitemap.xml via the Next.js App Router Metadata API.
// Add new static routes to `staticRoutes` and they'll be included automatically.

const BASE_URL = "https://zenith-ruby-eight.vercel.app";

/** Static product IDs — keep in sync with your product data */
const PRODUCT_IDS = [1, 2, 3, 4];

export default function sitemap() {
  const now = new Date().toISOString();

  /** Static pages */
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  /** Dynamic product pages */
  const productRoutes = PRODUCT_IDS.map((id) => ({
    url: `${BASE_URL}/products/${id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
