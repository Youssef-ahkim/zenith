import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import SiteEffects from "../components/SiteEffects";
import { CartProvider } from "../components/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://zenith-ruby-eight.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  /* ── Core ── */
  title: {
    default: "Zenith — Premium Laptops for Creators & Gamers",
    template: "%s | Zenith",
  },
  description:
    "Discover Zenith's lineup of high-performance laptops — engineered for creators, gamers, and professionals who demand the best.",
  keywords: [
    "Zenith laptops",
    "gaming laptops",
    "creator laptops",
    "high-performance laptops",
    "professional laptops",
    "buy laptops online",
  ],
  authors: [{ name: "Zenith" }],
  creator: "Zenith",
  publisher: "Zenith",

  /* ── Google Search Console verification ── */
  verification: {
    google: "bWnqsNP-V0CMi7FzbYsPmEhBGrGtM9myyXUvGqQUrso",
  },

  /* ── Canonical ── */
  alternates: {
    canonical: "/",
  },

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Zenith",
    title: "Zenith — Premium Laptops for Creators & Gamers",
    description:
      "Discover Zenith's lineup of high-performance laptops — engineered for creators, gamers, and professionals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zenith Premium Laptops",
      },
    ],
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    title: "Zenith — Premium Laptops for Creators & Gamers",
    description:
      "High-performance laptops engineered for creators, gamers and professionals.",
    images: ["/og-image.png"],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1920px] mx-auto min-h-screen flex flex-col`}
      >
        {/* Background */}
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        {/* Glowing scroll progress bar */}
        <div id="scroll-progress" aria-hidden="true" />

        <CartProvider>
          <Nav />

          {/* Global JS: scroll-reveal + progress bar + tilt */}
          <SiteEffects />

          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}