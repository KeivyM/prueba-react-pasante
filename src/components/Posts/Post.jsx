import { Avatar } from "../Avatar";
import { Date } from "./Date";

export const Post = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-2 mb-2">
        <Avatar />
        <span className="d-inline">
          by{" "}
          <strong className="text-decoration-underline">Lorena Moreno</strong>
          <Date date={"14 ago 2020"} />
        </span>
      </div>
      <h3 className="">Titulo de el post </h3>
      <p className="">
        sdjhkafj dskfj dsaj Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Nostrum impedit laudantium dolores mollitia, obcaecati quia
        voluptatibus beatae fuga asperiores delectus totam eos nihil libero!
        Eveniet vel aliquid soluta reprehenderit ipsam. sdjhkafj dskfj dsaj
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
        impedit laudantium dolores mollitia, obcaecati quia voluptatibus beatae
        fuga asperiores delectus totam eos nihil libero! Eveniet vel aliquid
        soluta reprehenderit ipsam.
      </p>
    </>
  );
};
