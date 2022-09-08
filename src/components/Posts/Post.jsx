import { Link } from "react-router-dom";
import { useUserById } from "../../hooks/useUserById";
import { Avatar } from "../Avatar";
import { Date } from "./Date";

export const Post = ({ post }) => {
  // const { title, subtitle, content, idUser, createdDate } = post;
  const { user } = useUserById(post?.idUser);

  return (
    <>
      <div className="d-flex align-items-center gap-2 mb-2">
        <Avatar />
        <span className="d-inline">
          by{" "}
          <strong className="text-decoration-underline">
            <Link to={`/profile/${user[0]?.id}`}>{user[0]?.username}</Link>
          </strong>
          <Date date={post?.createdDate} />
        </span>
      </div>
      <h3 className="">{post?.title} </h3>
      <h4 className="">{post?.subtitle} </h4>
      <p className="">{post?.content}</p>
    </>
  );
};
