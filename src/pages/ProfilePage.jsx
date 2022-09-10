import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";

export const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [userValid, setUserValid] = useState(null);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  const validarUsuario = async () => {
    try {
      await axios.get(`http://localhost:3002/users/${id}`).then((res) => {
        setUser(res.data);
        setUserValid(true);
      });
    } catch (error) {
      setUserValid(false);
    }
  };

  const myFuncion = async () => {
    await axios
      .get(`http://localhost:3002/posts?usersId=${id}&_sort=id&_order=desc`)
      .then((res) => {
        setPosts(res.data);
      });
  };

  useEffect(() => {
    validarUsuario();
    myFuncion();
  }, []);

  return (
    <>
      {userValid ? (
        <div
          className="container-fluid py-2"
          style={{
            background: "#ddd",
            height: "calc(100vh - 58px)",
            // minWidth: "1000px",
          }}
        >
          <div
            className="container p-3 d-flex col-12 gap-3 "
            style={{
              background: "#fff",
              boxShadow: "0px 0px 15px rgba(0,0,0,.5)",
              height: "100%",
              overflow: "hidden",
              boxSizing: "border-box",
              borderRadius: "20px",
            }}
          >
            <Card
              style={{
                background: "#eee",
                padding: "10px",
                height: "100%",
                float: "left",
              }}
              className=" col-3"
            >
              <Card.Img
                variant="top"
                className="mx-auto mb-2 border border-5 rounded-circle"
                style={{ width: "150px" }}
                src={
                  "https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                }
              />
              <Card.Body
                className="text-center d-inline-block"
                style={{
                  display: "inline-block",
                  position: "relative",
                }}
              >
                <Card.Title className="">{user.username}</Card.Title>
                <Card.Subtitle className="mt-2">Web Designer</Card.Subtitle>
                <Card.Text className="mt-3 fst-italic">
                  Some quick example text to build on the card title and make.
                </Card.Text>
                <Card.Text
                  className="mt-3 p-4 mx-3 rounded-3"
                  style={{ background: "pink" }}
                >
                  Some quick example text to build on the card title and make.
                </Card.Text>
              </Card.Body>
            </Card>

            <div
              className="container p-0 m-0  d-flex w-100 gap-3"
              style={{
                // background: "#c29",

                position: "relative",
                boxSizing: "border-box",
              }}
            >
              <div
                className="w-100 d-flex gap-3"
                style={{
                  // background: "blue",
                  height: "100%",
                  flexWrap: "wrap",
                  alignItems: "center",
                  // gap: "1px",
                }}
              >
                <Card
                  className="w-100"
                  style={{ background: "#eee", height: "40%" }}
                >
                  <Card.Body>
                    <Card.Text>Bio</Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  className="w-100"
                  style={{ background: "#eee", height: "33.5%" }}
                >
                  <Card.Body>
                    <Card.Text>Personality</Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  className="w-100"
                  style={{ background: "#eee", height: "20%" }}
                >
                  <Card.Body>
                    <Card.Text>Goals</Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className="container p-0 m-0 d-flex flex-column w-100 gap-3">
                <Card
                  className="d-block col-12"
                  style={{ background: "#eee", height: "33.5%" }}
                >
                  <Card.Body>
                    <Card.Text>Motivations</Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  className="col-12"
                  style={{ background: "#eee", height: "20%" }}
                >
                  <Card.Body>
                    <Card.Text>Frustrations</Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  className="col-12"
                  style={{ background: "#eee", height: "40%" }}
                >
                  <Card.Header>
                    <Card.Title>My Posts</Card.Title>
                    <Button
                      className="position-absolute"
                      style={{ top: "5px", right: "5px" }}
                    >
                      <Link to="/post">+</Link>
                    </Button>
                  </Card.Header>
                  <Card.Body style={{ overflow: "auto" }}>
                    {posts.map(
                      (post, index) =>
                        index < 5 && (
                          <div key={index}>
                            <Card.Text className="d-flex justify-content-around">
                              <span> {post.title}</span>--{" "}
                              <span>{post.createdDate}</span>
                            </Card.Text>
                            {index < 4 && <hr />}
                          </div>
                        )
                    )}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
