import {
    FETCH_USER_ACTIONS_SUCCESS,
    FETCH_USER_ACTIONS_ERROR

} from '../actions/user-actions';

const initialState = {
    data: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_USER_ACTIONS_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_USER_ACTIONS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}