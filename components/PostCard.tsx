import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, date, title, description, tags, thumbnail }) => {
  return (
    <a href={`/posts/${id}`} className="flex flex-col items-center rounded-lg shadow-lg md:flex-row  p-2 relative ">
    <Image
    width={300}
    height={200}
    className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-32 md:rounded-none md:rounded-l-lg "
    src={`/${thumbnail}`} alt="" />
        <div className="absolute rounded p-2 top-4 right-8 dark:bg-amber-400 dark:text-black text-white bg-purple-800">{date}</div>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    <a className="flex flex-wrap mt-auto ">
        {tags &&
          tags.map((tag, index) => (
            <Link className="mt-2" href={`/blog?tag=${tag}`} key={index}>
            <span
              key={tag}
              className="
              bg-gray-200 dark:bg-zinc-800 px-4 py-2 mr-2 text-gray-500 dark:text-gray-200 rounded 
               dark:hover:brightness-50 hover:opacity-70 cursor-pointer hover:transition-all duration-300 ease-in-out"
            >
              {tag}
            </span>
            </Link>
          ))}
          </a>
    </div>
</a>
  );
};

export default PostCard;
