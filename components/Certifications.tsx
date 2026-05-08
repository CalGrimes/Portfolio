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
    <div className="mt-12">
      <div className="subsection-header-center subsection-header-responsive">
        <h3 className="text-2xl font-bold">Certifications</h3>
      </div>
      <div className="flex flex-row overflow-x-scroll sm:overflow-hidden">
        {certifications.map((certification, idx) => (
          <a
            key={idx}
            href={certification.link}
            className="marquee-item hover:scale-110 ease-in duration-75 sm:border-stone-100 sm:dark:border-stone-900 rounded-lg p-2 m-2 sm:border-2 sm:hover:border-black sm:dark:hover:border-white flex items-center justify-center overflow-hidden flex-shrink-0"
          >
            <span className="marquee-item-tooltip">{certification.name}</span>
            <Image
              src={certification.image}
              alt={certification.name}
              width={125}
              height={75}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Certifications
