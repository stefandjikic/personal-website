import React from "react";
import { getAllPosts } from "../blog/_getData";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tags",
  description: "A collection of tags used in my blog posts.",
};

const TagsPage = () => {
  const posts = getAllPosts();
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));

  return (
    <div className="mt-14 ">
      <h1 className="text-3xl text-center font-semibold mb-16 text-cyan-100">
        Tags
      </h1>
      <div className="flex flex-wrap justify-center">
        {tags.map((tag) => (
          <Link
            className="text-lg bg-cyan-700 text-white rounded-full px-4 py-2 m-2 hover:bg-cyan-800"
            key={tag}
            href={`/tags/${tag}`}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
