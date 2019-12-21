import { AUTH_CHANGE_WARN_STATE } from './actions';

export const warnReducer = (state=false, action) => {
    switch(
        action.type 
    ){
        case AUTH_CHANGE_WARN_STATE:
            return {
                ...state,
                state: action.payload
            }
    }
    return state;
}