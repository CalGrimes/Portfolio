"use client"
import "@/styles/globals.css"
import Navbar from "@/components/NavbarBlog"
import Footer from "@/components/Footer"
import { Providers } from "../providers"

export const metadata = {
  title: "Cal's Blog",
  description: "Created by Cal",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}