import React from "react";

class FormRequestName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    //イベント付与
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //イベント発火
  handleChange(event) {
    console.log(event)
    this.setState({value: event.target.value});
  }

  //イベント発火
  handleSubmit(event) {
    console.log(this)
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        {/* <button type="submit">Submit Button</button> */}
      </form>
    );
  }
}

export default FormRequestName;
