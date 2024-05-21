import testPost from "./test.md?raw";
import { Post } from "../Post";
import { ComponentProps } from "react";

const posts: ComponentProps<typeof Post>["post"][] = [
  {
    title: "Test",
    content: testPost,
  },
];

export const Posts = () => {
  return posts.map(({ title }, index) => {
    return <a key={index}>{title}</a>;
  });
};
