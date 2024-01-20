'use client'
import React from "react"

import ExperienceSection from "@/components/ExperienceSection"
import EducationSection from "@/components/EducationSection"

const Resume = () => {

    return (

    <section id="resume" className="max-w-3xl md:max-w-5xl mx-auto">

        <ExperienceSection />
        <EducationSection />

    </section>
    )

}


export default Resume