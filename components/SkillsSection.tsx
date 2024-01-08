'use client'
import React from 'react';
import Image from 'next/image';
import { Tooltip } from '@chakra-ui/react'

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
    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  return (
    <section id="skills" className='max-w-4xl mt-12'>
        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Technologies
        </h1>
      <div className="marquee bg-gray-200 dark:bg-stone-800">
        <div className="marquee-content space-x-4 py-2">
          {allSkills.map((skill, index) => (
            <div key={index} id={skill} className='shadow-xl rounded-xl bg-white dark:bg-stone-900 py-2'>
                <Tooltip label={skill} placement="top" aria-label='tooltip' className='dark:bg-amber-400 dark:text-black text-white font-semibold bg-purple-800 p-2 rounded-md'>
                    <Image
                        src={`/logos/${skill.toLowerCase()}.svg`}
                        alt={skill}
                        width={25}
                        height={25}
                        className="rounded-xl hover:scale-105 ease-in duration-75"
                        aria-label={skill}
                    />
                </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;