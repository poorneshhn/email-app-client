"use client";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import paymentSlice from "./slices/paymentSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    payment: paymentSlice,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
