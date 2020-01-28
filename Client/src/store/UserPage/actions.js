export const USER_PAGE_CHANGE_WARN_STATE = 'USER_PAGE_CHANGE_WARN_STATE';
export const USER_PAGE_CHANGE_ERRORS_LIST = 'USER_PAGE_CHANGE_ERRORS_LIST';

export const setErrors = (errors) => ({
    type: USER_PAGE_CHANGE_ERRORS_LIST,
    payload: errors
});
export const setWarn = (warn) => ({
    type: USER_PAGE_CHANGE_WARN_STATE,
    payload: warn
});
