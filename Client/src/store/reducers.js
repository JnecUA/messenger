import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer'
import { registerReducer } from './register/reducers'

export const rootReducer =  combineReducers({
    auth: authReducer,
    register: registerReducer
})