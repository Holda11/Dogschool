import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import boxerService from './boxerService'


const initialState = {
    boxer: [],
    isError: false,
    isSuccess: false,
    message:''
}

export const getBoxer = createAsyncThunk(
    'boxer/Get',
    async(_, thunkAPI) =>{
        try{
            return await boxerService.getBoxer()
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

export const createBoxer = createAsyncThunk(
    'boxer/Create',
    async(boxerData, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await boxerService.createBoxer(boxerData, token)
        } catch(error){
            const message = (
                error.response && error.response.data && error.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteBoxer = createAsyncThunk(
    async(id, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await boxerService.deleteBoxer(id, token)
        } catch(error){
            const message = (
                error.response && error.response.data && error.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
        }
    }
)

export const boxerSlice = createSlice({
    name: 'boxer',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder)=>{
        builder
        .addCase(createBoxer.fulfilled, (state, action)=>{
            state.isSuccess = true
            state.boxer.push(action.payload)
        })
        .addCase(createBoxer.rejected, (state, action) =>{
            state.isError = true
            state.message = action.payload
        })
        .addCase(getBoxer.fulfilled, (state, action) =>{
            state.isSuccess = true
            state.boxer = action.payload
        })
        .addCase(getBoxer.rejected, (state, action) =>{
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteBoxer.fulfilled, (state, action) =>{
            state.isSuccess = true
            state.boxer = state.boxer.filter(
                (boxer) => boxer._id !== action.payload.id
            )
        })
        .addCase(deleteBoxer.rejected, (state, actions) =>{
            state.isError = true
            state.message = actions.payload
        })
    }
})
export const {reset} = boxerSlice.actions
export default boxerSlice.reducer