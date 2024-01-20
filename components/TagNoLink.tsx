import React from "react";

interface Props {
  tag: string;
  index?: number;
}

export default function TagNoLink({ tag, index}: Props) {

  return (
    <p key={index}
    className="bg-gray-300 px-4 py-2 mr-2 mt-2 text-gray-800 dark:bg-zinc-800 dark:text-gray-200 rounded font-semibold cursor-default"
  >
    {tag}
  </p>
  );
}