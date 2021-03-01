import React from "react";
import DreadNode from "../components/DreadNode";

function bundleStr(endymion){
  return endymion.last + '_' + endymion.first;
}
const endymion = {
  first: 'エンデュミオン',
  last: 'ハマード',
};

const elemnt = (
  <div class="user_id">
    <span>{ bundleStr(endymion) }</span>
  </div>
);

function YourName({src}) {
  console.log(src);
  console.log(typeof(src));
  console.log(src ? 'いるよ': 'いないよ');
  if(0 !== Object.keys(src).length){
    return <DreadNode name="action_button" type="button" src={src} />
  }
  return elemnt;
}

export default YourName;
