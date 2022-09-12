import axios from "axios";
import { useMemo } from "react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { Avatar } from "../Avatar";

export const Post = ({ post }) => {
  const { userAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const { title, subtitle, content, usersId, createdDate, id } = post;

  const getUser = useMemo(
    () => async () => {
      try {
        axios
          .get(`http://localhost:3002/users/${usersId}`)
          .then((res) => setUsername(res.data.username));
      } catch (error) {
        console.log(error);
      }
    },
    [usersId]
  );

  useEffect(() => {
    getUser();
  }, [getUser, usersId]);

  return (
    <>
      <div className="container p-3 position-relative rounded-3 post-on-post-details-custom">
        <div className="container d-flex align-items-end justify-content-start p-0 gap-3 mb-4">
          <strong>
            <Link
              className="text-decoration-none d-flex  align-items-end"
              to={`/profile/${usersId}`}
            >
              <Avatar />
              <span className="mx-2">{username}</span>
            </Link>
          </strong>
          <span className="">{createdDate}.</span>
        </div>
        <div className="container px-3 py-2">
          <h3 className="">{title} </h3>
          <h5 className="">{subtitle} </h5>
          <p className="">{content}</p>
        </div>
        {userAuth.id === Number(usersId) && (
          <i
            className="fa-solid fa-pen-to-square position-absolute"
            title="Edit Post"
            onClick={() => navigate(`/post/${id}`)}
            style={{ cursor: "pointer", top: "15px", right: "15px" }}
          ></i>
        )}
      </div>
    </>
  );
};
