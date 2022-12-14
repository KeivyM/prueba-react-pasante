import React from "react";

export const Avatar = ({ size = 30, radius = 50 }) => {
  return (
    <img
      width={size}
      height={size}
      alt="avatar"
      style={{
        borderRadius: radius,
        background: "white",
        border: "1px solid #aaa",
      }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    />
  );
};
