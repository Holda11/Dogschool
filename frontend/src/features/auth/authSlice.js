import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    message: ''
}

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
      return await authService.login(user)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset: (state) =>{
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: ()=>{}
})

export const {reset} = authSlice.actions
export default authSlice.reducer