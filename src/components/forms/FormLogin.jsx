import axios from "axios";
import { useState, useContext } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import endpoints from "../../utils/endpoints";

export const FormLogin = ({ setShow }) => {
  const navigate = useNavigate();

  const { setAuth, setUserAuth } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [revealed, setRevealed] = useState(false);

  const validateUser = async (value) => {
    const users = await axios.get(endpoints.getUsers).then((res) => res.data);

    const emailValid = users.filter((user) => user.email === value.email);
    if (emailValid.length === 0)
      return setShow([true, "Incorrect email, please check it."]);

    const passwordValid = emailValid[0].password === value.password;

    if (!passwordValid)
      return setShow([true, "Incorrect password, please check it."]);

    localStorage.setItem("userAuth", JSON.stringify(...emailValid));

    setUserAuth(...emailValid);
    setAuth(true);
    reset();
    navigate(`/profile/${emailValid[0].id}`);
  };

  const handleReveal = () => {
    setRevealed(!revealed);
  };

  return (
    <div className="container-sm p-5 pb-4 rounded-3 container-form-login-custom">
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleSubmit(validateUser)}>
        <FloatingLabel label="Email address" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            {...register("email", { required: true })}
          ></Form.Control>
          {errors.email?.type === "required" && "Email is required"}
        </FloatingLabel>

        <FloatingLabel label="Password" className="mb-3">
          <Form.Control
            type={revealed ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <Form.Check
            onClick={handleReveal}
            type="checkbox"
            label="Show Password"
          />
          {errors.password?.type === "required" && "Password is required"}
        </FloatingLabel>

        <Button
          className="d-block w-50 mx-auto buttons-custom"
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
