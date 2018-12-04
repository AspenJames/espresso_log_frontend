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
      <div className='container'>
        <div className='row'>
          <div className='col s6 push-s3'>
            <div className='card brown lighten-3'>
              <h3>Create your personal account</h3>
              <p className='light'>Store and track your espresso recipes more efficiently</p>
            </div>
          </div>
        </div>
      
      <div className='row'>
        <div className='col s6'>
          <RegistrationForm addError={this.addError}
            clearErrors={this.clearErrors}
            errors={this.state.errors}
            handleSubmit={this.handleRegistrationSubmit} />
        </div>
        <div className='col s6 orange'>
          Section reserved for OAuth
        </div>
      </div>
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