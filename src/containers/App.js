import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> <br />
        <Router>
          <React.Fragment>
            {/* Navbar */}
            <Route exact path='/' component={Home} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
