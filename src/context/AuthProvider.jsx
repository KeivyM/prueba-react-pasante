import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(() => {
    const data = localStorage.getItem("userAuth");
    const user = JSON.parse(data);
    return user;
  }); // debe tener el objeto de el usuario autenticado

  const [updateData, setUpdateData] = useState(false);
  const [users, setUsers] = useState([]); // debe tener los usuarios registrados

  const [auth, setAuth] = useState(() => {
    const data = localStorage.getItem("userAuth");
    return !!data;
  }); // debe tener un valor boolean dependiendo si esta autenticado

  useEffect(() => {
    axios.get("http://localhost:3002/users").then((res) => {
      setUsers(res.data);
    });
  }, [auth]);

  useEffect(() => {
    const data = localStorage.getItem("userAuth");
    if (!data) return;

    const user = JSON.parse(data);

    setUserAuth(user);
  }, [auth, users, updateData]);

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
