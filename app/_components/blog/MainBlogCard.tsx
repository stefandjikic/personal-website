import { getFormattedDate } from "@/app/utils/helpers";
import { IBlogPostMetaData } from "@/app/utils/interfaces";
import Link from "next/link";
import React from "react";

interface MainBlogCardProps {
  post: IBlogPostMetaData;
}

const MainBlogCard = ({ post }: MainBlogCardProps) => {
  const formattedDate = getFormattedDate(post?.date);

  return (
    <Link href={`/blog/${post?.slug}`}>
      <div className="rounded-md backdrop-blur-sm p-4 bg-gradient-to-r from-indigo-600/10 to-cyan-800/10 hover:bg-gradient-to-l cursor-pointer">
        <p className="text-xs mb-2">{post?.category}</p>
        <h4 className="text-lg font-bold text-cyan-100">{post?.title}</h4>
        <p className="text-sm mt-2">{formattedDate}</p>
      </div>
    </Link>
  );
};

export default MainBlogCard;
