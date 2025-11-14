import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aissist - Local-First AI Assistant for Goals, Todos, and Memory",
  description: "Organize your past, manage your present, and plan your future. Aissist is a privacy-first CLI tool that stores everything in Markdown on your machine.",
  keywords: ["productivity", "CLI", "markdown", "local-first", "AI assistant", "goals", "todos"],
  authors: [{ name: "Albert Nahas" }],
  openGraph: {
    title: "Aissist - Local-First AI Assistant",
    description: "Your data, your machine. No cloud. No tracking.",
    type: "website",
    url: "https://www.aissistcli.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aissist - Local-First AI Assistant",
    description: "Organize your past, manage your present, and plan your future—all in Markdown.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
