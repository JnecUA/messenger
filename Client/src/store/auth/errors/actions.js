export const AUTH_CHANGE_ERRORS_LIST = 'REGISTER_CHANGE_ERRORS_LIST';

export const setErrors = (errors) => ({
    type: AUTH_CHANGE_ERRORS_LIST,
    payload: errors
});