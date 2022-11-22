import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import newsReducer from '../features/news/newsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer
  },
});
