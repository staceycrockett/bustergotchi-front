import React, { Component } from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import logo from '../images/buster.png';


export class Navbar extends Component {
  logOut() {
      this.props.dispatch(clearAuth());
      clearAuthToken();
  }

  render() {
      // Only render the log out button if we are logged in
      let logOutButton;
      if (this.props.loggedIn) {
          logOutButton = (
            <form className="form-inline">
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.logOut()}>Log out</button>
            </form>
              
          );
      }

      return (
        <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand" href="/">
          <img src={logo} width="50" height="50" className="d-inline-block align-top" alt=""></img>
          <span style={{fontSize:30}}>Bustergotchi</span>
        </a>
        {logOutButton}
        </nav>
        
      );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});


export default connect(mapStateToProps)(Navbar);