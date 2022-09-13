import axios from "axios";
import { useMemo } from "react";
import { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const MyPosts = ({ id }) => {
  let navigate = useNavigate();
  const { userAuth } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  const getPosts = useMemo(
    () => async () => {
      await axios
        .get(`http://localhost:3002/posts?usersId=${id}&_sort=id&_order=desc`)
        .then((res) => {
          setPosts(res.data);
        });
    },
    [id]
  );

  const deletePost = async ({ id }) => {
    const confirm = window.confirm("You want to delete this post?");
    if (!confirm) return;
    await axios.delete(`http://localhost:3002/posts/${id}`);
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, [getPosts, id]);

  return (
    <Card
      className="col-12"
      style={{ background: "#eee", height: "40%", fontSize: ".9rem" }}
    >
      <Card.Header>
        <Card.Title>My Posts</Card.Title>
        <i
          className="fa-solid fa-plus position-absolute"
          title="New post"
          style={{
            cursor: "pointer",
            top: "13px",
            right: "13px",
            fontSize: "20px",
          }}
          onClick={() => navigate("/post")}
        ></i>
      </Card.Header>

      <Card.Body style={{ overflow: "auto" }}>
        {posts.map(
          (post, index) =>
            index < 5 && (
              <div key={index}>
                <Card.Text className="d-flex justify-content-around position-relative">
                  <span> {post.title}</span>-- <span>{post.createdDate}</span>{" "}
                  {userAuth.id === Number(id) && (
                    <i
                      className="fa-solid fa-trash"
                      title="Delete"
                      style={{ cursor: "pointer" }}
                      onClick={() => deletePost(post)}
                    ></i>
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
