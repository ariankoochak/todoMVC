import { configureStore } from "@reduxjs/toolkit";
import worksReducer from '../slices/worksSlice'

export const store = configureStore({
    reducer: {
        works : worksReducer,
    },
});
