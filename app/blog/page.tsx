import Posts from "@/components/Posts";
import TagFilter from "@/components/TagFilter";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      {/* section */}
      <section>
        <div className="flex flex-col animate-fadeIn animation-delay-2 my-10 pt-16 sm:pt-16 sm:pb-10 md:pt-16 md:pb-6 md:flex-row md:space-x-4 md:text-left">
          <h1 className="text-3xl font-bold">Blog Postings</h1>
        </div>
      </section>
      <TagFilter />
      <Posts />
    </main>
  )
}
