'use client'
import React from "react"
import Image from "next/image"
import { Tooltip } from "@chakra-ui/react"

const certifications = [
  {
    name: "Azure Data Fundamentals",
    link: "https://learn.microsoft.com/en-gb/users/CalGrimes-9071/credentials/9D6BF48AC368A1E0",
    image: "/azure-data-fundamentals.png"
  },
  {
    name: "Azure Administrator",
    link: "https://learn.microsoft.com/en-gb/users/calgrimes-9071/credentials/a91d09376b31a0ab",
    image: "/azure-administrator.svg"
  },
  {
    name: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C78E0E0278A4C84CD7F2FBAAA670B6F8003F851529216D85392DE6F05F383CC3",
    image: "/oci-foundations-infra-2023.png"
  }
]

const Certifications = () => {

  return (
            <div className = "mt-12">
                <h1 className="text-center text-2xl font-bold mb-6 md:text-left w-full">
                    Certifications
                </h1>
            <div className="flex flex-row ">
              {certifications.map((certification, idx) => {
                return (
                <a
                className="hover:scale-110 ease-in duration-75 border-stone-100 dark:border-stone-900 rounded-lg p-2 m-2 border-2 hover:border-black dark:hover:border-white w-32 h-32 flex items-center justify-center overflow-hidden flex-shrink-0" 
                href={certification.link} key={idx}>
                  <Tooltip label={certification.name} placement="top" aria-label='tooltip' className='dark:bg-amber-400 dark:text-black text-white font-semibold bg-purple-800 p-2 rounded-md'>
                  <Image
                      src={certification.image}
                      alt=""
                      width={125}
                      height={125}    
                      className="object-contain max-w-full max-h-full"  
                  />
                  </Tooltip>
                </a>
              )
              })}
            </div>
            </div>
  )
}

export default Certifications
