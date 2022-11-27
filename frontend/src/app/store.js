import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import newsReducer from '../features/news/newsSlice';
import dogsReducer from '../features/dogs/dogsSlice';
import boxerReducer from '../features/boxer/boxerSlice';
import dobrmanReducer from '../features/dobrman/dobrmanSlice';
import ovcakReducer from '../features/ovcak/ovcakSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    dogs: dogsReducer,
    boxer: boxerReducer,
    dobrman: dobrmanReducer,
    ovcak: ovcakReducer
  },
});
