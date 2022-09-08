import { Link } from "react-router-dom";
import { Avatar } from "../Avatar";

export const Comment = ({ username, comment, idUser }) => {
  return (
    <div className="container mb-3">
      <div className="d-flex align-items-center gap-2 mb-2">
        <Avatar size={25} />
        <span className="d-inline">
          <strong className="text-decoration-underline">
            <Link to={`/profile/${idUser}`}>{username}</Link>
          </strong>
        </span>
      </div>
      <div className="container mx-3">{comment}</div>
    </div>
  );
};
