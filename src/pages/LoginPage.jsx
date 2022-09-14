import React, { useState } from "react";
import { ModalAuthFailed } from "../components/modals";
import { FormLogin } from "../components/forms";

export const LoginPage = () => {
  const [show, setShow] = useState([false, ""]);
  return (
    <div className="container-fluid d-flex align-items-center page-login-custom">
      <ModalAuthFailed show={show} setShow={setShow} />
      <FormLogin setShow={setShow} />
    </div>
  );
};
