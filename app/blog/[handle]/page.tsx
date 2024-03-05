import React from "react";
import { BuilderContent, builder } from '@builder.io/sdk'
import { RenderBuilderContent } from "@/components/builder";
// See the full code: https://www.builder.io/c/docs/integrate-section-building?codeFramework=nextApp#add-an-announcement-bar-section-to-your-app


// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


export async function generateMetadata({ params }: any) {
  const content = await builder
  .get("blog-article", {
    // Include references, like our `author` ref
    options: { includeRefs: true },
    query: {
      // Get the specific article by handle
      "data.handle": params.handle,
    },
    cacheSeconds: 5,
    prerender: false
  })
  .promise() || null;


  return {
    // title: content.data.title,
    // description: content.data.excerpt,
  }
}

export default async function Page({params}:any) {

  const content = await builder
  .get("blog-article", {
    // Include references, like our `author` ref
    options: { includeRefs: true },
    query: {
      // Get the specific article by handle
      "data.handle": params.handle,
    },
    cacheSeconds: 5,
    prerender: false
  })
  .promise() || null;

  if (!content) {
    return <div>Not found</div>
  }


  return (
    <div className="pt-24 h-full">
      <RenderBuilderContent content={content} key={content.id}  />
    </div>
  );
}