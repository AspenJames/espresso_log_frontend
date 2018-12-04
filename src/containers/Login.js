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
          <div className='col s8 push-s2'>
            <div className='card blue-grey lighten-3 z-depth-3'>
              <h3 className='dark'>Log in to Espresso.Log</h3>
              <p className='light larger'>Store and track your espresso recipes more efficiently</p>
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