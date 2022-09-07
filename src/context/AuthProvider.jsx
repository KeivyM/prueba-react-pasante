import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const url = "http://localhost:3002/users";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [userAuth, setUserAuth] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
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
      <AuthContext.Provider value={{ users, userAuth, auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
