import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddComment, Comment } from "../components/comments";
import { Post } from "../components/Posts";
import { NotFoundPage } from "./NotFoundPage";

export const PostsDetails = () => {
  const [postValid, setPostValid] = useState(null);
  const [update, setUpdate] = useState(true);
  const [post, setPost] = useState({ usersId: "" });

  const [comentarios, setComentarios] = useState([]);
  let { id } = useParams();

  const getPost = async () => {
    try {
      await axios.get(`http://localhost:3002/posts/${id}`).then((res) => {
        setPost(res.data);
        setPostValid(true);
      });
    } catch (error) {
      console.log(error);
      setPostValid(false);
    }
  };

  const getComments = async () => {
    await axios
      .get(`http://localhost:3002/comments?postsId=${id}`)
      .then((res) => {
        setComentarios(res.data);
      });
  };

  useEffect(() => {
    getPost();
    getComments();
  }, [update]);

  return (
    <>
      {postValid ? (
        <div
          className="container-xxl"
          style={{
            background: "#dee",
            minHeight: "100vh",
            height: "max-content",
          }}
        >
          <h2 className="text-center pt-3 fs-1">Post Details</h2>
          <div
            className="container w-75 p-5"
            style={{ background: "#dae", height: "max-content" }}
          >
            <Post post={post} />
            <hr />

            <div className="container">
              <span className="d-block mb-3">Comments</span>

              {comentarios.map((comment, index) => {
                return (
                  <Comment
                    key={index}
                    username={comment.username}
                    comment={comment.comment}
                    usersId={comment.usersId}
                  />
                );
              })}
              <AddComment
                postsId={post.id}
                setUpdate={setUpdate}
                update={update}
              />
            </div>
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
