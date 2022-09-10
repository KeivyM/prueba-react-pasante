import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { CardPosts } from "../components/Posts";

export const PostsPage = () => {
  const [active, setActive] = useState(1);
  const [posteos, setPosteos] = useState([]);
  const [pag, setPag] = useState(1);

  const myFuncion = async () => {
    await axios
      .get(`http://localhost:3002/posts?_page=${active}&_limit=5`)
      .then((res) => {
        setPosteos(res.data);
      });
  };

  useEffect(() => {
    myFuncion();
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
        background: "#ddd",
        height: "calc(100vh - 58px)",
        minHeight: "400px",
      }}
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
        {posteos.map((post, index) => (
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
