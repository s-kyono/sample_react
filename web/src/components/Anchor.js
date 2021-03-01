import React from "react";

class Anchor extends React.Component {
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
        <a href="#" onClick={handleClick}>
          Click me
        </a>
      );
    }

}

function handleClick(e) {
  console.log('アンカークリック');
  console.log(e);
  console.log(this);
  e.preventDefault(); //return false;
    console.log('The link was clicked.');
}

export default Anchor;
