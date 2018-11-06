import React, { Component } from 'react';

import RegistrationForm from '../components/RegistrationForm';

class Signup extends Component {
  state = {
    errors: []
  }

  render() {
    return (
      <div>
        <h1>Join Espresso.Log</h1>
        <p className='light'>Store and track your espresso recipes more efficiently</p>
      
        <RegistrationForm addError={this.addError}
          clearErrors={this.clearErrors}
          errors={this.state.errors} />
      </div>
    );
  }

  addError = error => {
    this.setState(state => {
      return {
        errors: state.errors.concat(error)
      }
    });
  }

  clearErrors = () => {
    this.setState({
      errors: []
    });
  }
}

export default Signup;