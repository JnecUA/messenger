import { REGISTER_CHANGE_WARN_STATE } from './actions';
import { REGISTER_CHANGE_ERRORS_LIST } from './actions';

const InitialState = {
    errors: [],
    warn: false
}

export const registerReducer = (state=InitialState, action) => {
    switch(
        action.type 
    ){
        case REGISTER_CHANGE_WARN_STATE:
            return {
                ...state,
                warn: action.payload
            }
        case REGISTER_CHANGE_ERRORS_LIST:
            return {
                ...state,
                errors: action.payload
        }
    }
    return state;
}