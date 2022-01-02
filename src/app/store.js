import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer, { getTotals } from '../features/CartItem/cartSlice';
import { productDataApi } from '../hooks/useProducts';
import productsReducer, { productsFetch } from "../features/ProductsItem/productsSlice";

export const store = configureStore({
  // reducerPath and reducer are created for us, which we can pass straight into the reducer parameter of configureStore.
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productDataApi.reducerPath]: productDataApi.reducer
  },

  // middleware is also created for us, which will allow us to take advantage of caching, invalidation, polling, and the other features of RTK Query.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productDataApi.middleware),
})
store.dispatch(productsFetch());
store.dispatch(getTotals());
// It will enable to refetch the data on certain events, such as refetchOnFocus and refetchOnReconnect.
setupListeners(store.dispatch)
