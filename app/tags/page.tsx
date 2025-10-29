import React from "react";
import { getAllPosts, getTagsWithCount } from "../blog/_getData";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tags",
  description: "A collection of tags used in my blog posts.",
};

const TagsPage = () => {
  const tags = getTagsWithCount();

  return (
    <div className="mt-14 ">
      <h1 className="text-3xl text-center font-semibold mb-16 text-cyan-100">
        Tags
      </h1>
      <div className="flex flex-wrap justify-center">
        {/* TODO: Convert to component */}
        {tags.map((tag) => (
          <Link
            className="px-4 py-2 m-2 rounded-md backdrop-blur-xs p-4 bg-linear-to-r text-cyan-100 from-indigo-600/20 to-cyan-800/20 hover:bg-linear-to-l"
            key={tag.tag}
            href={`/tags/${tag.tag}`}
          >
            {tag.tag}
            <span className="text-xs ml-2">({tag.count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
