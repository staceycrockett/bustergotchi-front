import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/auth';
import userActionReducer from './reducers/user-actions';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {setAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        userActions: userActionReducer
    }),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

export default store;