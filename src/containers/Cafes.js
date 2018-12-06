import React, { Component } from 'react';
import { connect } from 'react-redux';

import CafeForm from '../components/CafeForm';
import CafeList from '../components/CafeList';
import { addCafe } from '../actions/cafeActions';

class Cafes extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s6'>
            <CafeForm handleSubmit={this.cafeFormSubmit} />
          </div>

          <div className='col s6'>
            <CafeList />
          </div>
        </div>
      </div>
    );
  }

  cafeFormSubmit = (data) => {
    this.props.addCafe(data)
  }

}

export default connect(null, { addCafe })(Cafes);