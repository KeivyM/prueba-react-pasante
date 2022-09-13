import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [updateData, setUpdateData] = useState(false);
  const [userAuth, setUserAuth] = useState(() => {
    const data = localStorage.getItem("userAuth");
    const user = JSON.parse(data);
    return user;
  }); // debe tener el objeto de el usuario autenticado

  const [auth, setAuth] = useState(() => {
    const data = localStorage.getItem("userAuth");
    return !!data;
  }); // debe tener un valor boolean dependiendo si esta autenticado

  useEffect(() => {
    const data = localStorage.getItem("userAuth");
    if (!data) return;

    const user = JSON.parse(data);
    setUserAuth(user);
  }, [updateData]);

  return (
    <>
      <AuthContext.Provider
        value={{
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
