import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourportfolio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portfolio | Developer & Creator",
    template: "%s | Portfolio",
  },
  description:
    "Portfolio of projects and experience. Developer & Creator building web applications with modern tools.",
  keywords: ["portfolio", "developer", "web development", "projects", "Next.js"],
  authors: [{ name: "Your Name", url: siteUrl }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Portfolio",
    title: "Portfolio | Developer & Creator",
    description: "Portfolio of projects and experience. Developer & Creator building web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Developer & Creator",
    description: "Portfolio of projects and experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} font-sans antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
