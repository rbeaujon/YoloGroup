import { createStore } from 'redux';
import { combineReducers } from "redux";
import  YoloGroupReducer from './yologroup/yologroup.reducer';


const reducers = combineReducers ({
    YoloGroupReducer
})

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());    

export default store;
