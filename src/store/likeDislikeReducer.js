const initialState = {
    like : 0,
    dislike : 0
}

var likedislikeReducer = (state=initialState,action)=>{
    if(action.type==='LIKE'){
        return {...state,like:state.like+1}
    }
    if(action.type==='DISLIKE'){
        return {...state,dislike:state.dislike+1}
    }

    return state;
}

export default likedislikeReducer;