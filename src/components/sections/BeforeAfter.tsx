"use client";

import { useId, useState } from "react";

/** Accessible before/after comparison driven by a native range input. */
export function BeforeAfter({ label }: { label: string }) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <div className="relative overflow-hidden rounded-media select-none" style={{ aspectRatio: "4 / 5" }}>
      {/* Nachher (base) */}
      <div className="absolute inset-0 placeholder-surface" role="img" aria-label={`${label} – Nachher (Image Placeholder)`} />
      {/* Vorher (clipped overlay) */}
      <div
        className="absolute inset-0 placeholder-surface--deep"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        role="img"
        aria-label={`${label} – Vorher (Image Placeholder)`}
      />

      <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-[0.6875rem] uppercase tracking-[0.18em] text-espresso backdrop-blur">
        Vorher
      </span>
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-white/80 px-3 py-1 text-[0.6875rem] uppercase tracking-[0.18em] text-espresso backdrop-blur">
        Nachher
      </span>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0 w-px bg-white" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-espresso shadow-soft">
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </span>
      </div>

      <label htmlFor={id} className="sr-only">
        Vorher/Nachher-Vergleich verschieben
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
