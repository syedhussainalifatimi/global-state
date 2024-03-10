import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload]; 
      // Create a new array with the new item added
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id); // Filter out the item to be removed
    },
  },
});

export const { addItem, removeItem } = cartItemsSlice.actions; // Extracting the action creators

export default cartItemsSlice.reducer;


