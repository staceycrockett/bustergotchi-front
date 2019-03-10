import {API_BASE_URL} from '../config';
import axios from 'axios';

export const FETCH_USER_ACTIONS_SUCCESS = 'FETCH_USER_ACTIONS_SUCCESS';
export const fetchUserActionsSuccess = data => ({
    type: FETCH_USER_ACTIONS_SUCCESS,
    data
});

export const FETCH_USER_ACTIONS_ERROR = 'FETCH_USER_ACTIONS_ERROR';
export const fetchUserActionsError = error => ({
    type: FETCH_USER_ACTIONS_ERROR,
    error
});

const storeActionInfo = (records, dispatch) => {
    dispatch(fetchUserActionsSuccess(records));
};


export const fetchUserActions = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log('axios');
    return axios({
        url: API_BASE_URL + '/action/read.php',
        method: 'POST',
        data: JSON.stringify({
            jwt: `${authToken}`
        })
      }).then(function (response) {
        storeActionInfo(response.data.records, dispatch);
      })
      .catch(function (error) {
      });
   
};
