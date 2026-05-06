export function LinkedInLink() {
  return (
    <a
      href="https://www.linkedin.com/in/kanginpark/"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="LinkedIn profile (opens in new tab)"
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full text-[color:var(--muted)] transition-[color,background-color,transform] duration-200 ease-out hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--foreground)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
    >
      <span aria-hidden className="block">
        <LinkedInIcon />
      </span>
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
