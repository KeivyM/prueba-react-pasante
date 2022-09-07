import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Avatar } from "../Avatar";

export const Comment = ({ username, comment }) => {
  const { users, userAuth } = useContext(AuthContext);

  return (
    <div className="container mb-3">
      <div className="d-flex align-items-center gap-2 mb-2">
        <Avatar size={25} />
        <span className="d-inline">
          <strong className="text-decoration-underline">{username}</strong>
        </span>
      </div>
      <div className="container mx-3">{comment}</div>
    </div>
  );
};
