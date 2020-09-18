// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = { name: '' }

  handleOnChange = event => {
    this.setState({name: event.target.value})
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state.name)
    this.setState({name: ''})
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' placeholder='Add Band Name' onChange={this.handleOnChange} value={this.state.name}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
