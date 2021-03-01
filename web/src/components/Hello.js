import React from "react";

const cast = 'taro';
function Hello({ name }) {
  const elemnt = <h1>Hello {name} your {cast} !</h1>
  console.log(name)
  return elemnt
}

export default Hello;
