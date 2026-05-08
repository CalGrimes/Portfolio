'use client'
import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import education from "@/data/education.json";
import TagNoLink from "@/components/TagNoLink";

const EducationSection = () => {
  return (
    <section id="education" className="mt-16">
      <div className="section-header">
        <h2 className="font-bold text-4xl">Education</h2>
        <span className="title-accent" />
      </div>

      <div className="flex flex-col gap-12">
        {education.map((edu, idx) => (
          <SlideUp key={idx} offset="-300px 0px -300px 0px">
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">
              <div className="flex-shrink-0 md:w-72 relative" style={{ height: '160px' }}>
                <Image
                  src={edu.image}
                  alt={edu.title}
                  fill
                  className="rounded-xl shadow-xl dark:shadow-none hover:scale-105 ease-in duration-75 object-contain"
                />
              </div>
              <div className="mt-6 md:mt-0 flex-1">
                <h3 className="text-3xl font-bold mb-3">{edu.title}</h3>
                <p className="text-xl font-semibold mb-4 text-stone-600 dark:text-stone-400">Grade: {edu.grade}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.tech.map((tech, idx2) => (
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

export default EducationSection
