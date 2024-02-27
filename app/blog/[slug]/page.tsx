import { CustomMDX } from "@/app/components/mdx";
import fs from "fs";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const path = `posts/${slug}.mdx`;
  const file = fs.readFileSync(path, "utf-8");
  const matterResult = matter(file);
  return matterResult;
};

// TODO: Make pages static:
export const generateStaticParams = async () => {
  const posts = fs.readdirSync("posts");
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.replace(".mdx", ""),
      },
    };
  });
  return paths;
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

  return (
    <div className="mt-14 mb-24 mx-auto max-w-prose">
      <div className="max-w-2xl mb-20 ">
        <h1 className="text-2xl font-semibold text-cyan-50">
          {post.data.title}
        </h1>
        <p>{post?.data?.date}</p>
      </div>

      <article className="prose prose-invert prose-quoteless prose-cyan">
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
};

export default PostPage;
