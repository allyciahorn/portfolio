import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://allyciahorn.com"),
  title: "Allycia Horn — Portfolio",
  description: "Software engineer building clear, reliable systems with real-world impact.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Allycia Horn — Portfolio",
    description: "Software engineer building clear, reliable systems with real-world impact.",
    url: "https://allyciahorn.com",
    siteName: "Allycia Horn",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Allycia Horn — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allycia Horn — Portfolio",
    description: "Software engineer building clear, reliable systems with real-world impact.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
