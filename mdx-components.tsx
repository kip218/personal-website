import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Figure } from "@/components/figure";

const linkClass =
  "font-medium underline decoration-[1.5px] underline-offset-[3px]";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }) => (
      <h1
        className="mb-5 mt-12 font-[550] tracking-tight first:mt-0 md:mt-[56px]"
        style={{ scrollMarginTop: 32 }}
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="mb-5 mt-12 font-[550] tracking-tight md:mt-[56px]"
        style={{ scrollMarginTop: 32 }}
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="mb-4 mt-10 font-[550] tracking-tight"
        style={{ scrollMarginTop: 32 }}
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="mb-[26px] opacity-[0.9]" {...props}>
        {children}
      </p>
    ),
    a: ({ href = "#", children, ...props }) => {
      const isInternal = href.startsWith("/") || href.startsWith("#");
      if (isInternal) {
        return (
          <Link href={href} className={linkClass} {...props}>
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={linkClass}
          {...props}
        >
          {children}
        </a>
      );
    },
    ul: ({ children, ...props }) => (
      <ul
        className="-mt-4 mb-[26px] list-disc space-y-2 pl-6 opacity-[0.9] marker:text-[color:var(--muted)]"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="-mt-4 mb-[26px] list-decimal space-y-2 pl-6 opacity-[0.9] marker:text-[color:var(--muted)]"
        {...props}
      >
        {children}
      </ol>
    ),
    em: ({ children, ...props }) => (
      <em className="text-[0.98em] font-normal italic" {...props}>
        {children}
      </em>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="mb-[26px] border-l-2 border-[color:var(--accent)] pl-5 italic opacity-[0.9]"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ children, ...props }) => (
      <code
        className="rounded bg-[color:var(--surface-hover)] px-1.5 py-0.5 font-mono text-[0.9em]"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="mb-[26px] overflow-x-auto rounded-md bg-[color:var(--surface-hover)] p-4 font-mono text-sm leading-relaxed"
        {...props}
      >
        {children}
      </pre>
    ),
    hr: (props) => (
      <hr
        className="my-10 border-0 border-t border-[color:var(--surface-hover)]"
        {...props}
      />
    ),
    table: ({ children, ...props }) => (
      <div className="mb-[26px] overflow-x-auto">
        <table className="w-full border-collapse text-sm" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead
        className="border-b border-[color:var(--muted)]/40 text-left"
        {...props}
      >
        {children}
      </thead>
    ),
    th: ({ children, ...props }) => (
      <th className="px-3 py-2 font-medium" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border-t border-[color:var(--surface-hover)] px-3 py-2 align-top opacity-[0.9]"
        {...props}
      >
        {children}
      </td>
    ),
    img: ({ src = "", alt = "", ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="my-8 block w-full rounded-md border border-[color:var(--surface-hover)]"
        {...props}
      />
    ),
    Figure,
  };
}
