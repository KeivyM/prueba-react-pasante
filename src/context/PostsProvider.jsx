import { useEffect, useState } from "react";
import axios from "axios";
import { PostsContext } from "./PostsContext";

const url = "http://localhost:3002/posts";

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <>
      <PostsContext.Provider value={{ posts }}>
        {children}
      </PostsContext.Provider>
    </>
  );
};
