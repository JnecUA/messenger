import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { registerReducer } from './register/reducers';
import { reducer as formReducer } from 'redux-form';

export const rootReducer =  combineReducers({
    auth: authReducer,
    register: registerReducer,
    form: formReducer
})