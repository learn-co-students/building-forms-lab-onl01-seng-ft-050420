import React, { Component } from "react";

class BandInput extends Component {
  state = { name: "" };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name='name'
            type='text'
          ></input>
        </form>
      </div>
    );
  }
}

export default BandInput;
