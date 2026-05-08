import BlogPage from "@/components/BlogPage";
import { Suspense } from "react";

export default async function Page(props: { params: Promise<any> }) {
  const params = await props.params;
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPage />
    </Suspense>
  )
}
