import React from "react";
import Click from "./Event/Click";
class Button extends React.Component {
    //コンストラクト
    constructor(props) {
      //render()内のpropsをthis.props に書き換える。(this.props = this)として扱う
      super(props);
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }
    render(){
      return (
        <div className="button_field">
          <button onClick={activateLasers}>
            Activate Lasers
          </button>
          <Click name="test" value="out" />
        </div>
      );
    }

}

function activateLasers(e) {
  console.log('ボタンクリック');
  console.log(e);
  console.log(this);
  e.preventDefault(); //return false;
    console.log('Activate Lasers Click!!.');
}

export default Button;
