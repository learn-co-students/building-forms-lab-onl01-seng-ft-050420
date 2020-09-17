import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import {addBand} from '../actions/addBand'



class BandsContainer extends Component {


  

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />

        <ul>{this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return state
}

export default connect(mapStateToProps, {addBand})(BandsContainer)
