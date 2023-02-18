import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetProducts = createAsyncThunk( 'getProductsCall', async function(){
        var res = await fetch("https://fakestoreapi.com/products")
        return res.json();
    }
) 