'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import {useTheme} from "next-themes";
import experience from "../data/experience.json";
import { AccordionList } from "./AccordionList"
import TagNoLink from "./TagNoLink";
import ExperienceSection from "./ExperienceSection"
import EducationSection from "./EducationSection"

const Resume = () => {

    return (

    <section id="resume" className="max-w-3xl md:max-w-5xl mx-auto">

        <ExperienceSection />
        <EducationSection />

    </section>
    )

}


export default Resume