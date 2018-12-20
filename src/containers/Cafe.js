import React, { Component } from 'react';

class Cafe extends Component {

  state = {
    cafeId: parseInt(this.props.location.pathname.replace("/cafes/", ""))
  }
  render() {
    const cafe = this.props.cafes.cafes.find(c => c.id === this.state.cafeId);
    return !cafe ? null : (
      <div className='container'>
        <div className='card indigo col s12 z-depth-4'>
          <h3 className='darker'>Cafe Container</h3>
          <h4 className='darker'>{cafe && cafe.name}</h4>
        </div>
      </div>
    )
  }
}

export default Cafe;