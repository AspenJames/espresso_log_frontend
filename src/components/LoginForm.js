import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.errors && <p className='error'>{this.props.errors.join(', ')}</p>}

        <form onSubmit={this.handleSubmit}>
          <div className='formElement'>
            <input type='email' id='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleChange} />
          </div><br />

          <div className='formElement'>
            <input type='password' id='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange} />
          </div><br />
            
          <div className='formElement'>
            <input type='submit' value='Log In' />
          </div><br />
        </form>
      </React.Fragment>
    )
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.clearErrors();

    if (this.state.email.length === 0) {
      this.props.addError("Email is required");
      return;
    }

    if (this.state.password.length < 8) {
      this.props.addError("Password too short");
    }
    const data = { user: this.state }
    this.props.handleSubmit(data);
  }
}

export default LoginForm;