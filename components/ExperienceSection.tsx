'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import {useTheme} from "next-themes";
import experience from "../data/experience.json";
import { AccordionList } from "./AccordionList"

const ExperienceSection = () => {
  return (
    <section id="experience">
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="my-10 text-center font-bold text-4xl">
                Experience
                <hr className={`w-6 h-1 mx-auto my-4 border-0 rounded dark:bg-amber-400 bg-purple-800`} />
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
                    <AccordionList items={experience.description} />
                    <div className="flex flex-auto align-bottom flex-wrap mt-4">
                        {experience.tech.map(tech => (
                                <div key={idx} className="bg-gray-200 dark:bg-zinc-800 px-4 py-2 mr-2 mt-2 text-gray-500 dark:text-gray-200 rounded font-semibold">
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
