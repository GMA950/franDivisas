import { configureStore } from '@reduxjs/toolkit';
import conversionReducer from './slices/conversionSlice';

const store = configureStore({
  reducer: {
    conversion: conversionReducer,  // Aquí va el slice de conversión
  },
});

export type RootState = ReturnType<typeof store.getState>; //tipado qliao

export type AppDispatch = typeof store.dispatch;

export default store;