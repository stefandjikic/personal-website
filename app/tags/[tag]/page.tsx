import MainBlogCard from "@/app/_components/blog/MainBlogCard";
import { getAllPosts, getPostsByTag } from "@/app/blog/_getData";
import { Metadata } from "next";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  return {
    title: `Posts on ${params.tag}`,
    description: `Posts tagged with ${params.tag}`,
  };
}

const TagPage = ({ params }: TagPageProps) => {
  const tag = params?.tag;
  const posts = getPostsByTag(tag);

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
