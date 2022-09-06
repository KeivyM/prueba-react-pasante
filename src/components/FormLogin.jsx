import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const FormLogin = () => {
  return (
    <div
      className="container-sm p-5"
      style={{ background: "grey", maxWidth: "500px" }}
    >
      <h2 className="text-center">Login</h2>
      <Form>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            // {...register("email", { required: true })}
          />
          {/* {errors.email?.type === "required" && "Email is required"} */}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            // {...register("password", { required: true })}
          />
          {/* {errors.password?.type === "required" && "Password is required"} */}
        </FloatingLabel>

        <Button style={{ width: "100%" }} variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  );
};
