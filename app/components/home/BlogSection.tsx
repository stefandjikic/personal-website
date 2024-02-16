import React from "react";
import { POSTS } from "@/app/helpers";
import BlogCard from "../blog/BlogCard";

const BlogSection = () => {
  return (
    <div className="my-10">
      <h3 className="text-xl uppercase text-cyan-100 text-center mb-10">
        Blog
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div>
        {/* TODO: Create Button Component */}
        {/* <button className="text-cyan-100 font-semibold mt-8">
          See more
        </button> */}
      </div>
    </div>
  );
};

export default BlogSection;