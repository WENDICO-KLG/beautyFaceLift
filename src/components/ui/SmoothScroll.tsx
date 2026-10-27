"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Inertia scrolling for mouse wheel / trackpad (Lenis, ~3 KB).
 * Touch devices keep native scrolling. Disabled for prefers-reduced-motion.
 * The mobile menu pauses scrolling via the `bfl:menu` event (see Navbar).
 */
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, anchors: { offset: -96 } });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onMenu = (e: Event) => ((e as CustomEvent<boolean>).detail ? lenis.stop() : lenis.start());
    window.addEventListener("bfl:menu", onMenu);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("bfl:menu", onMenu);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // New page starts at the top without a smooth ride
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
