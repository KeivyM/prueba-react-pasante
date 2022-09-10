import React, { useState } from "react";
import { AuthFailed } from "../components/AuthFailed";
import { FormLogin } from "../components/forms";

export const LoginPage = () => {
  const [show, setShow] = useState([false, ""]);
  return (
    <div
      className="container-fluid d-flex align-items-center"
      style={{ height: "100vh", background: "rgb(165 234 255)" }}
    >
      <AuthFailed show={show} setShow={setShow} />
      <FormLogin setShow={setShow} />
    </div>
  );
};
