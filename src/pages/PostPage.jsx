import { FormCreatePost } from "../components/forms";

export const PostPage = () => {
  return (
    <div
      className="container d-flex align-items-center"
      style={{ height: "calc(100vh - 58px)" }}
    >
      <div
        className="container p-5"
        style={{ background: "#ddd", maxWidth: "600px" }}
      >
        <h2 className="text-center">New Post</h2>

        <FormCreatePost />
      </div>
    </div>
  );
};
