import React from "react";

function Avatar({src, alt}) {
  return (
    <img className="Avatar"
      src={src}
      alt={alt}
    />
  );
}

export default Avatar;
