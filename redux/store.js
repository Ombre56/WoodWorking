import { configureStore } from '@reduxjs/toolkit';
import listenerMiddleware from './listener';
import Reducer from './reducer';

export const store = configureStore({
    reducer: {
    app: Reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})
