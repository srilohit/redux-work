 import counterReducer from "./counterReducer";
 import todoReducer from "./todoReducer";
 import likedislikeReducer from "./likeDislikeReducer";
 import countryReducer from "./countryReducer";
 import {combineReducers} from 'redux';

 var reducer = combineReducers(
        {
            counter:counterReducer,
            todos:todoReducer,
            likedislike:likedislikeReducer,
            countries:countryReducer
        }
    );

 export default reducer;