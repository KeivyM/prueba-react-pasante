import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { CardPosts } from "../components/Posts";

export const PostsPage = () => {
  const [active, setActive] = useState(1);
  const [posts, setPosts] = useState([]);
  const [pag, setPag] = useState(1);

  const getPosts = async () => {
    await axios
      .get(`http://localhost:3002/posts?_page=${active}&_limit=5`)
      .then((res) => {
        setPosts(res.data);
      });
  };

  useEffect(() => {
    getPosts();
  }, [active]);

  const paginas = async () => {
    await axios.get(`http://localhost:3002/posts`).then((res) => {
      setPag(res.data.length);
    });
  };

  useEffect(() => {
    paginas();
  }, []);

  let items = [];
  for (let number = 1; number <= Math.ceil(pag / 5); number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={() => setActive(number)}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div
      className="container-fluid px-5 text-center"
      style={{
        background: "rgb(234, 207, 255)",
        height: "calc(100% - 58px)",
        minHeight: "calc(100vh - 58px)",
      }}
    >
      <h1 className="col-12 text-center py-2 m-0">Posts</h1>
      <div
        className="d-flex justify-content-center py-5 gap-3"
        style={{
          // background: "#ada",
          height: "max-content",
          flexWrap: "wrap",
        }}
      >
        {posts.map((post, index) => (
          <CardPosts key={index} {...post} />
        ))}
      </div>
      <div className="container d-flex justify-content-center pt-2">
        <Pagination style={{ bottom: "5%" }}>{items}</Pagination>
      </div>
    </div>
  );
};
