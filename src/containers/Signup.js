import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegistrationForm from '../components/RegistrationForm';
import { registerUser } from '../actions/userActions';

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
          errors={this.state.errors}
          handleSubmit={this.handleRegistrationSubmit} />
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

  handleRegistrationSubmit = data => {
    // Send data to redux store
    this.props.registerUser(data);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: data => dispatch(registerUser(data))
  }
}

export default connect(null, mapDispatchToProps)(Signup);