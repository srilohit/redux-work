const inittialState ={
    userDetails:{
        fullname:'',
        mobile:'',
        vehicalNo:'',
        selectedCarType:''
    }
}

var userReducer =(state=inittialState,action)=>{
    if(action.type==='UPDATEUSER'){
        return {...state,userDetails:{...action.payload}}
    }
    return state
}

export default userReducer;