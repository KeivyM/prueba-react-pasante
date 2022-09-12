import axios from "axios";
import { useMemo } from "react";
import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../Avatar";

export const CardPosts = ({ title, usersId, createdDate, id }) => {
  const [user, setUser] = useState({});

  let navigate = useNavigate();

  const getUser = useMemo(
    () => async () => {
      await axios
        .get(`http://localhost:3002/users/${usersId}`)
        .then((res) => setUser(res.data));
    },
    [usersId]
  );

  useEffect(() => {
    getUser();
  }, [getUser, usersId]);

  return (
    <Card className="card-cardPosts" onClick={() => navigate(`${id}`)}>
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
