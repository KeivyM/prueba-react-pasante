import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUpdate } from "../../utils/schemas";
import endpoints from "../../utils/endpoints";

export const FormEditProfile = ({ setShow }) => {
  const [showPassword, setPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const { userAuth, updateData, setUpdateData } = useContext(AuthContext);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUpdate),
  });

  const updateDataProfile = async (data) => {
    const users = await axios.get(endpoints.getUsers).then((res) => res.data);

    const usernameValid = users.filter(
      (user) => user.username === data.username
    );

    if (usernameValid.length !== 0 && usernameValid[0].id !== userAuth.id)
      return setShow([
        true,
        "Another user exists with that username, please change it.",
      ]);

    delete data.passwordRepeat;

    const res = await axios.patch(`${endpoints.getUsers}/${userAuth.id}`, data);

    localStorage.setItem("userAuth", JSON.stringify(res.data));

    reset();
    navigate(`/profile/${userAuth.id}`);
    setUpdateData(!updateData);
  };

  useEffect(() => {
    setValue("fullname", userAuth.fullname);
    setValue("birthdate", userAuth.birthdate);
    setValue("username", userAuth.username);
    setValue("password", userAuth.password);
    setValue("passwordRepeat", userAuth.password);
  }, [setValue, userAuth]);

  return (
    <div className="container-sm p-5 pb-4 my-1 rounded-3 container-form-register-custom">
      <h2 className="text-center"> Update Data</h2>

      <Form onSubmit={handleSubmit(updateDataProfile)}>
        <FloatingLabel label="Full Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Your Name"
            {...register("fullname", { required: true })}
          />
          {errors.fullname?.message}
        </FloatingLabel>

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
          Update
        </Button>
      </Form>
    </div>
  );
};
