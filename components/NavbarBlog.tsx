"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import Image from "next/image"

const NavbarBlog: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark")

  return (
    <header className="w-full top-0 z-50 shadow-sm bg-stone-200 dark:bg-stone-800">
      <div className="navbar-inner">

        {/* Logo — left */}
        <Link href="/" className="flex-shrink-0 inline-flex">
          {mounted ? (
            <Image
              src={resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
              width={110}
              height={35}
              alt="Cal Grimes"
              className="h-9 w-auto hover:opacity-80 transition-opacity"
            />
          ) : (
            <div className="h-9 w-28" />
          )}
        </Link>

        {/* Nav — center */}
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-stone-700 dark:text-stone-200 hover:text-purple-800 dark:hover:text-amber-400 font-medium transition-colors text-sm"
          >
            Home
          </Link>
        </nav>

        {/* Theme toggle — right */}
        <div className="navbar-right">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="bg-stone-100 dark:bg-stone-700 p-2 rounded-lg hover:opacity-80 transition-opacity"
            >
              {resolvedTheme === "dark"
                ? <RiSunLine size={20} color="black" />
                : <RiMoonFill size={20} />}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default NavbarBlog
