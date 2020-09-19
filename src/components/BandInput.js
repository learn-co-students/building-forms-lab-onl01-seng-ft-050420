
import React, { Component } from 'react'
//import { connect } from 'react-redux';
//import { addBand } from '../actions/names';

class BandInput extends Component {

  state = {
    name:''
  }

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState({
      name: event.target.value
    }) 
  }

  handleOnSubmit = event => {
   //debugger
    event.preventDefault()
    const objectForBand = {name: this.state.name}
     this.props.addBand({name: this.state.name})
     //the method addBand is passed down as a prop
     //debugger
     this.setState({
      name:''
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="name" >Name</label>
        <input name="name"
        type="text"
        value={this.state.name}
        onChange={this.handleOnChange}
        />
        <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}


export default BandInput
//export default connect(null, {addBand})(BandInput)
//https://css-tricks.com/understanding-how-reducers-are-used-in-redux/
//https://www.youtube.com/watch?v=3sjMRS1gJys&t=3s
