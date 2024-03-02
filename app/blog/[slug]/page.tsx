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
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata | undefined> {
  const post = getAllPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
      publishedTime: post?.date,
      type: "article",
      locale: "en_US",
      url: `https://stefandjikic.com/blog/${post?.slug}`,
      siteName: "Stefan Djikic",
    },
  };
}

const PostPage = (props: PostPageProps) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  if (!post) {
    return notFound();
  }

  const formattedDate = getFormattedDate(post.data.date);

  return (
    <div className="mt-14 mb-24 mx-auto max-w-prose">
      <div className="max-w-2xl mb-20 ">
        <h1 className="text-2xl font-semibold text-cyan-50">
          {post.data.title}
        </h1>
        <p className="text-sm text-cyan-100">{formattedDate}</p>
      </div>

      <article className="prose prose-invert prose-quoteless prose-cyan">
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
};

export default PostPage;
