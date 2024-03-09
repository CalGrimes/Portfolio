'use client'
import { useState, useEffect } from "react";
import { builder } from "@builder.io/sdk";
import Articles from "@/components/Articles";
import SearchArticles from "@/components/SearchArticles";
import Pagination from "@/components/Pagination";

import { useSearchParams } from "next/navigation";
import CategoriesFilter from "@/components/CategoriesFilter";
import { Input, Skeleton } from "@chakra-ui/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const ARTICLES_PER_PAGE = 30;

const getTotalArticles = async (category: string | null, searchQuery: string) => {
  const totalExternalArticles = await builder.getAll(
    "external-articles",
    {
        options: {
          includeUnpublished: process.env.NEXT_PUBLIC_ENVIRONMENT == 'development' ? true : false,
          includeRefs: true
        },
        fields: "data.category",
        query: { 
          $and: [
            category ? { 'data.category': category } : {},
            {
              $or: [
                { 'data.title': { $regex: searchQuery, $options: 'i' } },
                { 'data.excerpt': { $regex: searchQuery, $options: 'i' } }
              ]
            }
          ]
        },
        cacheSeconds: 5,
        prerender: false
    }
  ).then((res) => { return res.length });



  // round up to the nearest whole number
  const total = Math.ceil(totalExternalArticles / ARTICLES_PER_PAGE);

  return total;
}

export default function Page({params}:any) {
  const searchParams = useSearchParams();

  const [content, setContent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [categories, setCategories] = useState<any[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch total pages when the component mounts
  useEffect(() => {
    const fetchTotalPages = async () => {
      const total = await getTotalArticles(category, searchQuery);
      setTotalPages(total as number);
      setCategories(categories as any[]);
    };

    fetchTotalPages();
  }, [categories, category, searchQuery]);


  // Push states to the URL
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', currentPage.toString());

    category ? searchParams.set('category', category) : searchParams.delete('category');
    searchQuery ? searchParams.set('search', searchQuery) : searchParams.delete('search');

    window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
  }, [category, currentPage, searchQuery]);

  // Fetch url search params to update states
  useEffect(() => {
    const page = searchParams?.get('page');
    const category = searchParams?.get('category');
    const search = searchParams?.get('search');

    page && setCurrentPage(parseInt(page));
    category && setCategory(category);
    search && setSearchQuery(search);

  }, [searchParams]);
    

  useEffect(() => {
    const fetchContent = async () => {
    const externalData = await builder.getAll(
      "external-articles",
      {
        options: {
          includeUnpublished: process.env.NEXT_PUBLIC_ENVIRONMENT == 'development' ? true : false,
          includeRefs: true,
        },
        query: { 
          $and: [
            category ? { 'data.category': category } : {},
            {
              $or: [
                { 'data.title': { $regex: searchQuery, $options: 'i' } },
                { 'data.excerpt': { $regex: searchQuery, $options: 'i' } }
              ]
            }
          ]
        },
        limit: ARTICLES_PER_PAGE,
        cacheSeconds: 5,
        offset: (currentPage - 1) * ARTICLES_PER_PAGE,
        prerender: false
      }
  );

    setContent([...externalData]);
    setLoading(false);
    }

  fetchContent();
  }, [category, currentPage, searchQuery]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 pt-32">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Blog Postings</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Thank you for visiting my blog. I hope you find the information useful.
            </p>
          </div>
        <div className="mt-20 flex space-x-4">
          <Input placeholder="Search articles" className='rounded-lg text-black' />
          <select className='rounded-md text-black'>
              <option value=''>All Categories</option>
          </select>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, index) => (
              <article key={index} className="flex flex-col items-start justify-between bg-gray-200 dark:bg-stone-800/70">
                <Skeleton height="384px" fadeDuration={4} width="100%" />
                <Skeleton height="20px" fadeDuration={4} width="80%" />
                <Skeleton height="20px" fadeDuration={4} width="60%" />
              </article>
            ))}
            </div>
      </div>
    )
  }
  return (
      <div className="container mx-auto px-4 pt-16 space-y-12">
        <div className="min-h-screen">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Blog Postings</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Thank you for visiting my blog. I hope you find the information useful.
            </p>
        </div>
        <div className="flex space-x-4 mt-20">
          <SearchArticles onQuery={setSearchQuery} />
          <CategoriesFilter onFilter={setCategory} />
        </div>
        <Articles articles={content} />
        {content.length === 0 && (
          <div className="flex items-center justify-center h-screen">
          <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">No articles found</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  We couldn&apos;t find any articles matching your search.
              </p>
          </div>
      </div>)}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

      </div>
  )
}