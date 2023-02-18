import { createSlice } from "@reduxjs/toolkit";
import { GetProducts } from "../../App/services";



export const productSlice = createSlice({
    name: 'products',
    initialState:{
        products: []
    },
    extraReducers:{
        [GetProducts.fulfilled]: (state,action)=>{
            //console.log(action.payload)
            state.products = action.payload
        }
    }
})

export default productSlice.reducer;