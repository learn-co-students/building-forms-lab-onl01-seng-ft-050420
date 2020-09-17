// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  
  state = {
    name: ''
  };

  handleInputChange = (event) => {
    this.setState( {name: event.target.value})
  }

  handelSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handelSubmit}>
          <input onChange={this.handleInputChange} type='text' name="band" value={this.state.name}/>
        </form>
      </div>
    )
  }
}

export default BandInput
