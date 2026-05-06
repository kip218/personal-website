export default function Home() {
  return (
    <main className="space-y-16">
      <section>
        <h1 className="text-base font-medium tracking-tight">Kang In Park</h1>
        <p className="text-base text-[color:var(--muted)]">Data Engineer</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-medium tracking-tight">Today</h2>
        <ul className="list-none space-y-1 pl-0 text-base leading-relaxed text-[color:var(--muted)]">
          <li>I build data pipelines at Optimove. I also enjoy building internal tools for my team.</li>
          <li>Recently I've been obsessed with context engineering and clean UI/UX.</li>
          <li>I'm still learning 😊</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-medium tracking-tight">Me</h2>
        <ul className="list-none space-y-1 pl-0 text-base leading-relaxed text-[color:var(--muted)]">
          <li>I like trying new tech and optimizing my setup.</li>
          <li>I like learning from others and sharing my knowledge.</li>
          <li>
            I like simple solutions that work over{" "}
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
    </main>
  );
}
