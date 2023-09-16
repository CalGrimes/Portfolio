import Image from "next/image";
import React from "react";

interface PostCardProps {
  id?: string;
  date?: string;
  title?: string;
  tags?: string[];
  thumbnail?: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, date, title, tags, thumbnail }) => {
  return (
    <div className="rounded-lg shadow-lg w-full flex flex-col justify-between overflow-hidden mx-auto my-6">
  <div className="flex flex-row h-full">
    <div className="flex-shrink-0">
      <Image
        src={`/${thumbnail}`}
        alt={title ? title : ""}
        aria-hidden="true"
        width={100}
        height={30}
      />
    </div>
    <div className="flex flex-col flex-grow p-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <div className="flex flex-col">
          <p className="text-xs ml-auto p-4">{date}</p>
        </div>
      </div>
      <div className="flex flex-wrap mt-auto">
        {tags &&
          tags.map((tag, index) => (
            <span
              key={tag}
              className="
              bg-gray-200 dark:bg-zinc-800 px-4 py-2 mr-2 mt-2 text-gray-500 dark:text-gray-200 rounded font-semibol
               dark:hover:brightness-50 hover:opacity-70 cursor-pointer hover:transition-all duration-300 ease-in-out"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default PostCard;
