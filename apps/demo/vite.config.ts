import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  base: "/pill-watermark",
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {},
    }),
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
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
})
