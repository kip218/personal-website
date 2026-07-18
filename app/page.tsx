import Link from "next/link";
import { listThoughts } from "@/lib/thoughts";

export default async function Home() {
  const thoughts = await listThoughts();

  return (
    <main className="space-y-24">
      <section>
        <h1 className="text-base font-medium tracking-tight">
          <Link href="/">Kang In Park</Link>
        </h1>
        <p className="text-base text-[color:var(--muted)]">Data Engineer</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-medium tracking-tight">Today</h2>
        <ul className="list-none space-y-1 pl-0 text-base leading-relaxed text-[color:var(--muted)]">
          <li>I build data pipelines at Optimove. I also enjoy building internal tools for my team.</li>
          <li>Recently I've been playing around with context engineering and clean UI/UX.</li>
          <li>I'm really enjoying Claude right now and excited about the future of LLMs and agentic workflows.</li>
          <li>I'm still learning 😊</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-medium tracking-tight">Me</h2>
        <ul className="list-none space-y-1 pl-0 text-base leading-relaxed text-[color:var(--muted)]">
          <li>I like trying new tech and optimizing my setup.</li>
          <li>I like learning from others and sharing my knowledge.</li>
          <li>
            I like simple solutions that work over the {" "}
            <a
              href="https://grugbrain.dev/#grug-on-complexity"
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-[color:var(--muted)] underline-offset-4 transition-colors duration-150 hover:text-[color:var(--foreground)] hover:decoration-[color:var(--foreground)]"
            >
              complexity demon spirit
            </a>
            .
          </li>
        </ul>
        <ul className="list-none space-y-1 pl-0 text-base leading-relaxed text-[color:var(--muted)]">
          <li>I don't like using buzzwords without understanding them.</li>
          <li>I don't like sacrificing quality for speed.</li>
          <li>But I also don't like nitpicking on things that don't really matter.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-medium tracking-tight">Thoughts</h2>
        {thoughts.length === 0 ? (
          <p className="text-base text-[color:var(--muted)]">
            Nothing here yet. Soon.
          </p>
        ) : (
          <ul className="-mx-3 list-none space-y-1 pl-0">
            {thoughts.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/thoughts/${t.slug}/`}
                  className="block rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-[color:var(--surface-hover)]"
                >
                  <span className="block text-base text-[color:var(--foreground)]">
                    {t.title}
                  </span>
                  {t.description ? (
                    <span className="mt-1 block text-base text-[color:var(--muted)]">
                      {t.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
