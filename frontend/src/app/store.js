import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import newsReducer from '../features/news/newsSlice';
import dogsReducer from '../features/dogs/dogsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    dogs: dogsReducer
  },
});
