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
  title: "Muhammad Hashim — Web Developer",
  description:
    "Full-stack web developer from Rawalpindi, Pakistan building things for the web with Next.js, React, Node.js and MongoDB.",
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