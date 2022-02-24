import { IS_AUTHENTICATED, SET_URL, SET_ERROR } from './yologroup.actions';

export const getinitialState = () => ({
    isSubmitted: false,
    user_id: null,
    operator_id: null,
    name: null,
    url: null,
    ip: null,
    error: null
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
            user_id:  payload.id,
            name:  payload.name,
            ip: payload.ip
        } 
    case SET_URL:
        return {
            ...state,
            url: payload.url
        }  
    case SET_ERROR:
        if(payload.error === 'login'){
            return {
                ...state,
                error: 'Login error, check your credentials and try again'
            }     
        }
        if(payload.error === 'submitted'){
            return {
                ...state,
                error: ''
            }     
        }
              
    // eslint-disable-next-line no-fallthrough
    default:
            return state;
    }
};

export default YoloGroupReducer;
