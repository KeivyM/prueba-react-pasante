import axios from "axios";
import { useContext } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { CommentsContex } from "../../context/CommentsContext";
import { Avatar } from "../Avatar";

export const AddComment = (idPost) => {
  const { userAuth } = useContext(AuthContext);
  const { updateComments, setUpdateComments } = useContext(CommentsContex);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendComment = async (value) => {
    if (value.comment.trim().length < 1) return;

    value.comment = value.comment.trim();
    value.username = userAuth.username;
    //---falta guardar en value el id del post al que pertenece---//
    value.idPost = idPost.idPost;
    value.idUser = userAuth.id;

    await axios.post("http://localhost:3002/comments", value);
    reset();
    setUpdateComments(!updateComments);
  };

  return (
    <div
      className="container d-inline-flex mt-3 align-items-center gap-2"
      // style={{ background: "#ddd" }}
    >
      <Avatar />

      <Form
        className="d-inline w-100 postion-relative"
        style={{ background: "red" }}
        onSubmit={handleSubmit(sendComment)}
      >
        <Form.Control
          as="textarea"
          placeholder="Write a comment"
          className=""
          {...register("comment", { required: true })}
        />

        <button type="submit" className="btn btn-primary ">
          Comment
        </button>
      </Form>
    </div>
  );
};
