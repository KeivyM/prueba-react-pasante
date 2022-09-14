import axios from "axios";
import { useMemo } from "react";
import { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import endpoints from "../../utils/endpoints";
import { ModalConfirm } from "../modals";

export const MyPosts = ({ id }) => {
  const [show, setShow] = useState([false, ""]);
  let navigate = useNavigate();
  const { userAuth } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  const getPosts = useMemo(
    () => async () => {
      await axios
        .get(`${endpoints.getPosts}?usersId=${id}&_sort=id&_order=desc`)
        .then((res) => {
          setPosts(res.data);
        });
    },
    [id]
  );

  useEffect(() => {
    getPosts();
  }, [getPosts, show, id]);

  return (
    <Card
      className="col-12"
      style={{ background: "#eee", height: "40%", fontSize: ".9rem" }}
    >
      <ModalConfirm url="posts" show={show} setShow={setShow} />

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
                      onClick={() =>
                        setShow([
                          true,
                          "You want to remove this post?",
                          post.id,
                        ])
                      }
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
