import helloWorld from "./helloWorld.md?raw";

export type Post = {
  title: string;
  id: string;
  content: string;
};

export const posts = [
  {
    title: "Hello World.",
    id: "1",
    content: helloWorld,
  },
] satisfies Post[];
