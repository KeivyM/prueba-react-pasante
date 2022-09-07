import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const url = "http://localhost:3002/users";

export const AuthProvider = ({ children }) => {
  const [updateData, setUpdateData] = useState("actualizado");
  const [auth, setAuth] = useState(false); // debe tener un valor boolean dependiendo si esta autenticado
  const [userAuth, setUserAuth] = useState({}); // debe tener el objeto de el usuario autenticado
  const [users, setUsers] = useState([]); // debe tener los usuarios registrados

  useEffect(() => {
    //obtiene los usuarios del jsonserver
    axios.get(url).then((res) => {
      setUsers(res.data);
    });
  }, [updateData]);

  useEffect(() => {
    //obtiene el objeto del usuario autenticado
    const data = localStorage.getItem("userAuth");
    if (!data) return;

    const user = JSON.parse(data);
    setUserAuth(user);
  }, [auth]);

  useEffect(() => {
    const data = localStorage.getItem("userAuth");
    if (!data) return;

    const user = JSON.parse(data);
    setUserAuth(user);
    setAuth(true);
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ users, userAuth, auth, setAuth, setUpdateData }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
