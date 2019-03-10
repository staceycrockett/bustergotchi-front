import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/landing-page';
import Buster from './components/Buster';
import RegistrationPage from './components/registration-page';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/buster" component={Buster} />
        <Route exact path="/register" component={RegistrationPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
