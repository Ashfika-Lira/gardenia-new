import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { productDataApi } from '../hooks/useProducts';

export const store = configureStore({
  // reducerPath and reducer are created for us, which we can pass straight into the reducer parameter of configureStore.
  reducer: {
    [productDataApi.reducerPath]: productDataApi.reducer
  },

  // middleware is also created for us, which will allow us to take advantage of caching, invalidation, polling, and the other features of RTK Query.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productDataApi.middleware),
})

// It will enable to refetch the data on certain events, such as refetchOnFocus and refetchOnReconnect.
setupListeners(store.dispatch)
