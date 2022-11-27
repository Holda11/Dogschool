import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import ovcakService from './ovcakService'


const initialState = {
    ovcak: [],
    isError: false,
    isSuccess: false,
    message:''
}

export const getOvcak = createAsyncThunk(
    'ovcak/Get',
    async(_, thunkAPI) =>{
        try{
            return await ovcakService.getOvcak()
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

export const createOvcak = createAsyncThunk(
    'ovcak/Create',
    async(ovcakData, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await ovcakService.createOvcak(ovcakData, token)
        } catch(error){
            const message = (
                error.response && error.response.data && error.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteOvcak = createAsyncThunk(
    async(id, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await ovcakService.deleteOvcak(id, token)
        } catch(error){
            const message = (
                error.response && error.response.data && error.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
        }
    }
)

export const ovcakSlice = createSlice({
    name: 'ovcak',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder)=>{
        builder
        .addCase(createOvcak.fulfilled, (state, action)=>{
            state.isSuccess = true
            state.ovcak.push(action.payload)
        })
        .addCase(createOvcak.rejected, (state, action) =>{
            state.isError = true
            state.message = action.payload
        })
        .addCase(getOvcak.fulfilled, (state, action) =>{
            state.isSuccess = true
            state.ovcak = action.payload
        })
        .addCase(getOvcak.rejected, (state, action) =>{
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteOvcak.fulfilled, (state, action) =>{
            state.isSuccess = true
            state.ovcak = state.ovcak.filter(
                (ovcak) => ovcak._id !== action.payload.id
            )
        })
        .addCase(deleteOvcak.rejected, (state, actions) =>{
            state.isError = true
            state.message = actions.payload
        })
    }
})
export const {reset} = ovcakSlice.actions
export default ovcakSlice.reducer