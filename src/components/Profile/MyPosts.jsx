import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const MyPosts = ({ id }) => {
  const { userAuth } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await axios
      .get(`http://localhost:3002/posts?usersId=${id}&_sort=id&_order=desc`)
      .then((res) => {
        setPosts(res.data);
      });
  };

  const deletePost = async ({ id }) => {
    const confirm = window.confirm("You want to delete this post?");
    if (!confirm) return;
    await axios.delete(`http://localhost:3002/posts/${id}`);
    //eliminar tambien los comentarios relacionados
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, [id]);

  return (
    <Card
      className="col-12"
      style={{ background: "#eee", height: "40%", fontSize: ".9rem" }}
    >
      <Card.Header>
        <Card.Title>My Posts</Card.Title>
        <Link
          title="new post"
          className="btn position-absolute px-2 py-0 fs-2 mx-2"
          style={{ top: "0px", right: "0px", border: "none" }}
          to="/post"
        >
          +
        </Link>
      </Card.Header>

      <Card.Body style={{ overflow: "auto" }}>
        {posts.map(
          (post, index) =>
            index < 5 && (
              <div key={index}>
                <Card.Text className="d-flex justify-content-around position-relative">
                  <span> {post.title}</span>-- <span>{post.createdDate}</span>{" "}
                  {userAuth.id === Number(id) && (
                    <span
                      className="btn btn-danger p-2 py-0 position-relative"
                      title="Delete"
                      onClick={() => deletePost(post)}
                    >
                      D
                    </span>
                  )}
                </Card.Text>
                {index < 4 && <hr />}
              </div>
            )
        )}
      </Card.Body>
    </Card>
  );
};
