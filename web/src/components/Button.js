import React from "react";

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
        <button onClick={activateLasers}>
          Activate Lasers
        </button>
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
