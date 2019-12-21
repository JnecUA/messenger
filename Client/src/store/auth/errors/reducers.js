import { AUTH_CHANGE_ERRORS_LIST } from './actions';

export const errorsReducer = (state=[], action) => {
    switch(
        action.type 
    ){
        case AUTH_CHANGE_ERRORS_LIST:
            return {
                ...state,
                state: action.payload
            }
    }
    return state;
}