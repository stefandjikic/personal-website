import { CustomMDX } from "@/app/components/mdx";
import fs from "fs";
import matter from "gray-matter";
import { getAllPosts } from "../_getData";

const getPostContent = (slug: string) => {
  const path = `posts/${slug}.mdx`;
  const file = fs.readFileSync(path, "utf-8");
  const matterResult = matter(file);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getAllPosts();
  return posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
};

interface PostPageProps {
  params: {
    slug: string;
  };
}

const PostPage = (props: PostPageProps) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  console.log(post, "post");

  const formattedDate = new Date(post?.data?.date).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

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
