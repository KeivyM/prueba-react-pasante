import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(() => {
    const data = localStorage.getItem("userAuth");
    const user = JSON.parse(data);
    // console.log("autenticado", user);
    return user;
  }); // debe tener el objeto de el usuario autenticado
  // console.log(userAuth);
  const [updateData, setUpdateData] = useState(false);
  const [users, setUsers] = useState([]); // debe tener los usuarios registrados

  const [auth, setAuth] = useState(() => {
    const data = localStorage.getItem("userAuth");
    return !!data;
  }); // debe tener un valor boolean dependiendo si esta autenticado

  useEffect(() => {
    //obtiene los usuarios del jsonserver
    axios.get("http://localhost:3002/users").then((res) => {
      setUsers(res.data);
    });
  }, [auth]);

  useEffect(() => {
    //obtiene el objeto del usuario autenticado
    const data = localStorage.getItem("userAuth");
    if (!data) return;

    const user = JSON.parse(data);

    // console.log(user);
    setUserAuth(user);
    // setAuth(true);
  }, [auth, users, updateData]);

  // useEffect(() => {
  //   // obtiene el usuario autenticado del localstorage
  //   const data = localStorage.getItem("userAuth");
  //   if (!data) return;

  //   const user = JSON.parse(data);
  //   setUserAuth(user);
  //   setAuth(true);
  // }, []);

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
