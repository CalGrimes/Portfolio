import { BuilderContent } from '@builder.io/react';
import { builder } from '@builder.io/sdk';
import React, { useEffect, useState } from 'react'


  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
  interface CategoryContent extends BuilderContent<any> {
    data: {
      category: string;
      variationId: any;
      testVariationId: any;
      testVariationName: string;
      '@version'?: number;
      id?: string;
      name?: string;
      published?: "published" | "draft" | "archived";
      // include other 7 properties
      testRatio?: number;
    };
  }
  
  // Then use this new type in your component
  export default function CategoriesFilter({onFilter, ARTICLES_PER_PAGE, currentPage, onCategory}: {onFilter: any, ARTICLES_PER_PAGE: number, currentPage: number, onCategory: any}) {
      const [categories, setCategories] = useState<CategoryContent[]>([]);
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
            {categories.map((icategory: CategoryContent, index) => (
                <option key={index} value={icategory.data?.category}>
                    {icategory.data?.category}
                </option>
            ))}
        </select>
    )
}