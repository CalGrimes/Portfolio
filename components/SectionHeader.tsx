"use client"

import { useState } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import SlideUp from "@/components/SlideUp";
import ProductsSection from "@/components/ProductsSection";
import Resume from "@/components/Resume";

const tabs = [
    { name: 'Resume', href: '#', current: true },
    { name: 'Products', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
  ]
  
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  
    const SectionHeaders = () => {

    const [currentTab, setCurrentTab] = useState((tabs.find((tab) => tab.current) as { name: string }).name);

    function handleTabChange(tab: any) {
        setCurrentTab(tab.name)
        tabs.forEach((t) => {
            t.current = t.name === tab.name
        })
    }

    return (
      <section id="section-headers" className="max-w-full">
      <div className="border-b border-gray-200 pb-5 sm:pb-24 mt-12">
        <div className="mt-3 sm:mt-4">
          <div className="sm:hidden">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-black"
              defaultValue={tabs.find((tab) => tab.current)?.name ?? ''}
              onChange={(e) => handleTabChange(tabs.find((tab) => tab.name === e.target.value))}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
        <nav className="-mb-px flex space-x-8 justify-center text-center">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabChange(tab)}
              className={classNames(
                tab.name === currentTab
                  ? 'border-purple-500 text-purple-800 dark:text-amber-400 dark:border-amber-200'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'whitespace-nowrap border-b-2 px-1 pb-4 text-center text-2xl font-bold mb-6 md:text-left'
              )}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
        </div>
        <div id="Resume" className={classNames(currentTab === 'Resume' ? 'block' : 'hidden', 'mt-3')}>
          <SlideUp>
            <Resume />
          </SlideUp>
        </div>
        <div id="Products" className={classNames(currentTab === 'Products' ? 'block' : 'hidden', 'mt-3')}>
          <SlideUp>
            <ProductsSection />
          </SlideUp>
        </div>
        <div id="Projects" className={classNames(currentTab === 'Projects' ? 'block' : 'hidden', 'mt-3')}>
          <SlideUp>
            <ProjectsSection />
          </SlideUp>
        </div>
      </div>
    </section>
    )
  }
  
    export default SectionHeaders