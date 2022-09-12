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

  const deleteComment = async (id) => {
    const confirm = window.confirm("You want to delete this comment?");
    console.log(id);
    navigate(`/post/update/${id}`);
    // if (!confirm) return;
    // await axios.delete(`http://localhost:3002/comments/${id}`);
    // setUpdate(!update);
  };

  useEffect(() => {
    getUser();
  }, [usersId]);

  return (
    <>
      <div
        className="container p-3"
        style={{
          background: "rgb(204, 221, 221) none repeat scroll 0% 0%",
          borderRadius: "10px",
        }}
      >
        <div
          className="container d-flex align-items-end justify-content-start p-0 gap-3 mb-4"
          // style={{ background: "red" }}
          //           background: rgb(204, 221, 221) none repeat scroll 0% 0%;
          // border-radius: 10px;
        >
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
          <span
            className="btn btn-danger p-2 py-0 position-relative"
            title="Delete"
            onClick={() => deleteComment(id)}
          >
            edit
          </span>
        )}
      </div>
    </>
  );
};
