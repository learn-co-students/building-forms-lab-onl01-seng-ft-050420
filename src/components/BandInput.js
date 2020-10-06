import React, {Component} from 'react';

class BandInput extends Component {
  state = {name: ''};

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const bandObj = {name: this.state.name};
    this.props.addBand(bandObj);
    this.setState({name: ''});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            type="text"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;