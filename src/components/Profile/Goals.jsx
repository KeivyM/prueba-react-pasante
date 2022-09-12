import { Card } from "react-bootstrap";

export const Goals = () => {
  return (
    <Card
      className="col-12 section-goals-custom"
      style={{
        height: "20%",
        overflow: "auto",
      }}
    >
      <Card.Body>
        <Card.Title>Goals</Card.Title>
        <ul className="py-0 px-3 my-0">
          <li>Too spend less time booking travel</li>
          <li>Too narrow her options quickly</li>
        </ul>
      </Card.Body>
    </Card>
  );
};
