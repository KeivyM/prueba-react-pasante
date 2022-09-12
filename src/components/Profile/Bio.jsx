import { Card } from "react-bootstrap";

export const Bio = () => {
  return (
    <Card
      className="w-100 section-bio-custom"
      style={{
        height: "40%",
        overflow: "auto",
      }}
    >
      <Card.Body>
        <Card.Title>Bio</Card.Title>
        <Card.Text>
          Jill is a RegionalDirector who travels 4-8 times each month for work.
          She has a specific region in which she travel, and she often visits
          the same cities and stays at the same hotel, She is frustrated by the
          fact that no matter how frequently ahe takes similar trips.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
