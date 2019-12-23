export const AUTH_CHANGE_WARN_STATE = 'REGISTER_CHANGE_WARN_STATE';
export const AUTH_CHANGE_ERRORS_LIST = 'REGISTER_CHANGE_ERRORS_LIST';

export const setErrors = (errors) => ({
    type: AUTH_CHANGE_ERRORS_LIST,
    payload: errors
});
export const setWarn = (warn) => ({
    type: AUTH_CHANGE_WARN_STATE,
    payload: warn
});