import { Link } from "react-router-dom";
import { posts } from "./data";

export const Posts = () => {
  return posts.map(({ title, id }, index) => {
    return (
      <Link to={`/posts/${id}`} key={index}>
        {title}
      </Link>
    );
  });
};
