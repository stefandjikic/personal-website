import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllPosts, getPostContent } from "../_getData";
import { CustomMDX } from "@/app/_components/mdx";
import { getFormattedDate } from "@/app/utils/helpers";

// staticly generate routes instead of server side rendering - on demand at request time
export const generateStaticParams = async () => {
  const posts = getAllPosts();
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = getAllPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
      publishedTime: new Date(post?.date).toISOString(),
      modifiedTime: post?.lastmod
        ? new Date(post?.lastmod).toISOString()
        : new Date(post?.date).toISOString(),
      type: "article",
      locale: "en_US",
      url: `https://stefandjikic.com/blog/${post?.slug}`,
      siteName: "Stefan Djikic",
      authors: post?.author ? [post.author] : [],
    },
  };
}

const PostPage = async (props: PostPageProps) => {
  const { slug } = await props.params;
  const post = getPostContent(slug);

  if (!post) {
    return notFound();
  }

  const formattedDate = getFormattedDate(post.data.date);
  const formattedLastUpdated = getFormattedDate(post.data.lastmod);
  const tags = post.data?.tags || [];

  return (
    <div className="mt-14 mb-24 mx-auto max-w-prose">
      <div className="max-w-2xl mb-16 ">
        <h1 className="text-2xl mb-2 font-semibold text-cyan-50">
          {post.data.title}
        </h1>
        {post.data.lastmod ? (
          <p className="text-xs italic text-cyan-100">
            Last updated: {formattedLastUpdated}
          </p>
        ) : (
          <p className="text-xs text-cyan-100 italic">
            Posted: {formattedDate}
          </p>
        )}
        {/* TODO: Consider component */}
        {tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.data.tags.map((tag: string) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="px-2 py-1 bg-cyan-950/20 text-cyan-100 text-xs rounded-md hover:bg-cyan-100/10"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </div>
      <article className="prose prose-invert prose-quoteless prose-cyan">
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
};

export default PostPage;
