import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    alltodos:['bunny','pooji','yogi','gayatri']
}

const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers:{
        initial: (state)=>{
            state.alltodos=initialState.alltodos
        }
    }
})

export const {initial} = todolistSlice.actions;
export default todolistSlice.reducer;