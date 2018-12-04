import React, { Component } from 'react';
import '../App.css';
import { ConnectedRouter as Router } from 'connected-react-router';
import { connect } from 'react-redux';

import '../styles.css';
import * as actions from '../actions/userActions';
// import AuthenticatedRoute from '../components/AuthenticatedRoute';
import NavBar from '../components/NavBar';
import Routes from '../Routes';

class App extends Component {

  componentDidMount() {
    this.props.retrieveUser();
  }

  render() {
    return (
      <div className="App">
        <Router history={this.props.history}>
          <React.Fragment>
            <NavBar user={this.props.user} 
              logoutUser={this.logoutUser} /><br />
            <Routes />
          </React.Fragment>
        </Router>
      </div>
    );
  }

  logoutUser = () => {
    localStorage.removeItem("phoenixAuthToken");
    this.props.logout();
  }
  
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { ...actions })(App);
