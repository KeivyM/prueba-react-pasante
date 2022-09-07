import { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { CardPosts } from "../components/Posts";
import { PostsContext } from "../context";
import { items } from "../helpers/ItemsPagination";

export const PostsPage = () => {
  const { posts } = useContext(PostsContext);

  const array = [1, 2, 3, 4, 5];
  return (
    <div
      className="container-xl px-5 text-center"
      style={{ background: "#ddd", height: "max-content", minHeight: "400px" }}
    >
      <h3
        className="col-12 text-center py-2"
        style={{ background: "grey", display: "grid", height: "max-content" }}
      >
        Posts
      </h3>
      <div
        className="d-flex justify-content-center"
        style={{
          background: "#ada",
          height: "max-content",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {posts.map((post, index) => (
          <CardPosts key={index} {...post} />
        ))}
      </div>
      <div
        className="container d-inline-flex justify-content-center pt-2"
        // style={{ background: "red" }}
      >
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
};
