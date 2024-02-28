import { getAllPosts } from "./_getData";
import MainBlogCard from "../components/blog/MainBlogCard";

const BlogPage = () => {
  const blogMetaData = getAllPosts();
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
