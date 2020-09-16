import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput.js'

class BandsContainer extends Component {

  render() {

    let bands = this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)
    //let bands = console.log(this.props.bands[1].name)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <div><ul>{bands}</ul></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch({type: 'ADD_BAND', band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
