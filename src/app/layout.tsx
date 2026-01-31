import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allycia Horn — Portfolio",
  description: "Software engineer building clear, reliable systems with real-world impact",
  openGraph: {
    title: "Allycia Horn — Portfolio",
    description: "Software engineer building clear, reliable systems with real-world impact",
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
    description: "Software engineer building clear, reliable systems with real-world impact",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

