import React from "react";

interface Props {
  tag: string;
  key?: number;
}

export default function Tag({ tag, key }: Props) {

  return (
    <p
    key={key}
    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 dark:bg-zinc-800 dark:text-gray-200 rounded font-semibold cursor-default"
  >
    {tag}
  </p>
  );
}