import { Avatar } from "../Avatar";
import { Date } from "./Date";

export const Post = (post) => {
  return (
    <>
      <div className="d-flex align-items-center gap-2 mb-2">
        <Avatar />
        <span className="d-inline">
          by{" "}
          <strong className="text-decoration-underline">Lorena Moreno</strong>
          <Date date={post?.post?.createdDate} />
        </span>
      </div>
      <h3 className="">{post?.post?.title} </h3>
      <h4 className="">{post?.post?.subtitle} </h4>
      <p className="">{post?.post?.content}</p>
    </>
  );
};
