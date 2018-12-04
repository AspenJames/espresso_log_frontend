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
    return <div className="row">
        {this.props.errors && <p className="error">
            {this.props.errors.join(", ")}
          </p>}

        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="formElement-split">
              <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
              <label htmlFor="name">Name</label>
              <span className="helper-text">
                This will act as your public username. Feel free to use your
                full name or a handle.
              </span>
            </div>
          </div>

          <div className="row">
            <div className="formElement-split">
              <input type="email" id="email" value={this.state.email} onChange={this.handleChange} />
              <label htmlFor="email">Email</label>
              <span className="helper-text">
                You'll use this to log in once your account is created.
              </span>
            </div>
          </div>

          <div className="row">
            <div className="formElement-split">
              <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
              <label htmlFor="password">Password</label>
              <span className="helper-text">
                At least 8 characters, includes a number, uppercase
                character, and a symbol.
              </span>
            </div>
          </div>

          <div className="row">
            <div className="formElement-split">
              <input type="password" id="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} />
              <label htmlFor="password-confirmation">
                Password Confirmation
              </label>
              <span className="helper-text">
                Confirm your password here.
              </span>
            </div>
          </div>

          <div className="row">
            <button className="btn btn-large waves-effect waves-light" type="submit">
              Sign Up <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>;
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
      return;
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
