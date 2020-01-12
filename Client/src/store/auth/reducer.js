import { AUTH_CHANGE_WARN_STATE } from './action';
import { AUTH_CHANGE_ERRORS_LIST } from './action';

const InitState = {
    errors: [],
    warn: false
}

export const authReducer = (state=InitState, action) => {
    switch(
        action.type 
    ){
        case AUTH_CHANGE_WARN_STATE:
            return {
                ...state,
                warn: action.payload
            }
        case AUTH_CHANGE_ERRORS_LIST:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
}