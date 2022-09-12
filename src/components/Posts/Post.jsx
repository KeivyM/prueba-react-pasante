import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { Avatar } from "../Avatar";

export const Post = ({ post }) => {
  const { userAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const { title, subtitle, content, usersId, createdDate, id } = post;

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
      <div
        className="container p-3 position-relative"
        style={{
          background: "rgb(204, 221, 221) none repeat scroll 0% 0%",
          borderRadius: "10px",
        }}
      >
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
        <div
          className="container px-3 py-2"
          // style={{ background: "#cdd", borderRadius: "10px" }}
        >
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

        {/* <i className="fa-solid fa-ellipsis-vertical"></i>
        <i className="fa-solid fa-trash"></i>
        <i className="fa-solid fa-plus"></i>
        <i className="fa-solid fa-right-from-bracket"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-paper-plane"></i> */}
      </div>
    </>
  );
};
