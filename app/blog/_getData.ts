import fs from "fs";
import matter from "gray-matter";
import { IBlogPostMetaData } from "../utils/interfaces";

export const getAllPosts = (): IBlogPostMetaData[] => {
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
