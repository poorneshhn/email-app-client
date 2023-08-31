import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface AuthState {
  auth: { name: string };
}

// Define the initial state using that type
const initialState: AuthState = {
  auth: { name: "Poornesh" },
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
