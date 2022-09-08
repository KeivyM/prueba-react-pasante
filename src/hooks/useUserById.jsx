import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useUserById = (id) => {
  // debugger;
  const { users } = useContext(AuthContext);
  // console.log(users);
  const user = users.filter((user) => user.id === id);

  return { user };
};

//esta funcion recibe el id de un usuario y retorna todos sus datos en un objeto
