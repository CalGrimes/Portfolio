import { getPostData, getSortedPostsData } from '@/lib/posts'
import React from 'react'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Tag from '@/components/Tag';


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
            <div className="flex flex-row align-middle items-center">
            <Link href="/blog" 
            className="mr-4 rounded font-semibol dark:hover:brightness-50 hover:opacity-70 cursor-pointer hover:transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline-block rounded-xl shadow-md dark:shadow-none dark:bg-stone-800 dark:hover:brightness-50 hover:opacity-70 cursor-pointer hover:transition-all duration-300 ease-in-out
            " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"/>
            </svg>
            </Link>
            
            <h1 className="text-3xl font-bold">{title}</h1>
            </div>
        </div>
        <div className="flex animate-fadeIn animation-delay-2 pt-2 sm:pt-2 sm:pb-10 md:pt-2 md:pb-6 md:flex-row md:space-x-4 md:text-left">
            {tags && tags.map((tag, index) => (
                <Tag tag={tag} link={`/blog?tag=${tag}`} key={index} />
                
            ))}
        </div>
        <p className='flex flex-row'>Created on {date}</p>
        <hr className="my-4" />
</div>      
            <div className="markdown dark:text-stone-300" dangerouslySetInnerHTML={{ __html: contentHtml }} />

      </section>
    </main>
  )
}
