import { Button, Card, ListGroup } from "react-bootstrap";
import { useDataById } from "../../helpers/useDataById";
// import { dataById } from "../../helpers/useDataById";
import { Avatar } from "../Avatar";

export const CardPosts = ({ title, id, dateCreated }) => {
  // console.log({ title, author, dateCreated });
  // dataById(2);
  const { posts } = useDataById(2);
  // console.log(posts);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="secondary">More details</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {" "}
          <Avatar size={20} /> by Cras justo odio
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <small className="text-muted">{dateCreated}</small>
        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
      </Card.Footer>
    </Card>
  );
};
