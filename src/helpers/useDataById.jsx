import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useDataById = (id) => {
  // debugger;
  const { users } = useContext(AuthContext);
  //el problema es que aun no se a actualizado users
  const user = users.filter((user) => user.id === id);
  // console.log("USUARIO", users);
  // console.log("ID", id);
  // const [user] = result;

  return { user };
};

//esta funcion recibe el id de un usuario y retorna todos sus datos en un objeto
