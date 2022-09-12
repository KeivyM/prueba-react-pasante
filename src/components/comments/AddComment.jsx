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
    <div className="container d-flex mt-3 align-items-center gap-2 justify-content-around p-0">
      <Avatar />

      <Form
        className="d-flex w-100 gap-1 align-items-center"
        onSubmit={handleSubmit(sendComment)}
      >
        <Form.Control
          as="textarea"
          placeholder="Write a comment"
          style={{
            maxHeight: "150px",
            minHeight: "100px",
            border: "1px solid",
          }}
          {...register("comment", { required: true })}
        />

        <button
          type="submit"
          className="btn btn-primary py-2"
          style={{ height: "max-content" }}
        >
          {/* Comment */}
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </Form>
    </div>
  );
};
