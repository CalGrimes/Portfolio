'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import {useTheme} from "next-themes";
import projects from "../data/projects.json";
import { Tooltip } from '@chakra-ui/react'
import TagNoLink from "./TagNoLink";


const ProjectsSection = () => {
  return (
    <section id="projects">
    <div className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="my-10 text-center font-bold text-4xl ">
        Projects
        <hr className={`w-6 h-1 mx-auto my-4 border-0 rounded dark:bg-amber-400 bg-purple-800`} />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-3">{project.name}</h1>
                    <p className="text-xl leading-7 mb-2 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    {"note" in project && (
                      <div>
                        <h1 className="text-lg font-bold">Note</h1>
                        <p className="bg-stone-200 p-2 rounded-xl">
                          {project.note}
                          <a className="text-blue-600" href={project.noteLink}> Click here</a>
                        </p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mb-4">
                      {project.tech && Array.isArray(project.tech) && project.tech.map((tech, idx) => {
                        return (
                          <TagNoLink key={idx} tag={tech} />
                        )
                      })}
                    </div>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Tooltip label="Source Code" aria-label='Source Code Tooltip' placement="top" className="p-1 rounded bg-gray-200 dark:bg-zinc-800">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      </Tooltip>
                      <Tooltip label="Demo" aria-label='Demo Tooltip' placement="top" className="p-1 rounded bg-gray-200 dark:bg-zinc-800">
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      </Tooltip>
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

export default ProjectsSection
