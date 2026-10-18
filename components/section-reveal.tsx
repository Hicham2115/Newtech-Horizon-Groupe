"use client";

import { useEffect } from "react";

export function SectionReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main > section:not([aria-labelledby='hero-title'])");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("section-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );

    document.documentElement.classList.add("section-reveal-ready");
    const frame = window.requestAnimationFrame(() => {
      sections.forEach((section) => observer.observe(section));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      document.documentElement.classList.remove("section-reveal-ready");
    };
  }, []);

  return null;
}
