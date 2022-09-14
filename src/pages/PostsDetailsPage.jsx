import axios from "axios";
import { useMemo } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddComment, Comment } from "../components/comments";
import { Loading } from "../components/Loading";
import { Post } from "../components/Posts";
import endpoints from "../utils/endpoints";
import { NotFoundPage } from "./NotFoundPage";

export const PostsDetailsPage = () => {
  const [loading, setLoading] = useState("loading");
  const [postValid, setPostValid] = useState(null);
  const [update, setUpdate] = useState(true);
  const [post, setPost] = useState({ usersId: "" });

  const [comments, setComments] = useState([]);
  let { id } = useParams();

  const getPost = useMemo(
    () => async () => {
      await axios
        .get(`${endpoints.getPosts}/${id}`)
        .then((res) => {
          setPost(res.data);
          setPostValid(true);
          setLoading("loaded");
        })
        .catch((error) => {
          setPostValid(false);
          setLoading("loaded");
        });
    },
    [id]
  );

  const getComments = useMemo(
    () => async () => {
      await axios.get(`${endpoints.getComments}?postsId=${id}`).then((res) => {
        setComments(res.data);
      });
    },
    [id]
  );

  useEffect(() => {
    getPost();
  }, [getPost, id]);

  useEffect(() => {
    getComments();
  }, [getComments, post, update]);

  return (
    <>
      {loading === "loading" ? (
        <Loading />
      ) : postValid ? (
        <div className="container-fluid page-post-details-custom">
          <h1 className="text-center pt-3 title-post-details-custom">
            Post Details
          </h1>
          <div className="container w-75 p-5 rounded-3 container-post-details-custom">
            <Post post={post} />
            <hr />

            <div className="container p-4 rounded-3 container-comments-custom">
              <span className="d-block mb-3 title-comments-custom">
                Comments
              </span>

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
