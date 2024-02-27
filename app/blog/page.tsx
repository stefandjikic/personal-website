import fs from "fs";
import MainBlogCard from "../components/blog/MainBlogCard";
import matter from "gray-matter";
import { IBlogPostMetaData } from "../utils/interfaces";

const getPostMetaData = (): IBlogPostMetaData[] => {
  const folderPath = "posts/";
  const files = fs.readdirSync(folderPath);
  const mdFiles = files.filter((file) => file.endsWith(".mdx"));

  const posts = mdFiles.map((file) => {
    const filesContent = fs.readFileSync(`${folderPath}${file}`, "utf-8");
    const matterResult = matter(filesContent);
    return {
      ...matterResult.data,
      slug: file.replace(".mdx", ""),
    } as IBlogPostMetaData;
  });

  return posts;
};

const BlogPage = () => {
  const blogMetaData = getPostMetaData();
  const posts = blogMetaData.map((post) => {
    return <MainBlogCard key={post?.slug} post={post} />;
  });

  return (
    <div className="mt-14 mx-auto max-w-2xl">
      <h1 className="text-3xl text-center font-semibold mb-20 text-cyan-100">
        Blog
      </h1>
      <div className="flex flex-col gap-4 mb-24">{posts}</div>
    </div>
  );
};

export default BlogPage;
