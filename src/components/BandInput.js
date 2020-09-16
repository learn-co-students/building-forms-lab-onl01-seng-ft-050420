
import React, { Component } from 'react'



class BandInput extends Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <label htmlFor="name">Band Name: </label><br></br>
          <input name="name" className="band-name" type="text" value={this.state.name} onChange={this.handleChange} />
          <button type="submit">Add Band</button>
        </form>
      </div>
    )
  }
}


export default BandInput
