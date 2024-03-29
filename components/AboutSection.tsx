'use client'
import React from "react"
import TagNoLink from "@/components/TagNoLink";

const skills = [
  "Cloud Computing",
  "Data Science",
  "Data Engineering",
  "Machine Learning",
  "Software Engineering",
  "Web Development",
  "DevOps",
];

const AboutSection = () => {

  return (
    <section id="about" className="max-w-3xl md:max-w-5xl mx-auto">
      <div className="my-6 pb-12 md:pt-16 md:pb-24">
        <h1 className="my-10 text-center font-bold text-4xl">
          About Me
          <hr className={`w-6 h-1 mx-auto my-4 border-0 rounded bg-purple-800 dark:bg-amber-400`} />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I am an{" "}
              <span className="font-bold">{"intuitive"}</span>,
              <span className="font-bold">{" self-motivated"}</span>,
              <span className="font-bold">{" critical thinker"}</span>, and
              <span className="font-bold">{" creative"}</span> software engineer
              based in Liverpool, whilst also open to relocation.
            </p>
            
            <br />
            <p>
              I have a wide range of hobbies including the gym, playing sports, skydiving, and socialising with friends.
              I am always seeking new experiences to challenge and improve my skills and expand my knowledge.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((skill, idx) => {
                return (
                  <TagNoLink key={idx} tag={skill} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
