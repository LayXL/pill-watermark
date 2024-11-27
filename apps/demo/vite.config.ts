import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Pill Watermark",
        short_name: "PW",
        description: "Pill Watermark App",
        theme_color: "#ffffff",
        display: "standalone",
        start_url: "/",
      },
    }),
  ],
})
