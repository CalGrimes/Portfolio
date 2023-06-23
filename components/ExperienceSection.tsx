'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import {useTheme} from "next-themes";
import experience from "../data/experience.json";

const ExperienceSection = () => {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <section id="experience">
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="my-10 text-center font-bold text-4xl">
                Experience
                <hr className={`w-6 h-1 mx-auto my-4 border-0 rounded ${
                    currentTheme === "dark" ? "bg-amber-400" : "bg-purple-800"
                }`} />
            </h1>

      <div className="flex flex-col space-y-28">
        {experience.map((experience, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:my-auto md:pb-10">
                    <Link href={experience.link}>
                      <Image
                        src={experience.image}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-xl shadow-xl hover:opacity-70 experience"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{experience.name}</h1>
                    <p className="text-xl leading-7 md:mb-16 sm:mb-4 text-neutral-600 dark:text-neutral-400 experience md:pr-2">
                      {experience.description}
                    </p>
                    <div className="flex flex-auto align-bottom flex-wrap">
                        {experience.tech.map(tech => (
                                <div key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                                    {tech}
                                </div>
                        ))}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
        </div>
    </section>
  )
}

export default ExperienceSection
