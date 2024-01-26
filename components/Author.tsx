"use client"
import { builder } from '@builder.io/sdk';
import { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface AuthorDetails {
    data: {
      photo: string;
      fullName: string;
    };
  }
  
  // Then, you should define authorDetails with the type of AuthorDetails

export function Author ({author}:any) {
  const [authorDetails, setAuthorDetails] = useState<AuthorDetails | null>(null);

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      const details = await builder.get("author", {
        query: { id: author.id },
        cacheSeconds: 5,
        prerender: false,
      });
      setAuthorDetails(details);
    };

    fetchAuthorDetails();
  }, [author.id]);

  if (!authorDetails) {
    return <div className='mt-8'><Spinner size="xl" style={{ width: '25px', height: '25px' }} /></div>;
  }
  

  return (
    <>
      <div className="relative mt-4 flex items-center gap-x-4">
        <img src={authorDetails.data.photo} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            <a href={authorDetails.data.photo}>
              <span className="absolute inset-0" />
              {authorDetails.data.fullName}
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
        </div>
      </div>
    </>
  );
}