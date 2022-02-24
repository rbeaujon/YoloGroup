export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
export const SET_URL = 'SET_URL';
export const SET_ERROR = 'SET_ERROR';

/** @namespace YoloGroup/Store/YoloGroup/YoloGroup/Action/isSubmitted */
export const isAuthenticated = (login, id, name, ip) => ({
    type: IS_AUTHENTICATED,
    payload: {
        login,
        id,
        name,
        ip

    }
});
/** @namespace YoloGroup/Store/YoloGroup/YoloGroup/Action/setURL */
export const setURL = (url) => ({
    type: SET_URL,
    payload: {
        url

    }
});
/** @namespace YoloGroup/Store/YoloGroup/YoloGroup/Action/setError */
export const setError = (error) => ({
    type: SET_ERROR,
    payload: {
        error

    }
});