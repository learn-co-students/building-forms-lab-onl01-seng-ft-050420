import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import { addBand } from '../actions/addBand'

class BandsContainer extends Component {



  render() {
    console.log(this.props.bands)
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map( band => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
  
}

export default connect(mapStateToProps, { addBand }) (BandsContainer)
