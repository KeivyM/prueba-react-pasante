import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const PostPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors);

  const funcion = (value) => {
    console.log(value);
  };

  return (
    <div
      className="container-sm p-5"
      style={{ background: "#add", height: "100vh" }}
    >
      <Form onSubmit={handleSubmit(funcion)}>
        <Form.Group className="mb-3" controlId="formGroupFullName">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Enter Title"
            {...register("title", { required: true })}
          />
          {errors.fullName?.type === "required" && "Full Name is required"}
        </Form.Group>

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        {/* <div class="form-floating">
<input type="password" class="form-control" id="floatingPassword" placeholder="Password">
<label for="floatingPassword">Password</label>
</div> */}

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && "Email is required"}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="userName"
            type="text"
            placeholder="Enter Username"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && "Username is required"}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern: /[A-Za-z]{3}/,
            })}
          />
          {errors.password?.type === "required" && "Password is required"}
        </Form.Group>
        <Button style={{ width: "100%" }} variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};
