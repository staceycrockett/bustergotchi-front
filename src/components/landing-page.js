import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './Login';

export function LandingPage(props) {
    
    if (props.loggedIn) {
        return <Redirect to="/buster" />;
    }

    return (
        <div>
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
