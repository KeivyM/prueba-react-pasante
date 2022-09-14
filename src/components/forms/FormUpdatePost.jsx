import axios from "axios";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import endpoints from "../../utils/endpoints";

export const FormUpdatePost = ({ values }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});

  const updatePost = async (data) => {
    await axios.patch(`${endpoints.getPosts}/${id}`, data);
    navigate("/posts");
  };

  useEffect(() => {
    setValue("title", values.title);
    setValue("subtitle", values.subtitle);
    setValue("content", values.content);
  }, [setValue, values]);

  return (
    <Form onSubmit={handleSubmit(updatePost)}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Title"
          name="title"
          defaultValue={values.title}
          {...register("title", { required: true })}
        />
        {errors.title?.type === "required" && "Title is not modified"}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Subtitle"
          name="subtitle"
          defaultValue={values.subtitle}
          {...register("subtitle", { required: true })}
        />
        {errors.subtitle?.type === "required" && "Subtitle is not modified"}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Content"
          name="content"
          defaultValue={values.content}
          style={{ minHeight: "150px", maxHeight: "160px" }}
          {...register("content", { required: true })}
        />
        {errors.content?.type === "required" && "Content is not modified"}
      </Form.Group>

      <Button
        className="w-50 d-block mx-auto buttons-custom button-update-post"
        variant="primary"
        type="submit"
      >
        Update
      </Button>
    </Form>
  );
};
