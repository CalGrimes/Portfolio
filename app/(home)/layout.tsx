"use client"
import "@/styles/globals.css"
import Navbar from "@/components/NavbarHome"
import Footer from "@/components/Footer"
import { Providers } from "../providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="dark:bg-stone-900 bg-stone-100">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
