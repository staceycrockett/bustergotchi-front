import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './Register';

export function RegistrationPage(props) {
    
    if (props.loggedIn) {
        return <Redirect to="/buster" />;
    }
    return (
        <div className="home">
            <RegistrationForm />
            <Link to="/">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);