'use client'
import React from "react"
import Image from "next/image"

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
                <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                    Certifications
                </h1>
            <div className="flex flex-row sm:justify-center">
              {certifications.map((certification, idx) => {
                return (
                <a
                className="hover:border border-black dark:border-white rounded-lg p-2 m-2" 
                href={certification.link} key={idx}>
                  <Image
                    src={certification.image}
                    alt=""
                    width={150}
                    height={100}    
                    className="object-cover aspect-square"       
                  />
                </a>
              )
              })}
            </div>
            </div>
  )
}

export default Certifications
