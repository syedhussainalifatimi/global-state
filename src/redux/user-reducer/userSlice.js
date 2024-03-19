import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersInfo: [
    {
      email : 'fatim.aw609@gmail.com',
      password: 'aliali'
    }
  ],
};

export const usersInfoSlice = createSlice({
  name: 'usersInfo',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.usersInfo = [...state.usersInfo, action.payload]; 
      // Create a new array with the new item added
    },
    removeUser: (state, action) => {
      state.usersInfo = state.usersInfo.filter(item => item.email !== action.payload.email); // Filter out the item to be removed
    },
  },
});

export const { addUser, removeUser } = usersInfoSlice.actions; // Extracting the action creators

export default usersInfoSlice.reducer;
