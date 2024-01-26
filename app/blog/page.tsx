import Articles from "@/components/Articles";

const BlogArticles = () => {

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Blog Postings</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Thank you for visiting my blog. I hope you find the information useful.
          </p>
        </div>
        <Articles />
      </div>
    </div>
  )
}

export default async function Page({params}:any) {
  return (
      <BlogArticles />
  )
}




