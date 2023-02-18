import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todolistReducer from "../features/todolist/todolistSlice";
import productReducer from "../features/products/productsSlice";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        todolist: todolistReducer,
        products: productReducer
    }
})