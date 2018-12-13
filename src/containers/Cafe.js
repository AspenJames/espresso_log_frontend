import React, { Component } from 'react';

class Cafe extends Component {

  state = {
    cafe: null
  }

  componentDidMount(){
    const cafeId = parseInt(this.props.location.pathname.replace("/cafes/", ""))
    const cafe = this.props.cafes.cafes.find(c => c.id === cafeId);
    this.setState({
      cafe: cafe
    });
  }


  render() {
    return !this.state.cafe ? null : (
      <div className='card indigo col s12 z-depth-4'>
        <h3 className='darker'>Cafe Container</h3>
        <h4 className='darker'>{this.state.cafe && this.state.cafe.name}</h4>
      </div>
    )
  }
}

export default Cafe;