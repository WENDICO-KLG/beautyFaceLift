/**
 * Brand fonts: Playfair Display (headlines) + Inter (body).
 *
 * The build environment currently has no network access, so the fonts cannot be
 * fetched by next/font/google at build time. Until then the CSS stacks in
 * globals.css fall back to Georgia / system-ui.
 *
 * To activate (pick one):
 *  A) With network:   uncomment the next/font/google block below.
 *  B) Self-hosted:    put the variable woff2 files into src/fonts/ and use next/font/local.
 * Both are self-hosted in the final build (no runtime requests to Google, no CLS).
 */

// import { Inter, Playfair_Display } from "next/font/google";
// const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], style: ["normal", "italic"], display: "swap" });
// const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
// export const fontVariables = `${playfair.variable} ${inter.variable}`;

export const fontVariables = "";
