import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister, schemaUpdate } from "./schemas";

export const FormRegister = ({ setShow }) => {
  const [showPassword, setPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const { userAuth, setAuth, auth, updateData, setUpdateData } =
    useContext(AuthContext);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(!!userAuth ? schemaUpdate : schemaRegister),
  });

  const createUser = async (newUser) => {
    const users = await axios
      .get("http://localhost:3002/users")
      .then((res) => res.data);

    const emailValid = users.filter((user) => user.email === newUser.email);

    if (emailValid.length !== 0)
      return setShow([
        true,
        "Another user exists with that email, please check it.",
      ]);

    const time = Date.now();
    const now = new Date(time).toUTCString();
    newUser.registerDate = now;
    delete newUser.passwordRepeat;

    const res = await axios.post("http://localhost:3002/users", newUser);

    localStorage.setItem("userAuth", JSON.stringify(res.data));

    reset();
    navigate(`/profile/${res.data.id}`);
    setAuth(true);
    setUpdateData(!updateData);
  };

  const updateDataProfile = async (data) => {
    delete data.passwordRepeat;

    const res = await axios.patch(
      `http://localhost:3002/users/${userAuth.id}`,
      data
    );

    localStorage.setItem("userAuth", JSON.stringify(res.data));

    reset();
    navigate(`/profile/${userAuth.id}`);
  };

  return (
    <div className="container-sm p-5 pb-4 my-1 rounded-3 container-form-register-custom">
      <h2 className="text-center"> {!auth ? "Register" : "Update Data"}</h2>

      <Form onSubmit={handleSubmit(!auth ? createUser : updateDataProfile)}>
        <FloatingLabel label="Full Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Your Name"
            {...register("fullname", { required: true })}
          />
          {errors.fullname?.message}
        </FloatingLabel>

        {!auth && (
          <FloatingLabel label="Email address" className="mb-3">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              {...register("email", { required: true })}
            />
            {errors.email?.message}
          </FloatingLabel>
        )}

        <Form.Group
          className="mb-3 d-flex text-center align-items-end "
          controlId="formBasicEmail"
        >
          <Form.Label className="mx-0 col-3">Date of birth:</Form.Label>
          <Form.Control
            type="date"
            {...register("birthdate", { required: true })}
          />
          {errors.birthdate?.message}
        </Form.Group>

        <FloatingLabel label="Username" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Your Name"
            {...register("username", { required: true })}
          />
          {errors.username?.message}
        </FloatingLabel>

        <FloatingLabel label="Password" className="mb-3">
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password?.message}
          <Form.Check
            onClick={() => setPassword(!showPassword)}
            type="checkbox"
            label="Show Password"
          />
        </FloatingLabel>

        <FloatingLabel label="Repeat Password" className="mb-3">
          <Form.Control
            type={showPasswordRepeat ? "text" : "password"}
            placeholder="Password"
            {...register("passwordRepeat", { required: true })}
          />
          {errors.passwordRepeat?.message}
          <Form.Check
            onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
            type="checkbox"
            label="Show Password"
          />
        </FloatingLabel>

        <Button
          className="w-50 mx-auto d-block buttons-custom"
          variant="primary"
          type="submit"
        >
          {auth ? "Update" : "Register"}
        </Button>
      </Form>
      {!auth && (
        <>
          <span className="text-decoration-underline d-flex justify-content-center mt-2"></span>
          <Link
            className="text-decoration-none d-flex justify-content-center mt-2"
            style={{ color: "#000" }}
            to="/login"
          >
            Have an account?
          </Link>
        </>
      )}
    </div>
  );
};
