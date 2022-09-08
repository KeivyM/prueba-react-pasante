import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AddComment, Comment } from "../components/comments";
import { Post } from "../components/Posts";
import { CommentsContex } from "../context";
import { filterComments } from "../helpers/filterComments";
import { usePostById } from "../hooks/usePostById";

export const PostsDetails = () => {
  let { id } = useParams();
  const { post } = usePostById(Number(id));

  const { comments } = useContext(CommentsContex);

  const array = filterComments(Number(id), comments);
  // console.log(array);
  return (
    <div
      className="container-xxl"
      style={{ background: "#dee", minHeight: "100vh", height: "max-content" }}
    >
      <h2 className="text-center pt-3 fs-1">Post Details</h2>
      <div
        className="container w-75 p-5"
        style={{ background: "#dae", height: "max-content" }}
      >
        <Post post={post[0]} />
        <hr />

        <div className="container">
          <span className="d-block mb-3">Comments</span>

          {array.map((comment, index) => {
            // console.log(comment);
            return (
              <Comment
                key={index}
                username={comment.username}
                comment={comment.comment}
                idUser={comment.idUser}
              />
            );
          })}
          <AddComment idPost={post[0]?.id} />
        </div>
      </div>
    </div>
  );
};
