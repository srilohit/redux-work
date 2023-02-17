import reducer from "./reducer";
import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";

var store = createStore(reducer,applyMiddleware(thunk));

export default store;