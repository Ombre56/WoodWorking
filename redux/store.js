import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import listenerMiddleware from './listener';
import Reducer from './reducer';

export const store = configureStore({
    reducer: {
    app: Reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})
