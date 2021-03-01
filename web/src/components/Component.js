import React from "react";
import UserInfo from "../components/UserInfo/Index";
import Comment from "../components/Comment/Index";

function Component({name, text, url, date}) {
  return (
    <div className="Comment">
      <UserInfo src={url} alt={name} name={name}/>
      <Comment text={text} date={date} />
    </div>
  );
}

export default Component;
