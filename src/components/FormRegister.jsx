import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function FormRegister() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const createUser = async (value) => {
    await axios.post("http://localhost:3002/users", value);
    reset();
  };

  return (
    <div
      className="container-sm p-5 pb-4"
      style={{ background: "#ddd", maxWidth: "600px" }}
    >
      <h2 className="text-center">Register</h2>

      <Form onSubmit={handleSubmit(createUser)}>
        <FloatingLabel
          // controlId="floatingInput"
          label="Full Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Your Name"
            {...register("fullname", { required: true })}
          />
          {errors.fullname?.type === "required" && "Full Name is required"}
        </FloatingLabel>

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

        {/* <FloatingLabel
          controlId="floatingInput"
          label="Date of birth"
          className="mb-3"
        >
          <Form.Control
            type="date"
            placeholder="Your Name"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && "Username is required"}
        </FloatingLabel> */}
        {/* 
        <div className="mb-3">
          
          <Form.Control type="date"></Form.Control>
        </div> */}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mx-3">Date of birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter email"
            {...register("dateOfBirth", { required: true })}
          />
          {errors.dateOfBirth?.type === "required" && "Date is required"}
        </Form.Group>

        <FloatingLabel
          // controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Your Name"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && "Username is required"}
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

        <FloatingLabel
          // controlId="floatingInput"
          label="Repeat Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            // {...register("repeatPassword", { required: true })}
          />
          {/* {errors.repeatPassword?.type === "required" && "Password is required"} */}
        </FloatingLabel>

        <Button
          className="w-50 mx-auto d-block"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form>
      <span className="text-decoration-underline d-flex justify-content-center mt-2"></span>
      <Link
        className="text-decoration-none d-flex justify-content-center mt-2"
        style={{ color: "#000" }}
        to="/login"
      >
        Have an account?
      </Link>
    </div>
  );
}

export default FormRegister;
