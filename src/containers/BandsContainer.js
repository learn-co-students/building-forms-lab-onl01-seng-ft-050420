import React, { Component } from 'react';
 import BandInput from '../components/Band';


import { connect } from 'react-redux';
//import { addBand } from '../actions/names';
import Band from '../components/Band';



class BandsContainer extends Component {
  //addBand is the name of a prop which is also a function set equal to a varaible, it is defined here
  addBand = (objectForBand) => ({
    type: 'ADD_BAND',
    payload: objectForBand
    //holds the actual data of a redux action object
  })
  
  //allNames = () => 
  //this.props.bands.map((band)=><Band key={band.name} band={band} /> )
  render() {
    return(
      
      <div>
        BandsContainer
        
         <BandInput addBand={(objectForBand) => this.props.dispatch(this.addBand(objectForBand))}/>
         {/* When the bandinput form is submitted, addBand is called which is passed in as a prop here after it is
         defined on line 11 at the top. Then the dispatch method executes the action after it passes in the data which will update
         the store */}
         {/* The dispatched action required to initiate
          this update should be set up in BandsContainer
           and passed down as the prop addBand to BandInput. */}
            <Band bands={this.props.bands}/>
      </div>
     
    )
  }
}

const mapStateToProps = (state) => ({
  bands: state.bands
  //coming from combine reducers, also called root state
})

// const mapDispatchToProps = (dispatch) => {
//      return {
//        addBand: (name)=> dispatch(addBand(name)),

//      }
//    }

export default connect(mapStateToProps, null) (BandsContainer);
