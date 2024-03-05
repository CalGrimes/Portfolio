import Image from 'next/image';
import { Author } from '@/components/Author';
import { Text } from '@chakra-ui/react';
import { useState } from 'react';

interface ArticleProps {
  post: {
    data: {
      id: string;
      thumbnail: string;
      date: string;
      category: string;
      title: string;
      excerpt: string;
      author: any;
      url: string;
    };
  };
}

const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  const Article: React.FC<ArticleProps> = ({ post }) => {
    return (
      <article
        key={post.data.id}
        className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-gray-900 p-8 group h-96"
      >
        <img src={post.data.thumbnail} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 mt-auto">
          <time dateTime={post.data.date} className="mr-8">
            {formatDate(post.data.date)}
          </time>
          <div className="-ml-4 flex items-center gap-x-4">
              {post.data.author && (
                <>
            <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="flex gap-x-2.5">
                <>
                  <img src={post.data.author?.value.data.photo} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                  {post.data.author?.value.data.fullName}
                </>
            </div>
            </>
              )}
          </div>
        </div>
        <div className="flex flex-wrap  gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 ">
          <span className="text-xs font-semibold text-white bg-gray-800 rounded-full px-3 py-1">
            {post.data.category}
          </span>
        </div>
        <div className="mt-3 text-lg font-semibold leading-6 text-white">
          <a href={post.data.url}>
            <span className="absolute inset-0" />
            {post.data.title}
          </a>
          <Text 
    className='text-sm text-gray-300 dark:text-gray-400 overflow-hidden relative z-10 flex-grow truncate group-hover:whitespace-normal group-hover:overflow-visible'
>
    {post.data.excerpt}
</Text>
        </div>
      </article>
    );
  }

export default Article;