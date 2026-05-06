import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/theme-toggle";
import { LinkedInLink } from "@/components/linkedin-link";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kangin",
  description: "Data and ML engineering — projects, writing, work.",
};

// Runs before paint to resolve theme (stored override → system preference) and set data-theme on <html>.
// Always writing the attribute lets CSS drive the toggle icon from frame one without a flash.
const themeInit = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="font-sans antialiased">
        <div className="fixed right-6 top-6 z-10 flex items-center gap-1">
          <LinkedInLink />
          <ThemeToggle />
        </div>
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32">{children}</div>
      </body>
    </html>
  );
}
