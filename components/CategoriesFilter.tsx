import { BuilderContent } from '@builder.io/react';
import { builder } from '@builder.io/sdk';
import React, { useEffect, useState } from 'react'


  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function CategoriesFilter({onFilter, ARTICLES_PER_PAGE, currentPage, onCategory}: {onFilter: any, ARTICLES_PER_PAGE: number, currentPage: number, onCategory: any}) {
    const [categories, setCategories] = useState<BuilderContent[]>([]);
    const [category, setCategory] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // Push states to the URL
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);

        if (!category) {
            searchParams.delete('category');
        }
        else
        {
            searchParams.set('category', category);
        }

        window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
    }, [category]);

    // Fetch url search params to update states
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const category = searchParams?.get('category');
        if (category) {
            setCategory(category);
        }
    }
    , []);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesInternal = await builder.getAll(
                'blog-article', {
                    options: {
                        includeUnpublished: process.env.NEXT_PUBLIC_ENVIRONMENT == 'development' ? true : false,
                        includeRefs: true
                      },
                    fields: 'data.category',
            });
            const categoriesExternal = await builder.getAll(
                'external-articles', {
                    options: {
                        includeUnpublished: process.env.NEXT_PUBLIC_ENVIRONMENT == 'development' ? true : false,
                        includeRefs: true
                      },
                    fields: 'data.category',
            });

            // merge and remove duplicates
            let allCategories = Array.from(new Set([...categoriesInternal, ...categoriesExternal]));  
            let unqCategories = allCategories.filter((v, i, a) => a.findIndex(t => (t.data?.category === v.data?.category)) === i);



            setCategories(unqCategories as any);
            setLoading(false);
        }

        fetchCategories();
    }, []);

    // useEffect(() => {
    //     const fetchContent = async () => {
    //       const internalData = await builder.getAll(
    //         "blog-article",
    //         {
    //             options: {
    //               includeUnpublished: process.env.NEXT_PUBLIC_ENVIRONMENT == 'development' ? true : false,
    //               includeRefs: true
    //             },
    //             query: category ? { 'data.category': category } : {},
    //             omit: "data.blocks",
    //             limit: ARTICLES_PER_PAGE,
    //             cacheSeconds: 5,
    //             offset: (currentPage - 1) * ARTICLES_PER_PAGE,
    //             prerender: false
    //         }
    //     );
    //     const externalData = await builder.getAll(
    //       "external-articles",
    //       {
    //         options: {
    //           includeUnpublished: process.env.NEXT_PUBLIC_ENVIRONMENT == 'development' ? true : false,
    //           includeRefs: true
    //         },
    //         query: category ? { 'data.category': category } : {},
    //         omit: "data.blocks",
    //         limit: ARTICLES_PER_PAGE,
    //         cacheSeconds: 5,
    //         offset: (currentPage - 1) * ARTICLES_PER_PAGE,
    //         prerender: false
    //       }
    //   );
    
    //     onFilter([...internalData, ...externalData]);
    //     setLoading(false);
    //     }
    
    //   fetchContent();
    //   }, [ARTICLES_PER_PAGE, category, currentPage, onFilter]);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <select 
            className='rounded-md text-black' 
            value={category || ''} 
            onChange={(e) => {
                setCategory(e.target.value)
                onCategory(e.target.value)
            }}
        >
            <option value=''>All Categories</option>
            {categories.map((icategory: BuilderContent<any>, index) => (
                <option key={index} value={icategory.data?.category}>
                    {icategory.data?.category}
                </option>
            ))}
        </select>
    )
}