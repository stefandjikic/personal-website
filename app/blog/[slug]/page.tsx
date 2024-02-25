import fs from "fs";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const path = `posts/${slug}.md`;
  const file = fs.readFileSync(path, "utf-8");
  const matterResult = matter(file);
  return matterResult;
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
    <div className="mt-14 mb-24 mx-auto max-w-3xl">
      <h1 className="text-3xl text-center font-semibold mb-20 text-cyan-50">
        {post.data.title}
      </h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
