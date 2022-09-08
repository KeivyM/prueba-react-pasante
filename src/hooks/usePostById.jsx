import { useContext } from "react";
import { PostsContext } from "../context";

export const usePostById = (id) => {
  // debugger;
  const { posts } = useContext(PostsContext);
  const post = posts.filter((post) => post.id === id);

  return { post };
};
