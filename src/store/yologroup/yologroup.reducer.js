import { IS_LOGIN } from './yologroup.actions';

export const getinitialState = () => ({
    isSubmitted: false
});

/** @namespace  YoloGroup/Store/Yologroup/Yologroup/Reducer */
export const YoloGroupReducer = (
    state = getinitialState(),
    action
) => {
    const { payload, type } = action;

    switch (type) {

    case IS_LOGIN:
        return {
            ...state,
            isSubmitted: payload.login
        }   
    // eslint-disable-next-line no-fallthrough
    default:
            return state;
    }
};

export default YoloGroupReducer;
