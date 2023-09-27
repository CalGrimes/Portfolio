import { getPostData, getSortedPostsData } from '@/lib/posts'
import React from 'react'
import { notFound } from 'next/navigation';
import Link from 'next/link';


// TODO: Fix Metadata
// export function generateMetadata({ params }: { params: { postId: string } }) {
//     const posts = getSortedPostsData(); // Assuming getSortedPostsData() is defined correctly
//     console.log(params);
//     const { postId } = params;

//     const post = posts.find((post) => post.id === postId);

//     if (!post) {
//         return {
//             title: 'Post not found',
//         };
//     }

//     return {
//         title: post.title,
//     };
// }

export function generateStaticParams() {
    const posts = getSortedPostsData();

    return posts.map((post) => ({
            postId: post.id,
    }));
}


export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData(); // deduped
    const { postId } = params;

    if (!posts.find((post) => post.id === postId)) {
        return notFound();
    }

    const { title, date, tags, contentHtml } = await getPostData(postId);

    const pubDate = date;

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      {/* section */}
      <section>
      <div className="flex flex-col">
    <div className="flex animate-fadeIn animation-delay-2 pt-4 sm:pt-4 sm:pb-10 md:pt-4 md:pb-6 md:flex-row md:space-x-4 md:text-left mt-24">
        <h1 className="text-3xl font-bold">{title}</h1>
    </div>
    <div className="flex animate-fadeIn animation-delay-2 pt-2 sm:pt-2 sm:pb-10 md:pt-2 md:pb-6 md:flex-row md:space-x-4 md:text-left">
        {tags && tags.map((tag, index) => (
            <span
                key={tag}
                className="bg-gray-200 dark:bg-zinc-800 px-4 py-2 justify-between mr-2 text-gray-500 dark:text-gray-200 rounded font-semibol dark:hover:brightness-50 hover:opacity-70 cursor-pointer hover:transition-all duration-300 ease-in-out="
            >
                {tag}
            </span>
        ))}
    </div>
          <p className='flex flex-row'>Created on {date}</p>
          <hr className="my-4" />
</div>      
            <div className="markdown dark:text-white" dangerouslySetInnerHTML={{ __html: contentHtml }} />

      </section>
    </main>
  )
}
