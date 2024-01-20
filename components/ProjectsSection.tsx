'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare, BsFillInfoCircleFill } from "react-icons/bs"
import projects from "@/data/projects.json";
import { Tooltip } from '@chakra-ui/react'
import TagNoLink from "@/components/TagNoLink";

const ProjectLinks = ({project}: any) => {
  return (
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


const ThreeCards = ( {projects}: any ) => {
    // Only first entry
    const project = projects[0]
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article key={project.id} className="flex flex-col items-start justify-between  rounded-xl shadow-2xl dark:bg-stone-800/70 dark:shadow-md ">
                <div className="relative w-full">
                    <a href={project.link} className="group">
                    <Image
                      src={project.image}
                      alt=""
                      className="aspect-[16/9] w-full rounded-tl-xl rounded-tr-xl  bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] group-hover:opacity-75 transition-opacity duration-50"
                      width={1000}
                      height={1000}
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </a>
                </div>

                <div className="px-2 w-full">
                <div className="relative flex flex-row justify-between w-full mt-3">
                  <div className="group">
                    <h3 className="text-lg font-bold leading-6 text-gray-900 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                      <a href={project.link}>
                        <span className="absolute inset-0" />
                        {project.name}
                      </a>
                    </h3>
                  </div>
                  <div className="relative">
                    <ProjectLinks project={project} />
                  </div>
                </div>
                <div>
                  <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400 mb-4">  {project.description}
                  </p>
                </div>

                <Note project={project} />

                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mb-4">
                    {project.tech && Array.isArray(project.tech) && project.tech.map((tech:string, idx:number) => {
                      return (
                        <TagNoLink key={idx} tag={tech} />
                      )
                    })}
                  </div>
                </div>
                </div>
        
              </article>
          </div>
        </div>
    )
  }

const ProjectsSection = () => {
  return (
    <section id="projects">
    <div className="pb-12 md:pb-48">
      <ThreeCards projects={projects}  />
    </div>
    </section>
  )
}

export default ProjectsSection
