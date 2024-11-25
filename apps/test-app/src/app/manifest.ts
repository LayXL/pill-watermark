import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Test App",
    short_name: "Test App",
    description: "Test App",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
  }
}
