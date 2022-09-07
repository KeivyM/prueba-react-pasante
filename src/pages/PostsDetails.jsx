import React, { useContext } from "react";
import { Avatar } from "../components/Avatar";
import { AddComment } from "../components/Posts/AddComment";
import { Comment } from "../components/Posts/Comment";
import { Post } from "../components/Posts/Post";
import { CommentsContex } from "../context/CommentsContext";

export const PostsDetails = () => {
  const { comments } = useContext(CommentsContex);

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
        <Post />
        <hr />

        <div className="container">
          <span className="d-block mb-3">Comments</span>

          {/* <Comment />
          <Comment /> */}

          {comments.map((comment, index) => {
            return (
              <Comment
                key={index}
                username={comment.username}
                comment={comment.comment}
              />
            );
          })}
          <AddComment />
        </div>
      </div>
    </div>
  );
};
