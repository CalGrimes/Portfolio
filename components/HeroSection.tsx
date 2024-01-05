"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import Certifications from "@/components/Certifications"

const HeroSection: React.FC = () => {

return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 pt-16 sm:pt-16 sm:pb-10 md:pt-16 md:pb-6 md:flex-row md:space-x-4 md:text-left gap-24">
        <div className="md:mt-2 hero-image">
        <Image
          src={"/headshot.png"}
          alt=""
          width={325}
          height={100}
          className="rounded-full shadow-2xl headshot object-cover max-h-80 md:max-h-full object-top"
        />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl cursor-default">Hi, I&#39;m Cal!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl cursor-default">
            I&#39;m a{" "}
            <span className={`"font-semibold dark:text-amber-400 text-purple-800`}>
                Software Engineer{" "}
            </span>
            working on personalized solutions for the modern world.
          </p>
          <Link
              to="projects"
              className={`font-semibold px-6 py-3 rounded shadow cursor-pointer dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-black bg-purple-800 hover:bg-purple-800 text-white dark:hover:brightness-50 hover:opacity-70`}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
          >
            Projects
          </Link>
          <Certifications />

        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="experience"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
