import { createSlice, Dispatch } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface AuthState {
  user: Partial<User>;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
