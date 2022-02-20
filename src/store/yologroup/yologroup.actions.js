export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
export const SET_URL = 'SET_URL';

/** @namespace YoloGroup/Store/YoloGroup/YoloGroup/Action/isSubmitted */
export const isAuthenticated = (login, id, name) => ({
    type: IS_AUTHENTICATED,
    payload: {
        login,
        id,
        name

    }
});
export const setURL = (url) => ({
    type: SET_URL,
    payload: {
        url

    }
});