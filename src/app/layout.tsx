import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Hashim — Full Stack Developer",
  description:
    "Full stack developer from Faisalabad, Pakistan, available for remote roles. I build web apps with React, Next.js, Node.js, FastAPI and PostgreSQL, and add AI features with the OpenAI API.",
  openGraph: {
    title: "Muhammad Hashim — Full Stack Developer",
    description:
      "Full stack developer building web apps and AI features with React, Next.js, Node.js, FastAPI and the OpenAI API.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-full bg-night font-sans text-mute antialiased">
        {children}
      </body>
    </html>
  );
}