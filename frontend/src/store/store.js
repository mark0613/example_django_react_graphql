import { configureStore } from '@reduxjs/toolkit';

import allArticlesReducer from '../slices/allArticlesSlice';
import loginReducer from '../slices/loginSlice';


export const store = configureStore({
    reducer: {
        article: allArticlesReducer,
        login: loginReducer,
    },
});
