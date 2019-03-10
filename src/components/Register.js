import React, { Component } from 'react';
class Register extends Component {
    
    render() { 
        return ( 
          <div className="text-center">
          <h5 style={{marginTop:100, marginBottom:30}}>Register</h5>
            
            <form className="form-signin">
            
            <label>
              <input className="form-control" 
              type="text" 
              placeholder="First Name"/>
            </label><br />
            <label>
              <input className="form-control" 
              type="text" 
              placeholder="Surname"/>
            </label><br />
            <label>
              <input className="form-control" 
              type="text" 
              placeholder="Username"/>
            </label><br />
            <label>
              <input className="form-control" 
              type="text" 
              placeholder="Password"/>
            </label><br /><br></br>
            <button className="btn btn-primary">Create Account</button>
            </form>
          </div> 
        );
    }
}
 
export default Register;