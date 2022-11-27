import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dobrmanService from "./dobrmanService"

const initialState = {
    dobrman: [],
    isError: false,
    isSuccess: false,
    message:''
}


// getNews = pokusí se o získání dat, pokud je nezíská, pošle zpátky error message
export const getDobrman = createAsyncThunk(
    'dobrman/Get', 
    async (_, thunkAPI) =>{
        try{
        return await dobrmanService.getDobrman()
    } catch(error){
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
}
)

// createNews = pokusí se získat token, pokuď token není, pošle zpět error
export const createDobrman = createAsyncThunk(
    'dobrman/Create',
    async (dobrmanData, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await dobrmanService.createDobrman(dobrmanData, token)
        } catch(error){
            const message = (
                error.response && error.response.data && error.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
        }
    }
)

// deleteNews = pokusí se zíkat token, pokud token není, dostaneme error
export const deleteDobrman = createAsyncThunk(
    'news/Delete',
    async(id, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await dobrmanService.deleteDobrman(id, token)
        } catch (error){
            const message = (
                error.response && error.response.data && error.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
        }
    }
)
export const dobrmanSlice = createSlice({
    name: 'dobrman',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder)=>{
        builder
        .addCase(createDobrman.fulfilled, (state, action)=>{
            state.isSuccess = true
            state.dobrman.push(action.payload)
        })
        .addCase(createDobrman.rejected, (state, action) =>{
            state.isError = true
            state.message = action.payload
        })
        .addCase(getDobrman.fulfilled, (state, action) =>{
            state.isSuccess = true
            state.dobrman = action.payload
        })
        .addCase(getDobrman.rejected, (state, action) =>{
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteDobrman.fulfilled, (state, action) =>{
            state.isSuccess = true
            state.dobrman = state.dobrman.filter(
                (dobrman) => dobrman._id !== action.payload.id
            )
        })
        .addCase(deleteDobrman.rejected, (state, actions) =>{
            state.isError = true
            state.message = actions.payload
        })
    }
})

export const {reset} = dobrmanSlice.actions
export default dobrmanSlice.reducer