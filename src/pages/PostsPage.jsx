// import { useContext } from "react";
import { Pagination } from "react-bootstrap";
// import { PostsContext } from "../context/PostsContext";
import { items } from "../helpers/ItemsPagination";

export const PostsPage = () => {
  // const { posts } = useContext(PostsContext);

  // console.log(posts);

  return (
    <div>
      PostsPage
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
};
