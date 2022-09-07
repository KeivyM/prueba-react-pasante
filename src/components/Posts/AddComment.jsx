import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Avatar } from "../Avatar";

export const AddComment = () => {
  return (
    <div
      className="container d-inline-flex mt-3 align-items-center gap-2"
      // style={{ background: "#ddd" }}
    >
      <Avatar />

      <Form.Control as="textarea" placeholder="Write a comment" />

      <button type="button" className="btn btn-primary">
        Comment
      </button>
    </div>
  );
};
