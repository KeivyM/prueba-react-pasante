import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserById } from "../../hooks/useUserById";
import { Avatar } from "../Avatar";

export const CardPosts = ({ title, usersId, createdDate, id }) => {
  let navigate = useNavigate();
  const { user } = useUserById(usersId);
  // const { username } = user;

  const moreDetails = () => {
    navigate(`${id}`);
  };

  return (
    <Card
      className="card-cardPosts"
      style={{ width: "18rem" }}
      onClick={moreDetails}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Button variant="secondary" onClick={moreDetails}>
          More details
        </Button> */}
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
