import { configureStore } from '@reduxjs/toolkit';
import filesSlice from './filesSlice';

const store = configureStore({
  reducer: {
    files: filesSlice,
  },
});

export default store;
