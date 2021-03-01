import React from "react";
// Stateの説明

// 1. <TimeTick /> が ReactDOM.render() に渡されると、React は TimeTick コンポーネントのコンストラクタを呼び出します。
//   TimeTick は現在時刻を表示する必要があるので、現在時刻を含んだオブジェクトで this.state を初期化します。あとでこの state を更新していきます。

// 2. 次に React は TimeTick コンポーネントの render() メソッドを呼び出します。
//    これにより React は画面に何を表示すべきか知ります。そののちに、React は DOM を TimeTick のレンダー出力と一致するように更新します。

// 3. TimeTick の出力が DOM に挿入されると、React は componentDidMount() ライフサイクルメソッドを呼び出します。
//    その中で、TimeTick コンポーネントは毎秒ごとにコンポーネントの tick() メソッドを呼び出すためにタイマーを設定するようブラウザに要求します。

// 4. ブラウザは、毎秒ごとに tick() メソッドを呼び出します。その中で TimeTick コンポーネントは、現在時刻を含んだオブジェクトを引数として
//    setState() を呼び出すことで、UI の更新をスケジュールします。setState() が呼び出されたおかげで、React は state が変わったということが分かるので、
//    render() メソッドを再度呼び出して、画面上に何を表示すべきかを知ります。今回は、render() メソッド内の this.state.date が異なっているので、
//    レンダーされる出力には新しく更新された時間が含まれています。それに従って React は DOM を更新します。

// 5. この後に TimeTick コンポーネントが DOM から削除されることがあれば、React は componentWillUnmount() ライフサイクルメソッドを呼び出し、
//    これによりタイマーが停止します。

// stateを正しく使用する  https://ja.reactjs.org/docs/state-and-lifecycle.html#using-state-correctly
class TimeTick extends React.Component {
  //コンストラクト
  constructor(props) {
    //render()内のpropsをthis.props に書き換える。(this.props = this)として扱う
    super(props);
    this.state = {date: SetTime()};
  }
  //DOM として描画されるときにサイクルメソッドを追加
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log(this);
    console.log(this.timerID);
  }

  //DOM が削除されるときですにサイクルメソッドを追加
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: SetTime()
    });
  }

  //レンダリング（DOMに描画）
  render(){
    return (
      <div>It is {this.state.date} .</div>
      );
  }
}

function SetTime() {
  return new Date().toLocaleTimeString();
}

export default TimeTick;
