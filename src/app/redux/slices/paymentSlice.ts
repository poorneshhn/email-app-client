import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { Token } from "react-stripe-checkout";
import axiosInstance from "../../axiosInstance/axiosInstance";
import type { RootState } from "../store";
import { setCurrentUser } from "./authSlice";

interface AuthState {
  userCredit: number;
}

// Define the initial state using that type
const initialState: AuthState = {
  userCredit: 0,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
});

export const {} = paymentSlice.actions;

export default paymentSlice.reducer;

export const handleToken =
  (token: Token) =>
  async (dispatch: Dispatch<any>, getState: () => RootState) => {
    try {
      const { data } = await axiosInstance.post("/api/stripe", token);
      dispatch(setCurrentUser(data));
    } catch (error) {}
  };
