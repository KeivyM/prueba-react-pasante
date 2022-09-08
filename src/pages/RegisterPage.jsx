import { useState } from "react";
import { AuthFailed } from "../components/AuthFailed";
import { FormRegister } from "../components/forms";

export const RegisterPage = () => {
  const [show, setShow] = useState([false, ""]);

  return (
    <div
      className="container-fluid d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <AuthFailed show={show} setShow={setShow} />

      <FormRegister setShow={setShow} />
    </div>
  );
};
