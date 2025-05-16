import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abhijith T | Portfolio",
    short_name: "Zoxilsi",
    description: "Personal portfolio of Abhijith T (zoxilsi) - MCA student and developer",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    screenshots: [
      {
        src: "/splash/apple-splash-1125x2436.png",
        sizes: "1125x2436",
        type: "image/png",
        form_factor: "narrow",
        label: "Abhijith T Portfolio",
      },
      {
        src: "/splash/apple-splash-1536x2048.png",
        sizes: "1536x2048",
        type: "image/png",
        form_factor: "wide",
        label: "Abhijith T Portfolio",
      },
    ],
  }
}
