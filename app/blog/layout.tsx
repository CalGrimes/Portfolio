import "@/styles/globals.css"
import Navbar from "@/components/NavbarBlog"
import Footer from "@/components/Footer"
import { Providers } from "@/app/providers"

export const metadata = {
  title: 'Cal Grimes - Blog',
  description: 'Cal Grimes\'s blog',
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
