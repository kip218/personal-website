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
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: String(data.title ?? file),
        description: data.description ? String(data.description) : undefined,
        date: String(data.date ?? ""),
      };
    }),
  );

  return thoughts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getThought(slug: string): Promise<Thought | null> {
  const all = await listThoughts();
  return all.find((t) => t.slug === slug) ?? null;
}
