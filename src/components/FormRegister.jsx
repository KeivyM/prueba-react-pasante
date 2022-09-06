import { Button, FloatingLabel, Form } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function FormRegister() {
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
      style={{ background: "grey", maxWidth: "500px" }}
    >
      <h2 className="text-center">Register</h2>

      <Form onSubmit={handleSubmit(funcion)}>
        <FloatingLabel
          controlId="floatingInput"
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
          controlId="floatingInput"
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
          controlId="floatingInput"
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
          controlId="floatingInput"
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
          controlId="floatingInput"
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

        <Button style={{ width: "100%" }} variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default FormRegister;
