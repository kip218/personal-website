import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kangin",
  description: "Data and ML engineering — projects, writing, work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans antialiased">
        <div className="mx-auto max-w-2xl px-6 py-24 md:py-32">{children}</div>
      </body>
    </html>
  );
}
