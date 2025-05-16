import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Abhijith T | Portfolio",
  description: "Personal portfolio of Abhijith T (zoxilsi) - MCA student and developer",
  applicationName: "Abhijith T Portfolio",
  appleWebApp: {
    capable: true,
    title: "Abhijith T | Portfolio",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#7c3aed",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zoxilsi.vercel.app",
    title: "Abhijith T | Portfolio",
    description: "Personal portfolio of Abhijith T (zoxilsi) - MCA student and developer",
    siteName: "Abhijith T Portfolio",
    images: [
      {
        url: "https://zoxilsi.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Abhijith T - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijith T | Portfolio",
    description: "Personal portfolio of Abhijith T (zoxilsi) - MCA student and developer",
    creator: "@zoxilsi",
    images: ["https://zoxilsi.vercel.app/opengraph-image"],
  },
}
