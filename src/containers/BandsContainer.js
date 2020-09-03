import React, {Component} from 'react';
import {connect} from 'react-redux';

import BandsInput from '../components/BandInput';
import Band from '../components/Band';

class BandsContainer extends Component {
  addBand = (bandObj) => ({
    type: 'ADD_BAND',
    payload: bandObj,
  });

  renderList = () =>
    this.props.bands.map((band) => <Band key={band.name} band={band} />);

  render() {
    return (
      <div>
        <BandsInput
          addBand={(bandObj) => this.props.dispatch(this.addBand(bandObj))}
        />
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bands: state.bands,
});

export default connect(mapStateToProps, null)(BandsContainer);
