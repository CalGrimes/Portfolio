'use client'
import React from "react"
import PostCard from "@/components/PostCard"
import { useSearchParams } from 'next/navigation'
import Tag from "@/components/Tag";

interface Props {
  posts: BlogPost[];
}

export default function Posts({ posts }: Props) {
  const searchParams = useSearchParams()
 
  const filterBy = searchParams.getAll('tag')

  // distinct tags non case sensitive
  const tags = posts.map((post) => post.tags).flat().filter((tag, index, self) => self.indexOf(tag) === index).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));


  if (filterBy.length > 0) {
    posts = posts.filter((post) => filterBy.every(tag => post.tags.includes(tag)));
  }

  return (
    <>
    <section id="tag-filter">
    <h2 className="mr-4 pb-4">Filter By:</h2>
    <div className="flex flex-wrap mt-auto space-y-4 mb-4 items-end">
      <Tag tag="All" link="/blog" />
       {tags.map((tag, index) => {
            const selectedTags = filterBy.concat(tag);
            const queryParam = selectedTags.join('&tag=');
            return (
              <Tag tag={tag} link={`/blog?tag=${queryParam}`} key={index} />
            )
          })}
      </div>
    </section>
    { filterBy.length > 0 &&
    <section id="selected-tags">
    <h2 className="mr-4 pb-4">Selected:</h2>
    <div className="flex flex-wrap mt-auto space-y-4 mb-4">
       {filterBy.map((tag, index) => {
            const selectedTags = filterBy.filter((t) => t !== tag);
            const queryParam = selectedTags.join('&tag=');
            return (
              <Tag tag={tag} link={`/blog?tag=${queryParam}`} key={index}/>
            )
          })}
      </div>
      </section>
    }
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
