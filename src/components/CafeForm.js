import React, { Component } from 'react';

class CafeForm extends Component {
  state = {
    name: '',
    address: ''
  }

  render() {
    return (
      <div className='row'>
        <div className='card transparent col s12 z-depth-0'>
          <h4 className='dark'>Add a new cafe</h4>
        </div>
        {this.props.errors && <p className='error'>
          {this.renderErrors()}
        </p>}

        <form className='col s12' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='formElement-split'>
              <input type='text' id='name' value={this.state.name}
                onChange={this.handleChange} />
              <label htmlFor='name'>Name</label>
            </div>
          </div>

          <div className='row'>
            <div className='formElement-split'>
              <input type='text' id='address' value={this.state.address}
                onChange={this.handleChange} />
              <label htmlFor='address'>Address</label>
            </div>
          </div>
          <div className='row'>
            <button className='btn btn-large waves-effect waves-light' type='submit'>Add Cafe<i className='material-icons right'>send</i></button>
          </div>
        </form>
      </div>
    );
  }

  renderErrors = () => {
    const errors = this.props.errors;
    const errKeys = Object.keys(errors);
    return errKeys.map(key => (
      `${key} ${errors[key].join(", ")}`
    )).join(", ")
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const cafe = {cafe: this.state}
    this.props.handleSubmit(cafe);
    this.setState({
      name: '',
      address: ''
    });
  }
}

export default CafeForm;