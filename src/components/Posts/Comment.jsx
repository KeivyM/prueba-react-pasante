import { Avatar } from "../Avatar";

export const Comment = () => {
  return (
    <div className="container mb-3">
      <div className="d-flex align-items-center gap-2 mb-2">
        <Avatar size={25} />
        <span className="d-inline">
          by{" "}
          <strong className="text-decoration-underline">Lorena Moreno</strong>
        </span>
      </div>
      <div className="container mx-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        provident, dolorem vitae atque unde omnis sequi excepturi fugiat
        officiis dicta? Possimus nam quis id, repellat unde explicabo pariatur
        nostrum enim!
      </div>
    </div>
  );
};
