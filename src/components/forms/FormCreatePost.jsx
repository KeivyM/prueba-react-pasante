import axios from "axios";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext, PostsContext } from "../../context";

export const FormCreatePost = () => {
  const { userAuth } = useContext(AuthContext);
  const { updatePosts, setUpdatePosts } = useContext(PostsContext);

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const createPost = async (value) => {
    const time = Date.now();
    const now = new Date(time).toUTCString();
    value.createdDate = now;
    value.idUser = userAuth.id;
    console.log("aqui", userAuth.id);

    await axios.post("http://localhost:3002/posts", value);
    reset();
    setUpdatePosts(!updatePosts);
    navigate("/posts");
  };

  return (
    <Form onSubmit={handleSubmit(createPost)}>
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
        Create
      </Button>
    </Form>
  );
};
