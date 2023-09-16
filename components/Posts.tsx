import React from "react"
import { getSortedPostsData } from "@/lib/posts"
import PostCard from "@/components/PostCard"


const posts = getSortedPostsData();
const Posts: React.FC = () => {
return (
    <section id="posts">
      <div className="flex flex-col animate-fadeIn animation-delay-2 sm:pb-10 md:pb-6 md:flex-row md:space-x-4 md:text-left">
       <ul className="w-full">
            {posts.map((posts) => (
                <PostCard key={posts?.id} {...posts} />
            ))}
       </ul>
      </div>
    </section>
  )
}

export default Posts;
