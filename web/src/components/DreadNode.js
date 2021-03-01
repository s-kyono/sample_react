import React from "react";

function DreadNode({name, type, src}){
  console.log(name);
  console.log(type);
  console.log(src);
  return <img src={src} alt={name}/>
}

export default DreadNode;
