import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useUserById } from "../hooks/useUserById";
import { NotFoundPage } from "./NotFoundPage";

export const ProfilePage = () => {
  let { id } = useParams();

  const { user } = useUserById(Number(id));

  return (
    <>
      {/* {user.length != 0 ? ( */}
      <div
        className="container-lg p-3"
        style={{
          // background: "red",
          height: "100vh",
          minWidth: "1000px",
        }}
      >
        <Card
          style={{
            background: "#eee",
            padding: "10px",
            height: "100%",
            float: "left",
          }}
          className="col-3"
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
            <Card.Title className="">{user[0]?.username}</Card.Title>
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
          className="d-grid col-9 px-3 d-flex justify-content-around"
          style={{
            // background: "blue",
            height: "100%",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Card
            className="col-6"
            style={{ maxWidth: "330px", height: "210px" }}
          >
            <Card.Body>
              <Card.Text>dsjfds</Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="col-6"
            style={{ maxWidth: "330px", height: "225px" }}
          >
            <Card.Body>
              <Card.Text>dsjfds</Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="col-6"
            style={{ maxWidth: "330px", height: "200px" }}
          >
            <Card.Body>
              <Card.Text>dsjfds</Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="col-6"
            style={{ maxWidth: "330px", height: "150px" }}
          >
            <Card.Body>
              <Card.Text>dsjfds</Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="col-6"
            style={{ maxWidth: "330px", height: "100px" }}
          >
            <Card.Body>
              <Card.Text>dsjfds</Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="col-6"
            style={{ maxWidth: "330px", height: "170px" }}
          >
            <Card.Body>
              <Card.Text>dsjfds</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* ) : (
        <NotFoundPage />
      )} */}
    </>
  );
};
