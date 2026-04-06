"use client";
import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    /* ─── Scroll Progress Bar ─── */
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (bar) bar.style.transform = `scaleX(${scrolled})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ─── Scroll-Reveal (IntersectionObserver) ─── */
    const els = document.querySelectorAll("[data-sa]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.saDelay ? Number(el.dataset.saDelay) : 0;
            setTimeout(() => el.classList.add("sa-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
