"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

/** Class set on <html> before first paint (see HEADING_GATE_SCRIPT); while present, CSS hides main h1/h2. */
export const HEADING_GATE_CLASS = "headings-gate";

/**
 * Runs in <head> during HTML parsing: hides the headings before anything is painted, so they can
 * slide in. If the animation code never starts (JS error, blocked bundle), the gate opens after 4s.
 */
export const HEADING_GATE_SCRIPT = `(function(){try{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;var d=document.documentElement;d.classList.add("${HEADING_GATE_CLASS}");setTimeout(function(){if(!window.__headingsReady)d.classList.remove("${HEADING_GATE_CLASS}")},4000)}catch(e){}})()`;

const FROM = { opacity: 0, x: -90, clipPath: "inset(-20% 100% -20% -10%)" };
const TO = { opacity: 1, x: 0, clipPath: "inset(-20% -10% -20% -10%)", duration: 1.2, ease: "power3.out" };

/** Slide-in for every h1/h2 in <main>: the h1 first, then each h2 as it scrolls into view. */
export function HeadingSlideIn() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.remove(HEADING_GATE_CLASS);
      return;
    }
    (window as Window & { __headingsReady?: boolean }).__headingsReady = true;
    // React's dev remount resets <html> attributes, so re-apply the gate (no-op in production).
    root.classList.add(HEADING_GATE_CLASS);

    const ctx = gsap.context(() => {
      const done = { clearProps: "clipPath,transform" };
      const h1s = gsap.utils.toArray<HTMLElement>("main h1");
      const h2s = gsap.utils.toArray<HTMLElement>("main h2");
      gsap.set([...h1s, ...h2s], FROM);

      gsap.to(h1s, { ...TO, ...done, delay: 0.25, stagger: 0.15 });

      // h2s already on screen at load wait for the h1 and then follow one another.
      const loadedAt = performance.now();
      let queued = 0;
      for (const h2 of h2s) {
        ScrollTrigger.create({
          trigger: h2,
          start: "top 90%",
          once: true,
          onEnter: () => {
            const onLoad = performance.now() - loadedAt < 600;
            gsap.to(h2, { ...TO, ...done, delay: onLoad ? 0.85 + queued++ * 0.2 : 0 });
          },
        });
      }
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
