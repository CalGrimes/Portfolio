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
    <section id="about">
      <div className="py-16">
        <div className="section-header-center">
          <h2 className="font-bold text-4xl">About Me</h2>
          <span className="title-accent-center" />
        </div>

        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-5">Get to know me!</h3>
            <p className="mb-4 leading-relaxed text-stone-700 dark:text-stone-300">
              I am an{" "}
              <span className="font-semibold text-purple-800 dark:text-amber-400">intuitive</span>,{" "}
              <span className="font-semibold text-purple-800 dark:text-amber-400">self-motivated</span>,{" "}
              <span className="font-semibold text-purple-800 dark:text-amber-400">critical thinker</span>, and{" "}
              <span className="font-semibold text-purple-800 dark:text-amber-400">creative</span>{" "}
              software engineer based in Liverpool, open to relocation.
            </p>
            <p className="leading-relaxed text-stone-700 dark:text-stone-300">
              I have a wide range of hobbies including the gym, playing sports, skydiving,
              and socialising with friends. I am always seeking new experiences to challenge
              and improve my skills and expand my knowledge.
            </p>
          </div>

          <div className="mt-10 md:mt-0 md:w-1/2">
            <h3 className="text-2xl font-bold mb-5">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <TagNoLink key={idx} tag={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
