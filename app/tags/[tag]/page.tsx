import MainBlogCard from "@/app/_components/blog/MainBlogCard";
import { getPostsByTag, getTags } from "@/app/blog/_getData";
import { Metadata } from "next";

export const generateStaticParams = async () => {
  const tags = getTags();
  return tags.map((tag) => ({
    tag,
  }));
};

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Posts on ${tag}`,
    description: `Posts tagged with ${tag}`,
  };
}

const TagPage = async ({ params }: TagPageProps) => {
  const { tag } = await params;
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
