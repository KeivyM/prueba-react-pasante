import axios from "axios";
import { useMemo } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormCreatePost, FormUpdatePost } from "../components/forms";
import endpoints from "../utils/endpoints";

export const PostPage = ({ type }) => {
  const [defaultValues, setDefaultValues] = useState({});
  const { id } = useParams();

  const getPost = useMemo(
    () => async () => {
      if (!id) return;
      await axios
        .get(`${endpoints.getPosts}/${id}`)
        .then((res) => setDefaultValues(res.data));
    },
    [id]
  );

  useEffect(() => {
    getPost();
  }, [getPost, id]);

  return (
    <div className="container-fluid d-flex align-items-center page-post-custom">
      <div className="container p-5 rounded-3 container-form-post-custom">
        <h2 className="text-center">{type} Post</h2>

        {id ? <FormUpdatePost values={defaultValues} /> : <FormCreatePost />}
      </div>
    </div>
  );
};
