'use client'
import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import education from "@/data/education.json";
import TagNoLink from "@/components/TagNoLink";

const EducationSection = () => {
  return (
    <section id="education" className="max-w-3xl md:max-w-5xl mx-auto">
        <div className=" justify-around">
            <h1 className="my-10 text-left font-bold text-4xl">
                Education
            </h1>

      <div className="flex flex-col space-y-12">
        {education.map((education, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:my-auto md:pb-10">
                      <Image
                        src={education.image}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-xl shadow-xl  dark:shadow-none hover:opacity-70 education"
                      />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{education.title}</h1>
                    <h2 className="text-2xl font-semibold mb-6">Grade: {education.grade}</h2>
                    <div className="flex flex-auto align-bottom flex-wrap mt-4">
                        {education.tech.map((tech,idx2) => (
                                <TagNoLink key={idx2} tag={tech} />
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

export default EducationSection
