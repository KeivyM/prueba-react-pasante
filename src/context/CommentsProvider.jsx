import { useEffect, useState } from "react";
import axios from "axios";
import { CommentsContex } from "./CommentsContext";
// import { PostsContext } from "./PostsContext";

const url = "http://localhost:3002/comments";

export const CommentsProvider = ({ children }) => {
  const [updateComments, setUpdateComments] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setComments(res.data);
    });
  }, [updateComments]);

  return (
    <>
      <CommentsContex.Provider
        value={{ comments, updateComments, setUpdateComments }}
      >
        {children}
      </CommentsContex.Provider>
    </>
  );
};
