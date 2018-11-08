import React, { Component } from 'react';

class RegistrationForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <React.Fragment>
        <h3>Create your personal account</h3>

        {this.props.errors && <p className='error'>{this.props.errors.join(', ')}</p>}

        <form onSubmit={this.handleSubmit}>
          <div className='formElement'>
            <input type='text' id='name'
              placeholder='Name'
              value={this.state.name}
              onChange={this.handleChange} />
            <p className='light small'>This will act as your public username. Feel free to use your full name or a handle.</p>

            <input type='email' id='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleChange} />
            <p className='light small'>You'll use this to log in once your account is created.</p>

            <input type='password' id='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange} />
            <p className='light small'>At least 8 characters, includes a number, uppercase character, and a symbol.</p>

            <input type='password' id='password_confirmation'
              placeholder='Password'
              value={this.state.password_confirmation}
              onChange={this.handleChange} />
            <p className='light small'>Confirm your password here.</p>

            <input type='submit' value='Sign up' />
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
    if (this.state.name.length === 0 ) {
      this.props.addError("Name is required");
      return;
    }

    if (this.state.email.length === 0 ) {
      this.props.addError("Email is required");
    }

    if (!this.validatePassword(this.state.password)) {
      this.props.addError("Password does not meet requirements");
      return;
    }

    if (!this.confirmPassword()) {
      this.props.addError("Passwords do not match");
      return;
    }
    const data = { user: this.state };
    this.props.handleSubmit(data);
  }

  validatePassword = password => {
    const validPass = /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&?"]).*$/
    return validPass.test(password);
  }

  confirmPassword = () => {
    return this.state.password === this.state.password_confirmation;
  }
}

export default RegistrationForm;