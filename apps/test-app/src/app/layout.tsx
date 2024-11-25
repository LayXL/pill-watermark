import type { Metadata, Viewport } from "next"
import "./globals.css"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
