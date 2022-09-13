import { Card, ProgressBar } from "react-bootstrap";

export const Personality = () => {
  return (
    <Card
      className="w-100 section-personality-custom"
      style={{ height: "33.5%", overflow: "auto" }}
    >
      <Card.Body>
        <Card.Title>Personality</Card.Title>
        <Card.Text className="mb-0">Introvert</Card.Text>
        <ProgressBar
          now={75}
          variant={"success"}
          style={{ backgroundColor: "#fff", border: "1px solid" }}
        />
        <Card.Text className="mb-0">Analytical</Card.Text>
        <ProgressBar
          now={40}
          variant={"success"}
          style={{ backgroundColor: "#fff", border: "1px solid" }}
        />
        <Card.Text className="mb-0">Loyal</Card.Text>
        <ProgressBar
          now={29}
          variant={"success"}
          style={{ backgroundColor: "#fff", border: "1px solid" }}
        />
        <Card.Text className="mb-0">Passive</Card.Text>
        <ProgressBar
          now={89}
          variant={"success"}
          style={{ backgroundColor: "#fff", border: "1px solid" }}
        />
      </Card.Body>
    </Card>
  );
};
