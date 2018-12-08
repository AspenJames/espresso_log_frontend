import React, { Component } from 'react';
import { connect } from 'react-redux';

import CafeForm from '../components/CafeForm';
import CafeList from '../components/CafeList';
import * as actions from '../actions/cafeActions';

class Cafes extends Component {

  componentWillUnmount() {
    this.props.resetCafes();
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s6'>
            <CafeForm handleSubmit={this.cafeFormSubmit}
              errors={this.props.cafes.errors}
              resetErrors={this.props.resetCafeErrors} />
          </div>

          <div className='col s6'>
            <CafeList cafes={this.props.cafes.cafes} />
          </div>
        </div>
      </div>
    );
  }

  cafeFormSubmit = (data) => {
    this.props.postCafe(data)
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cafes: state.cafes
  }
}

export default connect(mapStateToProps, { ...actions })(Cafes);