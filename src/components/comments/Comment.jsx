import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Avatar } from "../Avatar";
import { ModalConfirm } from "../modals";

export const Comment = ({
  username,
  comment,
  usersId,
  id,
  update,
  setUpdate,
}) => {
  const [show, setShow] = useState([false, ""]);
  const { userAuth } = useContext(AuthContext);

  useEffect(() => {
    setUpdate(!update);
  }, [setUpdate, show, id]);

  return (
    <div className="container mb-3 p-2 position-relative rounded-3 one-comment-custom">
      <ModalConfirm url="comments" show={show} setShow={setShow} />
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
          onClick={() =>
            setShow([true, "You want to remove this comment?", id])
          }
        ></i>
      )}
    </div>
  );
};
