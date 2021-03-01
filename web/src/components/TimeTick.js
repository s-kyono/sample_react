import React from "react";


function TimeTick(){
  const time = new Date().toLocaleTimeString();
  return <div>It is {time} .</div>
};
export default TimeTick;
