import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Avatar } from "../Avatar";

export const Comment = ({
  username,
  comment,
  usersId,
  id,
  update,
  setUpdate,
}) => {
  const { userAuth } = useContext(AuthContext);

  const deleteComment = async (id) => {
    const confirm = window.confirm("You want to delete this comment?");
    if (!confirm) return;
    await axios.delete(`http://localhost:3002/comments/${id}`);
    setUpdate(!update);
  };

  return (
    <div
      className="container mb-3 p-2 position-relative"
      style={{
        background: "rgb(247, 255, 207)",
        borderRadius: "10px",
        border: "1px solid",
      }}
    >
      <div className="mb-2">
        <strong>
          <Link className="text-decoration-none" to={`/profile/${usersId}`}>
            <Avatar size={25} />
            <span className="mx-2">{username}</span>
          </Link>
        </strong>
      </div>
      <div className="container mx-3">{comment}</div>
      {userAuth.id === Number(usersId) && (
        <i
          className="fa-solid fa-trash position-absolute"
          title="Delete"
          style={{ cursor: "pointer", top: "10px", right: "10px" }}
          onClick={() => deleteComment(id)}
        ></i>
      )}
    </div>
  );
};
