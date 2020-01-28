import { USER_PAGE_CHANGE_WARN_STATE } from './actions';
import { USER_PAGE_CHANGE_ERRORS_LIST } from './actions';

const InitialState = {
    errors: [],
    warn: false
}

export const userPageReducer = (state=InitialState, action) => {
    switch(
        action.type 
    ){
        case USER_PAGE_CHANGE_WARN_STATE:
            return {
                ...state,
                warn: action.payload
            }
        case USER_PAGE_CHANGE_ERRORS_LIST:
            return {
                ...state,
                errors: action.payload
        }
        default:
            return state;
    }
    
}