import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegistrationForm from '../components/RegistrationForm';
import { registerUser } from '../actions/userActions';
import { XMLNS_1_0 } from 'xmlchars';

class Signup extends Component {
  state = {
    errors: []
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s6 push-s3'>
            <div className='card teal lighten-3 z-depth-3'>
              <h3 className='deep-purple-text text-darken-4'>Join Espresso.Log</h3>
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
            <br /><br /><br /><br />OAUTH GOES HERE<br /><br /><br /><br /><br />
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