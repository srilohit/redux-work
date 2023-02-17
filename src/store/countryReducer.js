const initialState ={
    country:[]
}

var countryReducer =(state=initialState,action)=>{
    if(action.type==='INITCOUNTRIES'){
        return {...state,country:action.playload}
    }

    return state;
}

export default countryReducer; 