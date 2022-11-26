import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import dogsService from './dogsService'


const initialState = {
    dogs: [],
    isError: false,
    isSuccess: false,
    message:''
}

export const getDogs = createAsyncThunk(
    'dogs/Get',
    async(_, thunkAPI) =>{
        try{
            return await dogsService.getDogs()
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

export const createDogs = createAsyncThunk(
    'dogs/Create',
    async(dogsData, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await dogsService.createDogs(dogsData, token)
        } catch(error){
            const message = (
                error.response && error.response.data && error.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteDogs = createAsyncThunk(
    async(id, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await dogsService.deleteDogs(id, token)
        } catch(error){
            const message = (
                error.response && error.response.data && error.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
        }
    }
)

export const dogsSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder)=>{
        builder
        .addCase(createDogs.fulfilled, (state, action)=>{
            state.isSuccess = true
            state.dogs.push(action.payload)
        })
        .addCase(createDogs.rejected, (state, action) =>{
            state.isError = true
            state.message = action.payload
        })
        .addCase(getDogs.fulfilled, (state, action) =>{
            state.isSuccess = true
            state.dogs = action.payload
        })
        .addCase(getDogs.rejected, (state, action) =>{
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteDogs.fulfilled, (state, action) =>{
            state.isSuccess = true
            state.dogs = state.dogs.filter(
                (dogs) => dogs._id !== action.payload.id
            )
        })
        .addCase(deleteDogs.rejected, (state, actions) =>{
            state.isError = true
            state.message = actions.payload
        })
    }
})
export const {reset} = dogsSlice.actions
export default dogsSlice.reducer