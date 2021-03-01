import React from "react";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class List extends React.Component {
  //コンストラクト
  constructor(props) {
    //render()内のpropsをthis.props に書き換える。(this.props = this)として扱う
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <NumberList numbers={this.props.numbers} />
    );
  }
}

export default List;
