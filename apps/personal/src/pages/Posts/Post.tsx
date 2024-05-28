import { useLoaderData } from "react-router-dom";
import { posts } from "./data";
import { MarkdownPreview } from "@bwittenberg/ui";

type LoaderProps = {
  params: {
    postId: string;
  };
};

export const loader = async ({ params }: LoaderProps) => {
  const post = posts.find((p) => p.id === params.postId);
  return { post };
};

export const Post = () => {
  const { post } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!post) {
    return null;
  }

  return <MarkdownPreview markdownString={post.content} />;
};
