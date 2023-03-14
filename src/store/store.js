import userReducer from "./userReducer";
import { combineReducers, createStore } from "redux";

var store = createStore(combineReducers({
    user: userReducer
}))

export default store;