'use client'
import BlogPage from "@/components/BlogPage";
import { Suspense } from "react";



export default async function Page({params}:any) {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPage />
    </Suspense>
  )
}
