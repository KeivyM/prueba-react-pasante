import { FormCreatePost } from "../components/forms";
import { FormUpdatePost } from "../components/forms/FormUpdatePost";

export const PostPage = ({ type }) => {
  console.log(type);
  return (
    <div
      className="container-fluid d-flex align-items-center"
      style={{ height: "calc(100vh - 58px)", background: "rgb(234, 207, 255)" }}
    >
      <div
        className="container p-5"
        style={{
          background: "#ddd",
          maxWidth: "600px",
          border: "1px solid",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center">{type} Post</h2>

        {type === "update" ? <FormUpdatePost /> : <FormCreatePost />}
      </div>
    </div>
  );
};
