import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useDataById = (id) => {
  const { users } = useContext(AuthContext);
  const user = users.filter((user) => user.id === id);
  // console.log(user);

  return { user };
};

// esta funcion debe recibir el idUser del post y retornar los datos del usuario para pasarle el nombre a CardPosts, haciendo un filter
