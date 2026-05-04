export default function Home() {
  return (
    <main className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-2xl font-medium tracking-tight">Kangin</h1>
        <p className="text-base leading-relaxed text-[color:var(--muted)]">
          {/* TODO: real bio. Two or three sentences, first-person, specific. */}
          Placeholder bio. Working on data and ML; this site is where I keep my
          projects and writing.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-medium uppercase tracking-wider text-[color:var(--muted)]">
          Projects
        </h2>
        <p className="text-sm text-[color:var(--muted)]">Coming soon.</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-medium uppercase tracking-wider text-[color:var(--muted)]">
          Writing
        </h2>
        <p className="text-sm text-[color:var(--muted)]">Coming soon.</p>
      </section>
    </main>
  );
}
