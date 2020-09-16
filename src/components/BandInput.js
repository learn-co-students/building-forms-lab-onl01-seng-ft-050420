import React, { Component } from 'react'
//passed down from container addBand action reducer
class BandInput extends Component {
  
  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} className='form-group'>
          <input type='text' onChange={this.handleChange} value={this.state.name}/>
          <input className='form-control' type='submit'/>
        </form>
      </div>
    )
  }
}



export default BandInput
