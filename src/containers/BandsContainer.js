import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'
import {addBand} from '../reducers/manageBand'



class BandsContainer extends Component {
  
  render(
    ) {
    return(
      
      <div>BandsContainer
       <BandInput addBand={this.props.addBand} state = {this.props.state}/>
       <ul>
         {this.props.bands.map(band => <li>{band.name}</li>)}
       </ul>
     </div>
    )
  }
}


const mapStoreToProps= (state) => {
  return state;
}


export default connect (mapStoreToProps, {addBand})(BandsContainer)
