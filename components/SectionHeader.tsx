"use client"

import { useState } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import SlideUp from "@/components/SlideUp";
import ProductsSection from "@/components/ProductsSection";
import Resume from "@/components/Resume";

const tabs = [
  { name: 'Resume', href: '#', current: true },
  // { name: 'Products', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


const SectionHeaders = () => {

  const [currentTab, setCurrentTab] = useState((tabs.find((tab) => tab.current) as { name: string }).name);

  function handleTabChange(tab: any) {
    setCurrentTab(tab.name)
  }

  return (
    <section id="section-headers" style={{ maxWidth: '100%', marginTop: '10rem' }}>
      {/* Mobile tabs */}
      <div className="tabs-wrapper sm-hidden">
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabChange(tab)}
              className={classNames(
                'tab-button',
                tab.name === currentTab && 'tab-button-active'
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop tabs */}
      <div className="tabs-wrapper sm-flex">
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabChange(tab)}
              className={classNames(
                'tab-button',
                tab.name === currentTab && 'tab-button-active'
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div id="Resume" style={{ display: currentTab === 'Resume' ? 'block' : 'none', marginTop: '4rem' }}>
        <SlideUp>
          <Resume />
        </SlideUp>
      </div>
      <div id="Products" style={{ display: currentTab === 'Products' ? 'block' : 'none', marginTop: '4rem' }}>
        <SlideUp>
          <ProductsSection />
        </SlideUp>
      </div>
      <div id="Projects" style={{ display: currentTab === 'Projects' ? 'block' : 'none', marginTop: '4rem' }}>
        <SlideUp>
          <ProjectsSection />
        </SlideUp>
      </div>
    </section>
  )
}

export default SectionHeaders