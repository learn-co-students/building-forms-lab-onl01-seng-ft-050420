import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map( el => <li>{el.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => dispatch({ type: "ADD_BAND", band: band}) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
