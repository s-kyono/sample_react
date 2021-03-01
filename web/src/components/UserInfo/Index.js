import React from "react";
import Name from "../UserInfo/Name";
import Avatar from "../UserInfo/Avatar";

function Index({ src, alt, name }) {
  return (
    <div className="UserInfo">
      <Avatar src={src} alt={alt} />
      <Name name={name} />
    </div>
  );
}
export default Index;
