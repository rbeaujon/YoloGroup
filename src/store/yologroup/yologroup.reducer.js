import { IS_AUTHENTICATED, SET_URL } from './yologroup.actions';

export const getinitialState = () => ({
    isSubmitted: false,
    id: null,
    name: null,
    url: null
});

/** @namespace  YoloGroup/Store/Yologroup/Yologroup/Reducer */
export const YoloGroupReducer = (
    state = getinitialState(),
    action
) => {
    const { payload, type } = action;

    switch (type) {

    case IS_AUTHENTICATED:
        return {
            ...state,
            isSubmitted: payload.login,
            id:  payload.id,
            name:  payload.name
        } 
    case SET_URL:
        return {
            ...state,
            url: payload.url
        }           
    // eslint-disable-next-line no-fallthrough
    default:
            return state;
    }
};

export default YoloGroupReducer;
