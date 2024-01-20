"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import Certifications from "@/components/Certifications"
import SkillsSection from "./SkillsSection"

const HeroSection: React.FC = () => {

return (
    <section id="home" className="max-w-full">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 pt-16 sm:pt-16 sm:pb-10 lg:pt-16 lg:pb-6 lg:flex-row lg:space-x-4 lg:text-left gap-12 lg:gap-24">
        <div className="lg:mt-2">
        <Image
          src={"/headshot.png"}
          alt=""
          width={325}
          height={100}
          className="rounded-full shadow-2xl headshot object-cover max-h-80 lg:max-h-full object-top"
        />
        </div>
        <div className="lg:mt-2 lg:w-3/5">
          <h1 className="text-4xl font-bold mt-6 lg:mt-0 lg:text-7xl cursor-default">Hi, I&#39;m Cal!</h1>
          <p className="text-lg mt-4 mb-6 lg:text-2xl cursor-default">
            I&#39;m a{" "}
            <span className={`"font-semibold dark:text-amber-400 text-purple-800`}>
                Software Engineer{" "}
            </span>
            working on personalised solutions for the modern world.
          </p>
          <Link
              to="section-headers"
              className={`font-semibold px-6 py-3 rounded shadow cursor-pointer dark:bg-amber-400  dark:text-black bg-purple-800 text-white 0 hover:scale-105 ease-in duration-75 hover:border-1 border-black`}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
          >
            Explore
          </Link>
          <Certifications />
          <SkillsSection />

        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="section-headers"
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
