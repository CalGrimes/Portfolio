'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import experience from "@/data/experience.json";
import TagNoLink from "@/components/TagNoLink";

const ExperienceSection = () => {
  return (
    <section id="experience" className="mt-10">
      <div className="section-header">
        <h2 className="font-bold text-4xl">Experience</h2>
        <span className="title-accent" />
      </div>

      <div className="flex flex-col gap-16">
        {experience.map((exp, idx) => (
          <SlideUp key={idx} offset="-200px 0px -200px 0px">
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">
              <div className="flex-shrink-0 md:w-72" style={{ height: '160px' }}>
                <Link href={exp.link} className="block relative w-full h-full">
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className={`rounded-xl shadow-xl dark:shadow-none hover:scale-105 ease-in duration-75 object-contain${exp.background ? ` bg-${exp.background} px-4 py-4` : ""}`}
                  />
                </Link>
              </div>
              <div className="mt-6 md:mt-0 flex-1">
                <h3 className="text-3xl font-bold mb-4">{exp.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx2) => (
                    <TagNoLink key={idx2} tag={tech} />
                  ))}
                </div>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
