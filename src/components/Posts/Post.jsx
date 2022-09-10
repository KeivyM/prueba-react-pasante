import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../Avatar";
import { Date } from "./Date";

export const Post = ({ post }) => {
  const [username, setUsername] = useState("");

  const { title, subtitle, content, usersId, createdDate } = post;

  const getUser = async () => {
    try {
      axios
        .get(`http://localhost:3002/users/${usersId}`)
        .then((res) => setUsername(res.data.username));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [usersId]);

  return (
    <>
      <div className="d-flex align-items-center gap-2 mb-2">
        <Avatar />
        <span className="d-inline">
          by{" "}
          <strong className="text-decoration-underline">
            <Link to={`/profile/${usersId}`}>{username}</Link>
          </strong>
          <Date date={createdDate} />
        </span>
      </div>
      <h3 className="">{title} </h3>
      <h4 className="">{subtitle} </h4>
      <p className="">{content}</p>
    </>
  );
};
