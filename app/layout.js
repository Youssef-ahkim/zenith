import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import SiteEffects from "../components/SiteEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zenith",
  description: "High-performance laptops engineered for creators, gamers and professionals.",
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

        <Nav />

        {/* Global JS: scroll-reveal + progress bar + tilt */}
        <SiteEffects />

        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}