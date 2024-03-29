"use client" // this is a client component
import React from "react"
import { useState, } from "react";
import  Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Image from 'next/image'


const Navbar: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme === "system" ? systemTheme : theme);
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="relative w-full mx-auto rounded-md px-4 sm:px-20 top-0 z-50 shadow bg-stone-200 dark:bg-stone-800 dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
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
            </Link>
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

                  <Link
                    href="/"
                    className={
                      "block lg:inline-block text-neutral-900  hover:contrast-50 cursor-pointer dark:text-neutral-100"
                    }
                    onClick={() => setNavbar(!navbar)}
                  >
                    Home
                  </Link>
                <button
                  onClick={() => setTheme("light")}
                  className="bg-gray-100 p-2 rounded-xl hidden dark:block"
                >
                  <RiSunLine size={25} color="black"/>
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-gray-100 p-2 rounded-xl block dark:hidden"
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
