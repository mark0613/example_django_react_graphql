import { configureStore } from '@reduxjs/toolkit';

import articleReducer from '../slices/articleSlice';
import authReducer from '../slices/authSlice';


export const store = configureStore({
    reducer: {
        article: articleReducer,
        auth: authReducer,
    },
});
