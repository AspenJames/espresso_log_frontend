import React, { Component } from 'react';
import '../App.css';
import { Route } from 'react-router';
import { ConnectedRouter as Router } from 'connected-react-router';
import { connect } from 'react-redux';

import '../styles.css';
import { retrieveUser } from '../actions/userActions';
// import AuthenticatedRoute from '../components/AuthenticatedRoute';
import UnAuthRoute from '../components/UnAuthRoute';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Signup from './Signup';
import Login from './Login';

class App extends Component {

  componentDidMount() {
    this.props.retrieveUser();
  }

  render() {
    return (
      <div className="App">
        <Router history={this.props.history}>
          <React.Fragment>
            <NavBar user={this.props.user} /><br />
            <Route exact path='/' component={Home} />
            <UnAuthRoute exact path='/signup' component={Signup} />
            <UnAuthRoute exact path='/login' component={Login} />
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

export default connect(mapStateToProps, { retrieveUser })(App);
