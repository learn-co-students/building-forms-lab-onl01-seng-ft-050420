import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput.js'

class BandsContainer extends Component {

  renderBands(){
    console.log(this.props.bands)
    return this.props.bands.map( band => {
      return <li>{band.name}</li>
    })
  }

  render() {
    debugger
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        
          {this.renderBands()}
        
      </div>
    )
  }
}

const addBand = band => {
  return { type: "ADD_BAND", payload: band }
}

export default connect(state => state, { addBand })(BandsContainer)
