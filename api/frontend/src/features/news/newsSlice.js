import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "./newsService";

const initialState = {
    news: [],
    isError: false,
    isSuccess: false,
    message:''
}


// getNews = pokusí se o získání dat, pokud je nezíská, pošle zpátky error message
export const getNews = createAsyncThunk(
    'news/Get', 
    async (_, thunkAPI) =>{
        try{
        return await newsService.getNews()
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
export const createNews = createAsyncThunk(
    'news/Create',
    async (newsData, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await newsService.createNews(newsData, token)
        } catch(error){
            const message = (
                error.response && error.response.data && error.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
        }
    }
)

// deleteNews = pokusí se zíkat token, pokud token není, dostaneme error
export const deleteNews = createAsyncThunk(
    'news/Delete',
    async(id, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await newsService.deleteNews(id, token)
        } catch (error){
            const message = (
                error.response && error.response.data && error.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
        }
    }
)
export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder)=>{
        builder
        .addCase(createNews.fulfilled, (state, action)=>{
            state.isSuccess = true
            state.news.push(action.payload)
        })
        .addCase(createNews.rejected, (state, action) =>{
            state.isError = true
            state.message = action.payload
        })
        .addCase(getNews.fulfilled, (state, action) =>{
            state.isSuccess = true
            state.news = action.payload
        })
        .addCase(getNews.rejected, (state, action) =>{
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteNews.fulfilled, (state, action) =>{
            state.isSuccess = true
            state.news = state.news.filter(
                (news) => news._id !== action.payload.id
            )
        })
        .addCase(deleteNews.rejected, (state, actions) =>{
            state.isError = true
            state.message = actions.payload
        })
    }
})

export const {reset} = newsSlice.actions
export default newsSlice.reducer