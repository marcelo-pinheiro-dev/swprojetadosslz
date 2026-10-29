"use client";

import { useEffect } from "react";
import { captureAttribution, track } from "@/lib/tracking";

/** Page-wide behaviors: attribution capture, scroll reveal, light parallax and scroll depth. */
export function Effects() {
  useEffect(() => {
    captureAttribution();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    let observer: IntersectionObserver | undefined;
    if (!reduceMotion && "IntersectionObserver" in window) {
      root.classList.add("reveal-ready");
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      document.querySelectorAll("[data-reveal]").forEach((el) => observer?.observe(el));
    }

    const parallax = reduceMotion ? [] : Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let sentDepth = false;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        for (const el of parallax) {
          if (y < window.innerHeight * 1.2) {
            el.style.transform = `translate3d(0, ${y * Number(el.dataset.parallax)}px, 0)`;
          }
        }
        if (!sentDepth) {
          const depth = (y + window.innerHeight) / document.documentElement.scrollHeight;
          if (depth >= 0.75) {
            sentDepth = true;
            track("scroll_75", { page: window.location.pathname });
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
