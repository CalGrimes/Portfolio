'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare, BsFillInfoCircleFill } from "react-icons/bs"
import projects from "@/data/projects.json";
import TagNoLink from "@/components/TagNoLink";
import SlideUp from "./SlideUp"

const ProjectLinks = ({project}: any) => {
  return (
    <div className="flex flex-row align-bottom space-x-4">
      <div className="marquee-item">
        <span className="marquee-item-tooltip">Source Code</span>
        <Link href={project.github} target="_blank">
          <BsGithub
            size={30}
            className="hover:-translate-y-1 transition-transform cursor-pointer"
          />
        </Link>
      </div>
      <div className="marquee-item">
        <span className="marquee-item-tooltip">{project.linkTooltip}</span>
        <Link href={project.link} target="_blank">
          <BsArrowUpRightSquare
            size={30}
            className="hover:-translate-y-1 transition-transform cursor-pointer"
          />
        </Link>
      </div>
    </div>
  )
}

const Note = ({project}: any) => {
  return (
    <div id="note" className="mt-2">
      {"note" in project && (
          
          <div className="rounded-md bg-blue-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <BsFillInfoCircleFill className="h-5 w-5 text-blue-400" aria-hidden="true" />
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <p className="text-sm text-blue-700">{project.note}</p>
              <p className="mt-3 text-sm md:ml-6 md:mt-0">
                <a href={project.noteLink} className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                  Visit
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="flex flex-col gap-16">
        {projects.map((project: any, idx: number) => (
          <SlideUp key={idx} offset="-200px 0px -200px 0px">
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">
              <div className="flex-shrink-0 md:w-72 relative" style={{ height: '200px' }}>
                <Link href={project.link} className="block relative w-full h-full group" target="_blank">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="rounded-xl shadow-xl dark:shadow-none hover:scale-105 transition-transform duration-300 object-cover"
                  />
                  {project.linkTooltip === "Live Site" && (
                    <div className="absolute top-2 right-2 z-10 bg-white/90 dark:bg-stone-800/90 rounded-lg px-3 py-1 shadow-sm border border-stone-200 dark:border-stone-700"> 
                      <span className="text-xs font-bold dark:text-white flex items-center">
                        <span className="pulse-dot mr-2"></span>Live
                      </span>
                    </div>
                  )}
                </Link>
              </div>
              <div className="mt-6 md:mt-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-3xl font-bold">{project.name}</h3>
                  <ProjectLinks project={project} />
                </div>
                <p className="text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech && Array.isArray(project.tech) && project.tech.map((tech: string, idx2: number) => (
                    <TagNoLink key={idx2} tag={tech} />
                  ))}
                </div>
                <Note project={project} />
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
