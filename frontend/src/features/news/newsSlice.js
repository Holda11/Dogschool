import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    news: [],
    isError: false,
    isSuccess: false,
    message:''
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers:{
        reset: (state) => initialState
    }
})

export const {reset} = newsSlice.actions
export default newsSlice.reducer