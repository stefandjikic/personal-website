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

export const getTags = (): string[] => {
  const posts = getAllPosts();
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));
  return tags;
};

export const getTagsWithCount = (): { tag: string; count: number }[] => {
  const posts = getAllPosts();
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));
  const tagsWithCount =
    tags.map((tag) => {
      return {
        tag,
        count: posts.filter((post) => post.tags?.includes(tag)).length,
      };
    }) || [];
  return tagsWithCount;
};

export const getPostsByTag = (tag: string): IBlogPostMetaData[] => {
  const posts = getAllPosts();
  return posts.filter((post) => post.tags?.includes(tag));
};
