import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddComment, Comment } from "../components/comments";
import { Post } from "../components/Posts";
import { NotFoundPage } from "./NotFoundPage";

export const PostsDetailsPage = () => {
  const [loading, setLoading] = useState("loading");
  const [postValid, setPostValid] = useState(null);
  const [update, setUpdate] = useState(true);
  const [post, setPost] = useState({ usersId: "" });

  const [comments, setComments] = useState([]);
  let { id } = useParams();

  const getPost = async () => {
    try {
      await axios.get(`http://localhost:3002/posts/${id}`).then((res) => {
        setPost(res.data);
        setPostValid(true);
        setLoading("loaded");
      });
    } catch (error) {
      // console.log(error);
      setPostValid(false);
      setLoading("loaded");
    }
  };

  const getComments = async () => {
    await axios
      .get(`http://localhost:3002/comments?postsId=${id}`)
      .then((res) => {
        setComments(res.data);
      });
  };

  // useEffect(() => {
  //   getPost();
  //   getComments();
  // }, []);

  useEffect(() => {
    getPost();
  }, [id]);

  useEffect(() => {
    getComments();
  }, [post, update]);

  return (
    <>
      {loading === "loading" ? (
        <h2>Cargando...</h2>
      ) : postValid ? (
        <div
          className="container-xxl"
          style={{
            background: "rgb(234, 207, 255) none repeat scroll 0% 0%",
            minHeight: "100vh",
            height: "max-content",
          }}
        >
          <h1 className="text-center pt-3">Post Details</h1>
          <div
            className="container w-75 p-5"
            style={{
              background: "rgb(118, 75, 133) none repeat scroll 0% 0%",
              height: "max-content",
            }}
          >
            <Post post={post} />
            <hr />

            <div
              className="container p-4"
              style={{ background: "#cdd", borderRadius: "10px" }}
            >
              <span className="d-block mb-3">Comments</span>

              {comments.map((comment, index) => {
                return (
                  <Comment
                    key={index}
                    username={comment.username}
                    comment={comment.comment}
                    usersId={comment.usersId}
                    id={comment.id}
                    update={update}
                    setUpdate={setUpdate}
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
