import { createAsyncThunk, createSlice, isFulfilled, isRejected } from '@reduxjs/toolkit';

import { fetchAllArticles, sendCreateArticleRequest } from '../services/graphqlApi';


const initialState = {
    data: [],
    status: '',
    requestId: '',
};

export const getAllArticles = createAsyncThunk(
    'article/getAllArticles',
    async () => {
        const response = await fetchAllArticles();
        return response.articles;
    }
);

export const handleCreateArticle = createAsyncThunk(
    'article/handleCreateArticle',
    async ({title, content, time}) => {
        const response = await sendCreateArticleRequest({title, content, time});
        return response.createArticle;
    }
);

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(isFulfilled(getAllArticles, handleCreateArticle),(state, action) => {
                state.status = 'ok';
                state.data = action.payload;
            })
            .addMatcher(isRejected(getAllArticles, handleCreateArticle), (state, action) => {
                state.status = 'error';
                state.data = action.error.message.split(':')[0];
                state.requestId = action.meta.requestId;
            });
    },
});

export const selectAllArticles = (state) => state.article.data;
export const selectCreateArticleResult = (state) => state.article.data;
export const selectStatus = (state) => state.article.status;
export const selectRequestId = (state) => state.article.requestId;

export default articleSlice.reducer;
