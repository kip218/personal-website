import { promises as fs } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getThought, listThoughts } from "@/lib/thoughts";

export async function generateStaticParams() {
  const thoughts = await listThoughts();
  return thoughts.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const thought = await getThought(slug);
  if (!thought) return {};
  return {
    title: `${thought.title} — Kang`,
    description: thought.description,
  };
}

async function loadPost(slug: string) {
  // Guard against path traversal — slug must be a simple filename component.
  if (!/^[a-z0-9][a-z0-9-_]*$/i.test(slug)) return null;
  // Resolve the slug to a thought. This filters drafts and gives us the source
  // filename, which may differ from the slug when prefixed with a date.
  const thought = await getThought(slug);
  if (!thought) return null;
  const file = path.join(
    process.cwd(),
    "content",
    "thoughts",
    `${thought.file}.mdx`,
  );
  try {
    await fs.access(file);
  } catch {
    return null;
  }
  const mod = await import(`@/content/thoughts/${thought.file}.mdx`);
  return mod.default as React.ComponentType;
}

export default async function ThoughtPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Post = await loadPost(slug);
  if (!Post) notFound();

  return (
    <main className="space-y-16">
      <section>
        <h1 className="text-base font-medium tracking-tight">
          <Link href="/">Kang In Park</Link>
        </h1>
        <p className="text-base text-[color:var(--muted)]">Data Engineer</p>
      </section>

      <article>
        <Post />
      </article>
    </main>
  );
}
