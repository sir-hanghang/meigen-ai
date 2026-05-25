import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://meigenai.org"),
  title: {
    default: "AI Quote Generator for Branded Cards | Meigen AI",
    template: "%s",
  },
  description:
    "Use Meigen AI as an AI quote generator to create original quotes, design branded quote cards, and export social-ready visuals in minutes today.",
  keywords: [
    "meigen ai",
    "AI quote generator",
    "quote card maker",
    "social media quote design",
    "daily quote generator",
    "inspirational quote AI",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meigenai.org",
    siteName: "Meigen AI",
    title: "AI Quote Generator for Branded Cards | Meigen AI",
    description:
      "Use Meigen AI as an AI quote generator to create original quotes, design branded quote cards, and export social-ready visuals in minutes today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meigen AI — Turn Ideas into Shareable Quotes in 30 Seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Quote Generator for Branded Cards | Meigen AI",
    description:
      "Use Meigen AI as an AI quote generator to create original quotes, design branded quote cards, and export social-ready visuals in minutes today.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://meigenai.org",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
