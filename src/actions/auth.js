import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {saveAuthToken} from '../local-storage';

import {API_BASE_URL} from '../config';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.userid));
    saveAuthToken(authToken);
};

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    return axios({
        url: API_BASE_URL + '/login.php',
        method: 'POST',
        data: JSON.stringify({
            username: username,
            password: password
        })
      }).then(function (response) {
         
        var token = response.data.jwt;
        storeAuthInfo(token, dispatch)
        
      })
      .catch(function (error) {
        console.log(error);
      });
    
  
};