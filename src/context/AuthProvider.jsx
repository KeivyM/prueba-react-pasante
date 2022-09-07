import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const url = "http://localhost:3002/users";

export const AuthProvider = ({ children }) => {
  const [updateData, setUpdateData] = useState(false);

  const [auth, setAuth] = useState(() => {
    const data = localStorage.getItem("userAuth");
    return !!data;
  }); // debe tener un valor boolean dependiendo si esta autenticado

  const [userAuth, setUserAuth] = useState(() => {
    const data = localStorage.getItem("userAuth");
    const d = JSON.parse(data);
    // console.log("sdfsdfsd", d);
    return d;
  }); // debe tener el objeto de el usuario autenticado

  const [users, setUsers] = useState([]); // debe tener los usuarios registrados
  // console.log(userAuth);

  useEffect(() => {
    //obtiene los usuarios del jsonserver
    axios.get(url).then((res) => {
      setUsers(res.data);
    });
  }, [updateData]);

  useEffect(() => {
    //obtiene el objeto del usuario autenticado
    const data = localStorage.getItem("userAuth");
    // console.log(!!data);
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
        value={{
          users,
          userAuth,
          auth,
          setAuth,
          updateData,
          setUpdateData,
          setUserAuth,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
