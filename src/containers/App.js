import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// import AuthenticatedRoute from '../components/AuthenticatedRoute';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Signup from './Signup';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> <br />

        <Router>
          <React.Fragment>
            <NavBar user={this.props.user} /><br />
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
          </React.Fragment>
        </Router>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
