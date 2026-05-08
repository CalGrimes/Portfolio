"use client"
import React, { useState, useEffect } from "react"
import { Link as ScrollLink } from "react-scroll/modules"
import Link from "next/link"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Image from "next/image"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home",    page: "home" },
  { label: "Resume",  page: "section-headers" },
  { label: "About",   page: "about" },
  { label: "Contact", page: "contact" },
]

const Navbar: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark")

  return (
    <header className="w-full fixed top-0 z-50 shadow-sm bg-stone-200 dark:bg-stone-800">
      <div className="navbar-inner">

        {/* Logo — left */}
        <ScrollLink to="home" smooth duration={500} className="cursor-pointer flex-shrink-0 inline-flex">
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
        </ScrollLink>

        {/* Nav items — center */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item, idx) => (
            <ScrollLink
              key={idx}
              to={item.page}
              smooth
              spy
              offset={-100}
              duration={500}
              className="text-stone-700 dark:text-stone-200 hover:text-purple-800 dark:hover:text-amber-400 font-medium cursor-pointer transition-colors text-sm"
            >
              {item.label}
            </ScrollLink>
          ))}
          <Link
            href="/blog"
            className="text-stone-700 dark:text-stone-200 hover:text-purple-800 dark:hover:text-amber-400 font-medium transition-colors text-sm"
          >
            Blog
          </Link>
        </nav>

        {/* Theme toggle + mobile hamburger — right */}
        <div className="navbar-right gap-2">
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
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 text-stone-700 dark:text-stone-200 rounded-lg md:hidden"
          >
            {open ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-stone-200 dark:bg-stone-800 border-t border-stone-300 dark:border-stone-700 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item, idx) => (
            <ScrollLink
              key={idx}
              to={item.page}
              smooth
              spy
              offset={-100}
              duration={500}
              className="text-stone-700 dark:text-stone-200 hover:text-purple-800 dark:hover:text-amber-400 font-medium cursor-pointer transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </ScrollLink>
          ))}
          <Link
            href="/blog"
            className="text-stone-700 dark:text-stone-200 hover:text-purple-800 dark:hover:text-amber-400 font-medium transition-colors"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
