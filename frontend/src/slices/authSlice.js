import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchLoginResult } from '../services/graphqlApi';


const initialState = {
    data: '',
};

export const getToken = createAsyncThunk(
    'login/getToken',
    async ({username, password}) => {
        const response = await fetchLoginResult({username, password});
        return response.tokenAuth.token;
    },
);

export const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getToken.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(getToken.rejected, (state, action) => {
                state.data = `error-${action.meta.requestId}`;
            });
    },
});

export const selectToken = (state) => state.login.data;

export default authSlice.reducer;
