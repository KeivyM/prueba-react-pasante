import { Card } from "react-bootstrap";

export const Frustrations = () => {
  return (
    <Card
      className="col-12 section-frustrations-custom"
      style={{
        height: "20%",
        overflow: "auto",
      }}
    >
      <Card.Body>
        <Card.Title>Frustrations</Card.Title>
        <ul className="py-0 px-3 my-0">
          <li>Too much spend booking - she's busy!</li>
          <li>Too many websites visited per trip</li>
        </ul>
      </Card.Body>
    </Card>
  );
};
