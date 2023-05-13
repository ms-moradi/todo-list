import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoReducer/todoReduce";

export const store = configureStore({
    reducer:{
        todo:todoReducer,
    },
})