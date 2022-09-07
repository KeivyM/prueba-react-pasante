import axios from "axios";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { PostsContext } from "../context/PostsContext";

export const PostPage = () => {
  const { users, userAuth } = useContext(AuthContext);
  const { updatePosts, setUpdatePosts } = useContext(PostsContext);
  // console.log(userAuth.id);
  // const { debo recibir del contexto de auth el id del usuario para cuando cree un post pasarle el id en el atributo idUser } = useContext(PostsContext);
  // debo guardar el usuario autenticado en localstorage y cuando cree un post o un comentario de alli obtengo el id para el idUser
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
    value.dateCreated = now;
    value.idUser = userAuth.id;
    console.log("aqui", userAuth.id);

    await axios.post("http://localhost:3002/posts", value);
    reset();
    setUpdatePosts(!updatePosts);
    navigate("/posts");
  };

  return (
    <div
      className="container d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="container p-5"
        style={{ background: "#ddd", maxWidth: "600px" }}
      >
        <h2 className="text-center">New Post</h2>

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

          {/* <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            // type="email"
            as="textarea"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && "Email is required"}
        </Form.Group> */}
          {/* 
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
        </Form.Group> */}
          <Button
            className="w-50 d-block mx-auto"
            variant="primary"
            type="submit"
          >
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};
