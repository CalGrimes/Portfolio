'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import experience from "@/data/experience.json";
import { AccordionList } from "@/components/AccordionList"
import TagNoLink from "@/components/TagNoLink";

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-3xl md:max-w-5xl mx-auto">
        <div className="justify-around">
            <h1 className="my-10 text-left font-bold text-4xl">
                Experience
                <hr className="border-2 border-purple-800 dark:border-amber-400 mt-4 w-10 rounded-full" />
            </h1>
            

      <div className="flex flex-col space-y-28">
        {experience.map((experience, idx) => {
          return (
            <div key={idx}>
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:my-auto md:pb-10">
                    <Link href={experience.link}>
                      <Image
                        src={experience.image}
                        alt=""
                        width={500}
                        height={500}
                        className={`${experience.background? `bg-${experience.background} ` : ""}` + `rounded-xl shadow-xl dark:shadow-none hover:scale-105 ease-in duration-75 experience px-4`}
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{experience.name}</h1>
                    {experience.description.length > 0 && <AccordionList items={experience.description} />}
                    <div className="flex flex-auto align-bottom flex-wrap mt-4">
                        {experience.tech.map((tech,idx2) => (
                                <TagNoLink key={idx2} tag={tech} />
                        ))}
                    </div>
                  </div>
                </div>
            </div>
          )
        })}
        
      </div>
        </div>
    </section>
  )
}

export default ExperienceSection
