import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signIn: [{
    isSignInWithGoogle: false 
  }],
};

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    signInUser: (state) => {
      state.signIn = [{isSignInWithGoogle: true}]; 
    },
    signOutUser: (state) => {
      state.signIn = [{isSignInWithGoogle: false}]; 
    },
  },
});

export const { signInUser, signOutUser } = signInSlice.actions; 

export default signInSlice.reducer;

