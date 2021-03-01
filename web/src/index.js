import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import YourName from "./components/YourName";
import TimeTick from "./components/TimeTick";
import TextBox from "./components/TextBox";
import Component from "./components/Component";
function App() {
  return (
    <div className="container">
      <Hello name="ozaki" />
      <YourName src="img/test.jpg"/>
      <TimeTick />
      <TextBox />
      <Component name="test" text="value" url="img/dog.png" date="2021-03-01" />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

function interval() {
  //APPを指定することでページ全体をレンタリング
  ReactDOM.render(<App />, document.getElementById('root'));
}
//1秒単位でレンタリングを実行
setInterval(interval, 1000);
