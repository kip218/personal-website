import type { ReactNode } from "react";

type FigureProps = {
  src: string;
  alt: string;
  caption?: ReactNode;
  /** Align with surrounding prose; defaults to centered & full-width within the article. */
  className?: string;
};

export function Figure({ src, alt, caption, className }: FigureProps) {
  return (
    <figure className={`my-8 ${className ?? ""}`.trim()}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block w-full rounded-md border border-[color:var(--surface-hover)]"
      />
      {caption ? (
        <figcaption className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
