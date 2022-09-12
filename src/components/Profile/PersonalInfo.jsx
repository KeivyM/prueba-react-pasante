import { Card } from "react-bootstrap";

export const PersonalInfo = ({ username }) => {
  return (
    <Card
      style={{
        background: "#eee",
        padding: "10px",
        height: "100%",
        float: "left",
      }}
      className=" col-3 "
    >
      <Card.Img
        variant="top"
        className="mx-auto mb-2 border border-5 rounded-circle"
        style={{ width: "150px" }}
        src={"https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"}
      />
      <Card.Body
        className="text-center d-inline-block"
        style={{
          display: "inline-block",
          position: "relative",
        }}
      >
        <Card.Title className="">{username}</Card.Title>
        <Card.Subtitle className="mt-2">Web Designer</Card.Subtitle>
        <Card.Text className="mt-3 fst-italic">
          Some quick example text to build on the card title and make.
        </Card.Text>
        <Card.Text
          className="mt-3 p-4 mx-3 rounded-3"
          style={{ background: "pink" }}
        >
          <strong>Age:</strong>
          <span>24</span>
          <br />
          <strong>Status:</strong>
          <span>Single</span>
          <br />
          <strong>Location:</strong>
          <span>Brooklyn</span>
          <br />
          <div
            className="d-flex gap-1 flex-wrap mt-2"
            style={{ fontSize: ".8rem" }}
          >
            <span
              className="p-1 rounded-2"
              style={{ background: "#0a53be", color: "white" }}
            >
              Organized
            </span>
            <span
              className="p-1 rounded-2"
              style={{ background: "#0a53be", color: "white" }}
            >
              Protective
            </span>
            <span
              className="p-1 rounded-2"
              style={{ background: "#0a53be", color: "white" }}
            >
              Practical
            </span>
            <span
              className="p-1 rounded-2"
              style={{ background: "#0a53be", color: "white" }}
            >
              Puntual
            </span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};