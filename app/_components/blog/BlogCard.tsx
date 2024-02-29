import { IBlogPostMetaData } from "@/app/utils/interfaces";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  post: IBlogPostMetaData;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="rounded-md backdrop-blur-sm p-4 bg-gradient-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-gradient-to-l">
      <Link href={`/blog/${post.slug}`}>
        <p className="text-xs mb-2">{post?.category}</p>
        <h4 className="text-lg font-bold text-cyan-100">{post.title}</h4>
        <p className="text-sm mt-2">{post.date}</p>
      </Link>
    </div>
  );
};

export default BlogCard;
