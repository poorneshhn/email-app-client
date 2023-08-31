"use client";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import paymentSlice from "./slices/paymentSlice";
import reminderSlice from "./slices/reminderSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    payment: paymentSlice,
    reminder: reminderSlice,
    // users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
