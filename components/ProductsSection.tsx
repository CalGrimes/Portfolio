'use client'
import React from "react"


const posts = [
  {
    id: 1,
    title: 'SQL Converter',
    href: 'https://vldbsolutions.com/tools/sql-converter/',
    description:
      'Architected an SQL Transpiler to convert legacy SQL dialects and vendor specifc features such as Teradata BTEQ to ANSI SQL.',
    imageUrl:
      '/bteq_to_sql.svg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Consulting Services', href: '#' },
    author: {
      name: 'VLDB',
      role: 'Consulting package offered by VLDB Solutions',
      href: 'https://vldbsolutions.com/',
      imageUrl:
        'https://i0.wp.com/vldbsolutions.com/wp-content/uploads/2023/12/vldb-short-logo-grey.png?w=501&ssl=1',
    },
  },
  {
    id: 2,
    title: 'GoldenProtect',
    href: 'https://vldbsolutions.com/goldenprotect/',
    description:
      'GoldenProtect is a method to transform pre-configured VMs into a desired state, ensuring robust security compliance and standards across Azure subscriptions.',
    imageUrl:
      '/golden_protect.svg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Azure Policies', href: '#' },
    author: {
      name: 'VLDB',
      role: 'Try out the demo!',
      href: 'https://vldbsolutions.com/',
      imageUrl:
        'https://i0.wp.com/vldbsolutions.com/wp-content/uploads/2023/12/vldb-short-logo-grey.png?w=501&ssl=1',
    },
  },
]

const Products = () => {
  return (
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mt-10 space-y-20">
            <h1 className="text-left font-bold text-4xl">
              Company involvements...
            </h1>
            {posts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col gap-8 shadow-xl dark:bg-stone-800/70 rounded-xl">
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 group-hover:scale-105 transition-transform duration-500" />
                <div className="px-8 pb-2 lg:pb-0 w-full lg:mr-12">
                  <div className="relative">
                    <div className="flex justify-start items-baseline space-x-4">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <div className="items-center gap-x-4 text-xs">
                        {/* <time dateTime={post.datetime} className="text-gray-500 dark:text-gray-200">
                          {post.date}
                        </time> */}
                        <span
                          className="relative z-10 rounded-full bg-gray-50 py-1.5 font-medium text-gray-600 hover:bg-gray-100 transition-colors duration-200 ease-in-out cursor-default leading-6"
                        >
                          {post.category.title}
                        </span>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">{post.description}</p>
                  </div>
                  <div className=" flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4 mb-6">
                      <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                  </div>
              </article>
            ))}
          </div>
        </div>
      </div>
  )
}


const ProductsSection = () => {
  return (
    <section id="products">
      <Products />
    </section>
  )
}

export default ProductsSection
