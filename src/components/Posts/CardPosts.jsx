import { Button, Card, ListGroup } from "react-bootstrap";
import { useDataById } from "../../helpers/useDataById";
import { Avatar } from "../Avatar";

export const CardPosts = ({ title, idUser, createdDate }) => {
  const { user } = useDataById(idUser);
  const { username } = user;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="secondary">More details</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {" "}
          <Avatar size={20} /> by {user[0]?.username}
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <small className="text-muted">{createdDate}</small>
        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
      </Card.Footer>
    </Card>
  );
};
