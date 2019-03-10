import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import logo from '../images/buster.png';
import {fetchUserActions} from '../actions/user-actions';

class Buster extends Component{
    componentDidMount() {
        this.props.dispatch(fetchUserActions());
    }

    render() { 
        var actionsobj = this.props.userActions;
        var actionsarray = [];

        Object.keys(actionsobj).map(function(key) {
            actionsarray.push(actionsobj[key])
        });
        
        return ( 
            <div className="text-center">
                {actionsarray.map((item, key) => 
                    <button key={item.actionid} 
                    className="btn btn-success"
                    style={{margin:5}}>{item.actionname}</button>
                    )}
                <img src={logo} width="500" height="500" className="d-inline-block align-top rotate" alt=""></img> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userActions: state.userActions.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Buster));