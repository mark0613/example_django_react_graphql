import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { sendLoginRequest } from '../services/graphqlApi';

const initialState = {
    token: '',
    status: '',
};

export const setToken = createAsyncThunk('auth/setToken', async ({ username, password }) => {
    const response = await sendLoginRequest({ username, password });
    return response.tokenAuth.token;
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setToken.fulfilled, (state, action) => {
                state.token = action.payload;
                state.status = 'ok';
            })
            .addCase(setToken.rejected, (state, action) => {
                state.status = `error-${action.meta.requestId}`;
            });
    },
});

export const selectToken = (state) => state.auth.token;
export const selectStatus = (state) => state.auth.status;

export default authSlice.reducer;
