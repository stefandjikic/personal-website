import MainBlogCard from "@/app/_components/blog/MainBlogCard";
import { getAllPosts } from "@/app/blog/_getData";

interface TagPageProps {
  params: {
    tag: string;
  };
}

const TagPage = ({ params }: TagPageProps) => {
  console.log(params, "params");
  const tag = params?.tag;
  const posts = getAllPosts().filter(post => post.tags?.includes(tag as string));

  return (
    <div className="mt-14 mx-auto max-w-2xl">
      <h1 className="text-3xl text-center font-semibold mb-16 text-cyan-100">
        Posts tagged with {`"${tag}"`}
      </h1>
      <div className="flex flex-col gap-4 mb-24">
        {posts.map((post) => (
          <MainBlogCard key={post?.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TagPage;
