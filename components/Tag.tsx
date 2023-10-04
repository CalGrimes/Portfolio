import React from "react";

interface Props {
  tag: string;
  link: string;
  key?: number;
}

export default function Tag({ tag, link, key }: Props) {
  const url = tag === "All" ? "/blog" : `/blog?tag=${tag}`;

  return (
    <a href={url} key={key}>
      <span
        key={key}
        className="
          bg-gray-200 dark:bg-zinc-800 px-4 py-2 mr-2 text-gray-500 dark:text-gray-200 rounded 
          dark:hover:brightness-50 hover:opacity-70 cursor-pointer hover:transition-all duration-300 ease-in-out"
      >
        {tag}
      </span>
    </a>
  );
}