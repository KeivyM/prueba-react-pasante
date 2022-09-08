import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useUserById = (id) => {
  // debe llamarse useUserById-----<
  // debugger;
  const { users } = useContext(AuthContext);
  const user = users.filter((user) => user.id === id);

  return { user };
};

//esta funcion recibe el id de un usuario y retorna todos sus datos en un objeto
