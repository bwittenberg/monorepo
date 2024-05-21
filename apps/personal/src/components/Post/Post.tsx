import { MarkdownPreview } from "@bwittenberg/ui";
import { type Post as PostType } from "./types";

type Props = {
  post: PostType;
};

export const Post = ({ post }: Props) => {
  return <MarkdownPreview markdownString={post.content} />;
};
