import axios from "axios";
import { useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context";

export const FormUpdatePost = () => {
  const { userAuth } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();
  const { content, title, subtitle } = control._formValues;

  const getPost = async () => {
    await axios
      .get(`http://localhost:3002/posts/${id}`)
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    getPost();
  }, []);

  const updatePost = async () => {
    console.log("actualizando");
    await getPost();
  };

  return (
    <Form onSubmit={handleSubmit(updatePost)}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title?.type === "required" && "Title is required"}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Subtitle"
          {...register("subtitle", { required: true })}
        />
        {errors.subtitle?.type === "required" && "Subtitle is required"}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Content"
          style={{ minHeight: "150px" }}
          {...register("content", { required: true })}
        />
        {errors.content?.type === "required" && "Content is required"}
      </Form.Group>

      <Button className="w-50 d-block mx-auto" variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};
