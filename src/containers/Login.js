import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { loginUser, resetUserCreated } from '../actions/userActions'

class Login extends Component {
  state = {
    errors: []
  }

  componentWillUnmount() {
    this.props.resetUserCreated();
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s6 push-s3'>
            <div className='card teal lighten-3 z-depth-3'>
              <h3 className='deep-purple-text text-darken-4'>Log in to Espresso.Log</h3>
              <p className='light'>Store and track your espresso recipes more efficiently</p>
            </div>
          </div>
        </div>

        <LoginForm addError={this.addError}
          clearErrors={this.clearErrors}
          errors={this.state.errors}
          handleSubmit={this.handleLoginSubmit} />
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
  
  handleLoginSubmit = data => {
    // Send data to redux store 
    this.props.loginUser(data);
  }
}


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: data => dispatch(loginUser(data)),
    resetUserCreated: () => dispatch(resetUserCreated())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);