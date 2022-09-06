import React from "react";
import { Avatar } from "../components/Avatar";
import { Comment } from "../components/Posts/Comment";
import { Post } from "../components/Posts/Post";

export const PostsDetails = () => {
  return (
    <div
      className="container-xl"
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

          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};
