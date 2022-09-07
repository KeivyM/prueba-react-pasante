import React from "react";
import { FormLogin } from "../components/forms";

export const LoginPage = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <FormLogin />
    </div>
  );
};
