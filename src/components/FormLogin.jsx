import { useContext } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const FormLogin = () => {
  let navigate = useNavigate();

  const { users, setAuth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const validarUser = (value) => {
    const emailValid = users.filter((user) => user.email === value.email);
    if (emailValid.length === 0) return console.log("correo incorrecto");

    const passwordValid = emailValid[0].password === value.password;

    if (!passwordValid) return console.log("contraseña incorrecta");

    localStorage.setItem("userAuth", JSON.stringify(...emailValid));
    setAuth(true);
    reset();
    navigate("/profile/32", { replace: true });
  };

  return (
    <div
      className="container-sm p-5 pb-4"
      style={{ background: "#ddd", maxWidth: "600px" }}
    >
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleSubmit(validarUser)}>
        <FloatingLabel
          // controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && "Email is required"}
        </FloatingLabel>

        <FloatingLabel
          // controlId="floatingInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && "Password is required"}
        </FloatingLabel>

        <Button
          className="d-block w-50 mx-auto"
          variant="primary"
          type="submit"
        >
          Sign in
        </Button>
      </Form>

      <Link
        className="text-decoration-none d-flex justify-content-center mt-2"
        style={{ color: "#000" }}
        to="/register"
      >
        Don't have an account?
      </Link>
    </div>
  );
};
