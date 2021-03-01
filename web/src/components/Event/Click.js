import React from "react";

class Click extends React.Component {
  //コンストラクト
  constructor(props) {
    //render()内のpropsをthis.props に書き換える。(this.props = this)として扱う
    super(props);
    this.state = {isToggleOn: true};
    // This binding is necessary to make `this` work in the callback
    console.log(this)
    this.handleClick = this.handleClick.bind(this);
  }

  //イベント関数
  handleClick() {
    console.log('イベント発火');
    console.log(this);
    this.setState(state => (
      {
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
export default Click;
