import { Card, ProgressBar } from "react-bootstrap";

export const Motivations = () => {
  return (
    <Card
      className="d-block col-12 section-motivations-custom"
      style={{ height: "33.5%" }}
    >
      <Card.Body>
        <Card.Title>Motivations</Card.Title>
        <Card.Text className="mb-0">Price</Card.Text>
        <ProgressBar
          now={35}
          variant={"success"}
          style={{ backgroundColor: "#fff", border: "1px solid" }}
        />
        <Card.Text className="mb-0">Comfort</Card.Text>
        <ProgressBar
          now={60}
          variant={"success"}
          style={{ backgroundColor: "#fff", border: "1px solid" }}
        />
        <Card.Text className="mb-0">Speed</Card.Text>
        <ProgressBar
          now={25}
          variant={"success"}
          style={{ backgroundColor: "#fff", border: "1px solid" }}
        />
      </Card.Body>
    </Card>
  );
};
