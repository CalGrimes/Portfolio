'use client'
import { builder } from '@builder.io/sdk';
import { Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

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

export default function SearchArticles({ARTICLES_PER_PAGE, onSearch, currentPage, onQuery}:any) {
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 200); // 200ms delay

    // Push states to the URL
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);

        if (!debouncedSearchQuery) {
            searchParams.delete('search');
        }
        else
        {
            searchParams.set('search', debouncedSearchQuery);
            onQuery(debouncedSearchQuery);
        }

        window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
    }, [debouncedSearchQuery, onQuery]);

    // Fetch url search params to update states
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
    
        if (!debouncedSearchQuery) {
            searchParams.delete('search');
        }
        else
        {
            searchParams.set('search', debouncedSearchQuery);
            onQuery(debouncedSearchQuery);
        }
    
        window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
    }, [debouncedSearchQuery, onQuery]);
  

    useEffect(() => {
        // Fetch articles based on the debounced search query
        const fetchContent = async () => {
            const internalData = await builder.getAll(
                "blog-article",
                {
                    options: {
                        includeUnpublished: process.env.NEXT_PUBLIC_ENVIRONMENT == 'development' ? true : false,
                        includeRefs: true
                    },
                    query: {
                        $or: [
                        {"data.title": { $regex: debouncedSearchQuery, $options: "i" }},
                        {"data.excerpt": { $regex: debouncedSearchQuery, $options: "i" }} 
                        ]
                    },
                    omit: "data.blocks",
                    limit: ARTICLES_PER_PAGE,
                    cacheSeconds: 5,
                    offset: (1 - 1) * ARTICLES_PER_PAGE,
                    prerender: false
                }
            );
        const externalData = await builder.getAll(
            "external-articles",
            {
                options: {
                    includeUnpublished: process.env.NEXT_PUBLIC_ENVIRONMENT == 'development' ? true : false,
                    includeRefs: true
                },
                query: {
                    $or: [
                    {"data.title": { $regex: debouncedSearchQuery, $options: "i" }},
                    {"data.excerpt": { $regex: debouncedSearchQuery, $options: "i" }} 
                    ]
                },
                omit: "data.blocks",
                limit: ARTICLES_PER_PAGE,
                cacheSeconds: 5,
                offset: (1 - 1) * ARTICLES_PER_PAGE,
                prerender: false
            }
        );
    
        onSearch([...internalData, ...externalData]);
        }
    
        fetchContent();
    }, [debouncedSearchQuery, onSearch, ARTICLES_PER_PAGE]); 


  return (
    <Input placeholder="Search articles" onChange={e => setSearchQuery(e.target.value)} className='rounded-lg text-black' />
  )
}
