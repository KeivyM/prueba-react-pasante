import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../Avatar";

export const CardPosts = ({ title, usersId, createdDate, id }) => {
  const [user, setUser] = useState({});

  let navigate = useNavigate();

  const getUser = async () => {
    await axios
      .get(`http://localhost:3002/users/${usersId}`)
      .then((res) => setUser(res.data));
  };

  const postDetails = () => {
    navigate(`${id}`);
  };

  useEffect(() => {
    getUser();
  }, [usersId]);

  return (
    <Card
      className="card-cardPosts"
      style={{ width: "18rem" }}
      onClick={postDetails}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {" "}
          <Avatar size={20} /> by {user?.username}
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <small className="text-muted">{createdDate}</small>
      </Card.Footer>
    </Card>
  );
};
