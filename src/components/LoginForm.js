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
    return <div className='row'>
        {this.props.errors && <p className="error">
            {this.props.errors.join(", ")}
          </p>}

        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="formElement">
              <input type="email" id="email" value={this.state.email} onChange={this.handleChange} />
              <label for="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="formElement">
              <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
              <label for='password'>Password</label>
            </div>
          </div>

          <div className="row">
            <button className='btn waves-effect waves-light' type='submit'>
              Log In <i class="material-icons right">send</i>
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