import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

export const useDataById = (id) => {
  // debo de obtener de

  const { posts } = useContext(PostsContext);
  // console.log("ejecutando");
  // console.log(posts);
  // posts.filter((post) => (
  //   post.
  // ))
  return { posts };
};

// esta funcion debe recibir el idUser del post y retornar los datos del usuario para pasarle el nombre a CardPosts, haciendo un filter
