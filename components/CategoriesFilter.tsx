import { isDevelopment } from '@/utils/config';
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
  export default function CategoriesFilter({onFilter}: {onFilter: any}) {
    const [categories, setCategories] = useState<CategoryContent[]>([]);
    const [category, setCategory] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesExternal = await builder.getAll(
                'external-articles', {
                    options: {
                        includeUnpublished: isDevelopment,
                        includeRefs: true
                    },
                    fields: 'data.category',
            });

            // merge and remove duplicates
            let allCategories = Array.from(new Set(categoriesExternal));  
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
                onFilter(e.target.value)
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