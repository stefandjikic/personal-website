import fs from "fs";
import matter from "gray-matter";
import { IBlogPostMetaData } from "../utils/interfaces";
import { sortBlogPostsByDate } from "../utils/helpers";

export const getAllPosts = (): IBlogPostMetaData[] => {
  const folderPath = "posts/";
  const files = fs.readdirSync(folderPath);
  const mdFiles = files.filter((file) => file.endsWith(".mdx"));

  const posts = mdFiles.map((file) => {
    const filesContent = fs.readFileSync(`${folderPath}${file}`, "utf-8");
    const matterResult = matter(filesContent);
    // TODO: test out compileMDX from next-mdx-remote/rsc for adding frontmatter
    return {
      ...matterResult.data,
      slug: file.replace(".mdx", ""),
    } as IBlogPostMetaData;
  });

  return sortBlogPostsByDate(posts);
};

export const getPostContent = (slug: string) => {
  const path = `posts/${slug}.mdx`;
  if (!fs.existsSync(path)) {
    return null;
  }
  const file = fs.readFileSync(path, "utf-8");
  const matterResult = matter(file);
  return matterResult;
};

export const getLatestPosts = (limit: number): IBlogPostMetaData[] => {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
};
