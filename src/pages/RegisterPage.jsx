import { useState } from "react";
import { FormRegister } from "../components/forms";
import { ModalAuthFailed } from "../components/modals";

export const RegisterPage = () => {
  const [show, setShow] = useState([false, ""]);

  return (
    <div className="container-fluid d-flex align-items-center page-register-custom">
      <ModalAuthFailed show={show} setShow={setShow} />

      <FormRegister setShow={setShow} />
    </div>
  );
};
