import React, { Component } from 'react';

class Cafe extends Component {

  state = {
    cafeId: parseInt(this.props.location.pathname.replace("/cafes/", "")),
    cafe: null
  }

  static getDerivedStateFromProps = (props, state) => {
    if (props.cafes.cafes.length > 0) {
      const cafe = props.cafes.cafes.find(c => c.id === state.cafeId);
      return {
        ...state,
        cafe: cafe
      }
    } else {
      return null
    }
  }
  render() {
    return !this.state.cafe ? null : (
      <div className='container'>
        <div className='card indigo col s12 z-depth-4'>
          <h3 className='darker'>Cafe Container</h3>
          <h4 className='darker'>{this.state.cafe.name}</h4>
          <p className='darker'>{this.state.cafe.address}</p>
        </div>
      </div>
    )
  }
}

export default Cafe;