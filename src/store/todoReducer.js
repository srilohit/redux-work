const initialState = {
    alltodos : ['babu','gautam apple','bunny']
}

var todoReducer = (state=initialState,action)=>{
    if(action.type==='ADDTODO'){
         return {...state,alltodos:[...state.alltodos,action.playload]}
    }
    if(action.type==='DELETE'){
        var temp = [...state.alltodos];
        temp.splice(action.playload,1);
        return {...state,alltodos:[...temp]}
    }
    
    return state;
}

export default todoReducer;