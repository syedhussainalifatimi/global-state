import { configureStore } from '@reduxjs/toolkit'
import fragranceReducer from '../fragrances-reducer/fragranceSlice'
import cartItemsReducer from '../cart-reducer/cartSlice'
import usersInfoReducer from '../user-reducer/userSlice'
import pantsReducer from '../pant-reducer/pantSlice'
import signInReducer from '../signIn-reducer/signInSlice'

export const store = configureStore({
  reducer: {
    fragrance: fragranceReducer,
    cartItems: cartItemsReducer,
    usersInfo: usersInfoReducer,
    pants: pantsReducer,
    signIn: signInReducer, 
  },
})