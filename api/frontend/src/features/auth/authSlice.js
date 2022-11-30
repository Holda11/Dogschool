import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

//Získání "user(a)" z lokálního uložiště
const user = JSON.parse(localStorage.getItem('user'))

//Počáteční stav (defaultní)
const initialState = {
    user: user ? user : null, //pokud je user v locálu, user = user, pokud ne, tak se rovná ničemu
    isError: false, //z počátku nepravda
    isSuccess: false,//z počátku nepravda
    message: ''//prázdná
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

  export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
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
    extraReducers: (buider)=>{
      buider.addCase(login.fulfilled, (state, action)=>{
        state.isSuccess = true
        state.user =action.payload
      })
      .addCase(login.rejected, (state, action)=>{
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state)=>{
        state.user = null
      })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer