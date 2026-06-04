import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Thought = {
  slug: string;
  // Base filename without the .mdx extension (may carry a YYYY-MM-DD- prefix).
  // The slug is the URL; `file` is how we locate the source on disk.
  file: string;
  title: string;
  description?: string;
  date: string;
};

const THOUGHTS_DIR = path.join(process.cwd(), "content", "thoughts");

// Filenames may be prefixed with an ISO date (e.g. 2026-06-04-ai.mdx) so they
// sort chronologically in the content directory. The prefix is stripped to form
// the URL slug — the date lives in frontmatter and never appears in the URL.
const DATE_PREFIX = /^\d{4}-\d{2}-\d{2}-/;

// gray-matter parses an unquoted `date: 2026-06-04` into a JS Date. Normalize
// both Dates and strings to a sortable ISO `YYYY-MM-DD` so ordering is reliable.
function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "").slice(0, 10);
}

// Drafts are tracked in git but excluded from the built site. A post is a
// draft when its frontmatter has `draft: true`. The flag is also honoured
// when set via env (NEXT_PUBLIC_INCLUDE_DRAFTS=1) for local previews.
const INCLUDE_DRAFTS = process.env.NEXT_PUBLIC_INCLUDE_DRAFTS === "1";

export async function listThoughts(): Promise<Thought[]> {
  let entries: string[];
  try {
    entries = await fs.readdir(THOUGHTS_DIR);
  } catch {
    return [];
  }

  const files = entries.filter((name) => name.endsWith(".mdx"));

  const thoughts = await Promise.all(
    files.map(async (entry) => {
      const raw = await fs.readFile(path.join(THOUGHTS_DIR, entry), "utf8");
      const { data } = matter(raw);
      const draft = data.draft === true;
      if (draft && !INCLUDE_DRAFTS) return null;
      const file = entry.replace(/\.mdx$/, "");
      return {
        slug: file.replace(DATE_PREFIX, ""),
        file,
        title: String(data.title ?? entry),
        description: data.description ? String(data.description) : undefined,
        date: normalizeDate(data.date),
      };
    }),
  );

  const visible = thoughts.filter((t) => t !== null) as Thought[];
  // Newest first. ISO dates compare lexicographically, so localeCompare on the
  // normalized strings sorts chronologically.
  return visible.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getThought(slug: string): Promise<Thought | null> {
  const all = await listThoughts();
  return all.find((t) => t.slug === slug) ?? null;
}
