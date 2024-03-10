import { configureStore } from '@reduxjs/toolkit'
import fragranceReducer from '../fragrances-reducer/fragranceSlice'
import cartItemsReducer from '../cart-reducer/cartSlice'

export const store = configureStore({
  reducer: {
    fragrance: fragranceReducer,
    cartItems: cartItemsReducer,
  },
})