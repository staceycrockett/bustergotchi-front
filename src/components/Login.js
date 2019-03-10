import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';

class Login extends Component {
  
    render() { 
        
        return ( 
            <div className="text-center">
                <h5 style={{marginTop:100, marginBottom:30}}>Sign In</h5>
                <form className="form-signin" 
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
                )}>

                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                    />
                    <label htmlFor="username">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                    />
                    <br /><br></br>
                    <button className="btn btn-primary">Sign In</button>
                </form>
            </div>
         );
    }

    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
        
    }

}
 
export default reduxForm({
    form: 'login'
})(Login);