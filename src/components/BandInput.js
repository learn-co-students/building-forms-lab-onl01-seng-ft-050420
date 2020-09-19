// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleChange = (event) => {
    this.setState ({
      name: event.target.value
    })
  }

  handeleSubmit = (event) => {
    //debugger
    event.preventDefault();
    let bandName = {...this.state}
    this.props.addBand(bandName)
    this.setState({
      name:""
    }) 
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handeleSubmit}>
          <label>Band Name</label>
          <input name="name" type="text" value={this.state.bandName} onChange= {this.handleChange}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}


export default BandInput
