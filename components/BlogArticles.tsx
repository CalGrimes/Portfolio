"use client"
import React, { useState, useEffect } from 'react';
import { Input, Skeleton } from '@chakra-ui/react';
import { builder } from "@builder.io/sdk";
import { Author } from './Author';
import { BuilderContent } from '@builder.io/react';
import Image from 'next/image';
import Article from '@/components/Article';

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

export default function BlogArticles() {
    const [content, setContent] = useState<BuilderContent[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 200); // 200ms delay

    const [category, setCategory] = useState('');


    useEffect(() => {
        const fetchInternalContent = async () => {
            const data = await builder.getAll(
              "blog-article",
              {
                  limit: 5,
                  cacheSeconds: 5,
                  prerender: false,
                  query: {
                      $or: [
                              { 'data.title': { $regex: debouncedSearchQuery, $options: 'i' } },
                              { 'data.excerpt': { $regex: debouncedSearchQuery, $options: 'i' } },
                              { 'data.category': category }
                      ]
              }
              }
          );
          setContent(data as BuilderContent[]);
          }

        const fetchExternalContent = async () => {
            const data = await builder.getAll(
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
          );
          setContent(data as BuilderContent[]);
        }
        fetchInternalContent();
        fetchExternalContent();
        setLoading(false);
      }, [debouncedSearchQuery]);


  if (loading) {
    return (
      <div className="pt-24 sm:pt-32 h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Blog Postings</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Thank you for visiting my blog. I hope you find the information useful.
            </p>
          </div>
          <Input placeholder="Search articles" className='rounded-lg text-black' onChange={e => setSearchQuery(e.target.value)} />
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, index) => (
              <article key={index} className="flex flex-col items-start justify-between bg-gray-200 dark:bg-stone-800/70">
                <Skeleton height="60px" fadeDuration={4} width="100%" />
                <Skeleton height="20px" fadeDuration={4} width="80%" />
                <Skeleton height="20px" fadeDuration={4} width="60%" />
              </article>
            ))}
            </div>
        </div>
      </div>
    )
  }

  const categories = content.map((post: any) => post.data.category).filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);

  return (
    <div className="pt-24 sm:pt-32 flex flex-grow min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Blog Postings</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Thank you for visiting my blog. I hope you find the information useful.
          </p>
        </div>
        <div className='space-x-2'>
          <Input placeholder="Search articles" className='rounded-lg text-black' onChange={e => setSearchQuery(e.target.value)} />
          <select className='rounded-lg text-black' onChange={e => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories && categories.map((category: string) => (
              <option value={category} key={category}>{category}</option>
            ))}
          </select>
        </div>
    <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {content && content.map((post: any) => {
      console.log(post)
      return (
        <Article post={post} key={post.id} />
      )})}
      </div>
      </div>
    </div>
  );
}