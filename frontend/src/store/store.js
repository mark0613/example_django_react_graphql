import { configureStore } from '@reduxjs/toolkit';

import allArticlesReducer from '../slices/allArticlesSlice';


export const store = configureStore({
    reducer: {
        article: allArticlesReducer,
    },
});
