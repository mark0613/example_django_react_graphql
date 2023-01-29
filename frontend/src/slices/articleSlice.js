import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchAllArticles } from '../services/graphqlApi';


const initialState = {
    data: {},
};

export const getAllArticles = createAsyncThunk(
    'article/getAllArticles',
    async () => {
        const responst = await fetchAllArticles();
        return responst;
    }
);

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllArticles.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const selectAllArticles = (state) => state.article.data;

export default articleSlice.reducer;
