import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Thought = {
  slug: string;
  title: string;
  description?: string;
  date: string;
};

const THOUGHTS_DIR = path.join(process.cwd(), "content", "thoughts");

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
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(THOUGHTS_DIR, file), "utf8");
      const { data } = matter(raw);
      const draft = data.draft === true;
      if (draft && !INCLUDE_DRAFTS) return null;
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: String(data.title ?? file),
        description: data.description ? String(data.description) : undefined,
        date: String(data.date ?? ""),
      };
    }),
  );

  const visible = thoughts.filter((t) => t !== null) as Thought[];
  return visible.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getThought(slug: string): Promise<Thought | null> {
  const all = await listThoughts();
  return all.find((t) => t.slug === slug) ?? null;
}
