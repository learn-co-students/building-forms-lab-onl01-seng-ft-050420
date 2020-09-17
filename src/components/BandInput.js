import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      // [event.target.name]: event.target.value, // Won't pass the tests this way
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Add a Band</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            // name="name" // Won't pass the tests this way
            value={this.state.name}
            onChange={this.handleOnChange}
          />
        </form>
      </div>
    )
  }
}

export default BandInput
