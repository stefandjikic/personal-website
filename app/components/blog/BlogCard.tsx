import React from "react";

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    date: string;
    category: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="rounded-md backdrop-blur-sm p-4 bg-gradient-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-gradient-to-l">
      <p className="text-xs mb-2">{post?.category}</p>
      <h4 className="text-lg font-bold text-cyan-100">{post.title}</h4>
      <p className="text-sm mt-2">{post.date}</p>
    </div>
  );
};

export default BlogCard;
