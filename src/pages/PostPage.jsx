import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormCreatePost } from "../components/forms";
import { FormUpdatePost } from "../components/forms/FormUpdatePost";

export const PostPage = ({ type }) => {
  const [defaultValues, setDefaultValues] = useState({});
  const { id } = useParams();

  const getPost = async () => {
    if (!id) return;
    await axios
      .get(`http://localhost:3002/posts/${id}`)
      .then((res) => setDefaultValues(res.data));
  };
  useEffect(() => {
    getPost();
  }, [id]);

  // console.log({ defaultValues });

  return (
    <div
      className="container-fluid d-flex align-items-center"
      style={{ height: "calc(100vh - 58px)", background: "rgb(234, 207, 255)" }}
    >
      <div
        className="container p-5"
        style={{
          background: "#ddd",
          maxWidth: "600px",
          border: "1px solid",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center">{type} Post</h2>

        {id ? <FormUpdatePost values={defaultValues} /> : <FormCreatePost />}
      </div>
    </div>
  );
};
