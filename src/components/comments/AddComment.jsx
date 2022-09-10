import axios from "axios";
import { useContext } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { Avatar } from "../Avatar";

export const AddComment = ({ postsId, setUpdate, update }) => {
  const { userAuth } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();

  const sendComment = async (value) => {
    if (value.comment.trim().length < 1) return;

    value.comment = value.comment.trim();
    value.username = userAuth.username;
    value.postsId = postsId;
    value.usersId = userAuth.id;

    const time = Date.now();
    const now = new Date(time).toUTCString();
    value.createdDate = now;

    await axios.post("http://localhost:3002/comments", value);
    reset();
    setUpdate(!update);
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
