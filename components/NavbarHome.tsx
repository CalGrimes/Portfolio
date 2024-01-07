"use client" // this is a client component
import React from "react"
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll/modules"
import  Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Image from 'next/image'

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact",
    page: "contact",
  },
]
const Navbar: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme === "system" ? systemTheme : theme);
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full mx-auto rounded-md  px-4 sm:px-20 fixed top-0 z-50 shadow bg-stone-200 dark:bg-stone-800 dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <ScrollLink to="home">
              <div className="container flex items-center space-x-2 cursor-pointer hover:contrast-200">
              <Image
                  className="h-max w-max hidden dark:block"
                  src="/logo-dark.png"
                  height={120}
                  width={120}
                  alt="logo"
                />
                <Image
                  className="h-max w-max dark:hidden block"
                  src="/logo-light.png"
                  height={120}
                  width={120}
                  alt="logo"
                />
              </div>
            </ScrollLink>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30}/> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <ScrollLink
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:contrast-50 cursor-pointer dark:text-neutral-100"
                    }
                    style={{ transitionDelay: `${idx * 0.1}s` }} // Transitions the navbar items
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </ScrollLink>
                  
                )
              })}
              <Link className="block lg:inline-block text-neutral-900  hover:contrast-50 cursor-pointer dark:text-neutral-100" href="/blog">Blog</Link>
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl hidden dark:block"
                >
                  <RiSunLine size={25} color="black"/>
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl block dark:hidden"
                >
                  <RiMoonFill size={25} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
