import axios from "axios";
import { useMemo } from "react";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { CardPosts } from "../components/Posts";
import endpoints from "../utils/endpoints";

export const PostsPage = () => {
  const [active, setActive] = useState(1);
  const [posts, setPosts] = useState([]);
  const [pag, setPag] = useState(1);

  const getPosts = useMemo(
    () => async () => {
      await axios
        .get(`${endpoints.getPosts}?_page=${active}&_limit=5`)
        .then((res) => {
          setPosts(res.data);
        });
    },
    [active]
  );

  useEffect(() => {
    getPosts();
  }, [getPosts, active]);

  const paginas = async () => {
    await axios.get(`${endpoints.getPosts}`).then((res) => {
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
    <div className="container-fluid px-5 text-center page-posts-custom">
      <h1 className="col-12 text-center py-2 m-0  title-posts-custom">Posts</h1>
      <div className="d-flex justify-content-center rounded-3 flex-wrap py-5 gap-3 container-post-custom">
        {posts.length < 1 ? (
          <h5>No posts</h5>
        ) : (
          posts.map((post, index) => <CardPosts key={index} {...post} />)
        )}
      </div>
      <div className="container d-flex justify-content-center pt-2">
        <Pagination
          className="btns-pagination-custom"
          id="btns-pagination-custom"
          style={{ bottom: "5%" }}
        >
          {items}
        </Pagination>
      </div>
    </div>
  );
};
