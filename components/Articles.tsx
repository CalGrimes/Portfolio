"use client"
import React, { useState, useEffect } from 'react';
import { Input, Skeleton } from '@chakra-ui/react';
import { builder } from "@builder.io/sdk";
import { Author } from './Author';
import { BuilderContent } from '@builder.io/react';
import Image from 'next/image';

export default function Articles() {
    const [internalContent, setInternalContent] = useState<BuilderContent[]>([]);
    const [externalContent, setExternalContent] = useState<BuilderContent[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 200); // 200ms delay

    function useDebounce(value: string, delay: number) {
        const [debouncedValue, setDebouncedValue] = useState(value);
    
        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
    
            return () => {
                clearTimeout(handler);
            };
        }, [value, delay]);
    
        return debouncedValue;
    }

    useEffect(() => {
        builder
            .getAll(
                "blog-article",
                {
                    limit: 5,
                    cacheSeconds: 5,
                    prerender: false,
                    query: {
                        $or: [
                                { 'data.title': { $regex: debouncedSearchQuery, $options: 'i' } },
                                { 'data.excerpt': { $regex: debouncedSearchQuery, $options: 'i' } }
                        ]
                }
                }
            )
            .then((data: any) => {
                setInternalContent(data);
                setLoading(false);
            });

        builder
            .getAll(
                "external-articles",
                {
                    limit: 5,
                    cacheSeconds: 5,
                    prerender: false,
                    query: {
                        $or: [
                                { 'data.title': { $regex: debouncedSearchQuery, $options: 'i' } },
                                { 'data.excerpt': { $regex: debouncedSearchQuery, $options: 'i' } }
                        ]
                }
                }
            )
            .then((data: any) => {
                setExternalContent(data);
                setLoading(false);
            });
    }, [debouncedSearchQuery]);

  if (loading) {
    return (
        <>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {Array.from({ length: 5 }).map((_, index) => (
            <article key={index} className="flex flex-col items-start justify-between bg-gray-200 dark:bg-stone-800/70">
              <Skeleton height="20px" fadeDuration={4} width="100%" />
              <Skeleton height="20px" fadeDuration={4} width="80%" />
              <Skeleton height="20px" fadeDuration={4} width="60%" />
            </article>
          ))}
          </div>
        </>
    )
  }

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }


  return (
    <>
    <Input placeholder="Search articles" className='rounded-lg' onChange={e => setSearchQuery(e.target.value)} />
    <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {internalContent && internalContent.map((post: any) => (
        <article key={post.data.id} className="flex flex-col items-start">
          <div className="relative w-full hover:scale-105 ease-in-out transition-all duration-300">
            <a href={post.previewUrl}>
              <Image
                src={post.data.thumbnail}
                alt=""
                width={500}
                height={500}
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </a>
          </div>
          <div className="max-w-xl">
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              <time dateTime={post.data.date} className="text-gray-500 dark:text-gray-300">
                {formatDate(post.data.date)}
              </time>
              <a
                href="{post.category.href}"
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {post.data.category}
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                <a href={post.previewUrl}>
                  <span className="absolute inset-0" />
                  {post.data.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{post.data.excerpt}</p>
            </div>
            <Author author={post.data.author} />
          </div>
        </article>
      ))}
      {externalContent && externalContent.map((post: any) => (
        <article key={post.data.id} className="flex flex-col items-start">
            <div className="relative w-full hover:scale-105 ease-in-out transition-all duration-300">
                <a href={post.data.url}>
                <Image
                    src={post.data.thumbnail}
                    alt=""
                    width={500}
                    height={500}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <span className='absolute top-0 right-0 flex items-center justify-center rounded-bl-lg rounded-tr-lg bg-gray-50 px-3 py-1.5 font-small text-gray-600
                '>
                External
                </span>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </a>
            </div>
            <div className="max-w-xl">
                <div className="flex items-center gap-x-4 text-xs mt-8">
                <time dateTime={post.data.date} className="text-gray-500 dark:text-gray-300">
                    {formatDate(post.data.date)}
                </time>
                <a
                    href="{post.category.href}"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                    {post.data.category}
                </a>
                </div>
                <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                    <a href={post.data.url}>
                    <span className="absolute inset-0" />
                    {post.data.title}
                    </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{post.data.excerpt}</p>
                </div>
            </div>
        </article>
        ))}
      </div>
      </>
  );
}