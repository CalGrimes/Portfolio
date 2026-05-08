'use client'
import React from 'react';
import Image from 'next/image';

const skills = [
  "AWS",
  "Azure",
  "Dotnet",
  "Nuxt",
  "Python",
  "Java",
  "Jupyter-notebook",
];

const SkillsSection = () => {
  const allSkills = [...skills, ...skills];

  return (
    <section id="skills" className='md:max-w-4xl mt-12 w-screen' style={{ marginTop: '2rem' }}>
      <div className="subsection-header-center subsection-header-responsive">
        <h1 className="text-2xl font-bold">Technologies</h1>
      </div>
      <div className="marquee bg-gray-200 dark:bg-stone-800 rounded-xl">
        <div className="marquee-content space-x-4 py-2">
          {allSkills.map((skill, index) => (
            <div key={index} id={`${skill}-${index}`} className="marquee-item shadow-xl rounded-xl bg-white dark:bg-stone-900 py-2">
              <span className="marquee-item-tooltip">{skill}</span>
              <Image
                src={`/logos/${skill.toLowerCase()}.svg`}
                alt={skill}
                width={25}
                height={25}
                className="rounded-xl hover:scale-105 ease-in duration-75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
