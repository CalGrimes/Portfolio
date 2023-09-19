'use client'
import React from "react"
import PostCard from "@/components/PostCard"
import { useSearchParams } from 'next/navigation'

// <Posts category={category} posts={posts} /> optional category
interface Props {
  posts: BlogPost[];
}

export default function Posts({ posts }: Props) {
  const searchParams = useSearchParams()
 
  const filterBy = searchParams.get('tag')

  const tags = posts.map((post) => post.tags).flat();
  if (filterBy) {
    posts = posts.filter((post) => post.tags.includes(filterBy));
  }

  
  return (
    <>
    <section id="tag-filter">
    <div className="flex flex-wrap mt-auto">
       <h2 className="mr-4">Filter By:</h2>
       <a href={`/blog/`}>
            <span
              className="
              bg-gray-200 dark:bg-zinc-800 px-4 py-2 mr-2 mt-2 text-gray-500 dark:text-gray-200 rounded 
               dark:hover:brightness-50 hover:opacity-70 cursor-pointer hover:transition-all duration-300 ease-in-out"
            >
              All
            </span>
            </a>
       {tags.map((tag, index) => (
            <a href={`/blog?tag=${tag}`} key={index}>
            <span
              key={index}
              className="
              bg-gray-200 dark:bg-zinc-800 px-4 py-2 mr-2 mt-2 text-gray-500 dark:text-gray-200 rounded 
               dark:hover:brightness-50 hover:opacity-70 cursor-pointer hover:transition-all duration-300 ease-in-out"
            >
              {tag}
            </span>
            </a>
          ))}
      </div>
    </section>
    <section id="posts">
      <div className="flex flex-col animate-fadeIn animation-delay-2 sm:pb-10 md:pb-6 md:flex-row md:space-x-4 md:text-left">
       <ul className="w-full">
            {posts.map((post) => (
                <PostCard key={post?.id} {...post} />
            ))}
       </ul>
      </div>
    </section>
    </>
  )
}
