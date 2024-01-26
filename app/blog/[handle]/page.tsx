import React from "react";
import { BuilderContent, builder } from '@builder.io/sdk'
import { RenderBuilderContent } from "@/components/builder";
// See the full code: https://www.builder.io/c/docs/integrate-section-building?codeFramework=nextApp#add-an-announcement-bar-section-to-your-app


// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


export async function generateMetadata({ params }: any) {
  const content = await builder
    .get("blog-article", {

      userAttributes: {
        // Pass the current user attributes
        urlPath: `/blog/${params?.handle}`,
      },
      cacheSeconds: 5,
      // Set prerender to false to prevent infinite rendering loops
      prerender: false,

    })
    .toPromise();

  return {
    title: content.data.title,
    description: content.data.excerpt,
  }
}

export default async function Page({params}) {

  const content = await builder
    .get("blog-article", {

      userAttributes: {
        // Pass the current user attributes
        urlPath: `/blog/${params?.handle}`,
      },
      cacheSeconds: 5,
      // Set prerender to false to prevent infinite rendering loops
      prerender: false,

    })
    .toPromise();


  return (
    <div className="pt-24 h-full">
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} key={content.id}  />
    </div>
  );
}