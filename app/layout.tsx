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
  metadataBase: new URL("https://www.aissistcli.dev"),
  title: {
    default: "Aissist - Local-First AI Assistant for Goals, Todos, and Memory",
    template: "%s | Aissist",
  },
  description: "Organize your past, manage your present, and plan your future. Aissist is a privacy-first CLI tool that stores everything in Markdown on your machine. AI-powered semantic recall with Claude Code.",
  keywords: [
    "productivity",
    "CLI",
    "markdown",
    "local-first",
    "AI assistant",
    "goals",
    "todos",
    "privacy",
    "offline-first",
    "semantic search",
    "Claude Code",
    "personal assistant",
    "task management",
    "goal tracking",
    "history logging",
    "reflection",
    "journaling",
    "npm",
    "command line tool",
  ],
  authors: [{ name: "Albert Nahas", url: "https://github.com/albertnahas" }],
  creator: "Albert Nahas",
  publisher: "Albert Nahas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aissistcli.dev",
    title: "Aissist - Local-First AI Assistant for Goals, Todos, and Memory",
    description: "Your data, your machine. No cloud. No tracking. AI-powered productivity tool that stores everything locally in Markdown.",
    siteName: "Aissist",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aissist - Local-First AI Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aissist - Local-First AI Assistant",
    description: "Organize your past, manage your present, and plan your future—all in Markdown on your machine.",
    creator: "@albertnahas",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.aissistcli.dev",
  },
  category: "technology",
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
