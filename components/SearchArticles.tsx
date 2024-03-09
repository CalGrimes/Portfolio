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

export default function SearchArticles({onQuery}:any) {
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 200); // 200ms delay

    useEffect(() => {
        onQuery(debouncedSearchQuery);
    }, [debouncedSearchQuery, onQuery]);


  return (
    <Input placeholder="Search articles" onChange={e => setSearchQuery(e.target.value)} className='rounded-lg text-black' />
  )
}
