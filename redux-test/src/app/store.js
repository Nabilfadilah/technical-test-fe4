// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../features/articleSlice';

// membuat dan mengatur Redux store
export const store = configureStore({
  reducer: {
    // menghubungkan slice article ke dalam state global
    article: articleReducer,
  },
});