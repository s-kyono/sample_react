import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import YourName from "./components/YourName";
import TimeTick from "./components/TimeTick";
import TextBox from "./components/TextBox";
import Component from "./components/Component";
import Anchor from "./components/Anchor";
import Button from "./components/Button";
import FormRequestName from "./components/FormRequestName";
import EssayForm from "./components/EssayForm";
import FlavorForm from "./components/FlavorForm";
import Reservation from "./components/Reservation";
import Calculator from "./components/LiftUp/Calculator";

function App() {
  const test =
    {
      grapefruit : {
        index : 'grapefruit', name : 'Grapefruit'
      },
      lime : {
        inex : 'lime', name : 'Lime'
      },
      coconut : {
        inex : 'coconut', name : 'Coconut'
      },
      mango : {
        inex : 'mango', name : 'Mango'
      },
    };
  return (
    <div className="container">
      <Calculator />
      <Hello name="ozaki" />
      <Anchor />
      <Button />
      <YourName src="img/test.jpg" />
      <TimeTick />
      <TextBox />
      <Component name="test" text="value" url="img/dog.png" date="2021-03-01" />
      <TimeTick />
      <TimeTick />
      <FormRequestName />
      <EssayForm />
      <FlavorForm fruits = { test }/>
      <Reservation />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

// function interval() {
//   //APPを指定することでページ全体をレンタリング
//   ReactDOM.render(<App />, document.getElementById('root'));
// }
//1秒単位でレンタリングを実行
// setInterval(interval, 1000);
