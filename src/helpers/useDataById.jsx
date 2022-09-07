import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useDataById = (id) => {
  const { users } = useContext(AuthContext);
  const user = users.filter((user) => user.id === id);
  // const [user] = result;

  return { user };
};

//esta funcion recibe el id de un usuario y retorna todos sus datos en un objeto
