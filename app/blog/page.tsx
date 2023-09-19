import Posts from "@/components/Posts";
import { getSortedPostsData } from "@/lib/posts"


// blog/page.tsx
// export async function getStaticProps() {
//   const posts = getSortedPostsData();

//   return {
//     props: {
//       posts
//     },
//   };
// }

export default function BlogPostings() {
  const posts = getSortedPostsData()
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      {/* section */}
      <section>
        <div className="flex flex-col animate-fadeIn animation-delay-2 my-10 pt-16 sm:pt-16 sm:pb-10 md:pt-16 md:pb-6 md:flex-row md:space-x-4 md:text-left">
        </div>
      </section>
      <Posts posts={posts} />
    </main>
  )
}


