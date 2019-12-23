import { AUTH_CHANGE_WARN_STATE } from './action';
import { AUTH_CHANGE_ERRORS_LIST } from './action';

export const authReducer = (state=false, action) => {
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
    }
    return state;
}