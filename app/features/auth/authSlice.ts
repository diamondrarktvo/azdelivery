import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface authStateType {
  isUserLogged: boolean;
}

const initialState: authStateType = {
  isUserLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsUserLogged: (state, action: PayloadAction<boolean>) => {
      state.isUserLogged = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const selectors = {
  isUserLogged: (state: { auth: authStateType }) => state.auth.isUserLogged,
};

export const { setIsUserLogged } = authSlice.actions;

export default authSlice;
