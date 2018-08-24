import React from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';

const MuseumPicker = ({ filterPaintings }) => {

  return (
    <div className="row">
      <div className="ui menu">
        <div className="active item">All Museums</div>
        <div onClick= { () => filterPaintings('National Gallery of Art, Washington D.C.')} className="item">National Gallery of Art, Washington D.C.</div>
      </div>
    </div>
  );
};

export default connect(null, actions)(MuseumPicker);
