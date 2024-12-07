import React from "react";
import BlogCard from "../blog/BlogCard";
import { getLatestPosts } from "@/app/blog/_getData";
import Link from "next/link";

const BlogSection = () => {
  const latestPosts = getLatestPosts(3);
  return (
    <div className="my-10">
      <h3 className="text-xl uppercase text-cyan-100 text-center mb-10">
        <Link href="/blog">Blog</Link>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
