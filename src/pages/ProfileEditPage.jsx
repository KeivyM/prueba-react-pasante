import { useState } from "react";
import { FormEditProfile } from "../components/forms/FormEditProfile";
import { ModalAuthFailed } from "../components/modals";

export const ProfileEditPage = () => {
  const [show, setShow] = useState([false, ""]);

  return (
    <div className="container-fluid d-flex align-items-center page-editprofile-custom">
      <ModalAuthFailed show={show} setShow={setShow} />

      <FormEditProfile setShow={setShow} />
    </div>
  );
};
