import localFont from "next/font/local";

/**
 * Brand fonts, self-hosted (SIL Open Font License, files in src/fonts):
 *  - Outfit: light geometric display face for headlines (200/300/400)
 *  - Manrope: variable grotesk for body copy and UI (200-800)
 * next/font/local adds preload, font-display: swap and metric-matched fallbacks (no CLS).
 */
const outfit = localFont({
  variable: "--font-outfit",
  display: "swap",
  src: [
    { path: "../fonts/outfit-latin-200-normal.woff2", weight: "200", style: "normal" },
    { path: "../fonts/outfit-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/outfit-latin-400-normal.woff2", weight: "400", style: "normal" },
  ],
});

const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [{ path: "../fonts/manrope-latin-wght-normal.woff2", weight: "200 800", style: "normal" }],
});

export const fontVariables = `${outfit.variable} ${manrope.variable}`;
