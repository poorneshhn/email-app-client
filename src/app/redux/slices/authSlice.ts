import { createSlice, Dispatch } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

interface User {
  name: string;
  email: string;
}

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

export const getUser =
  () => async (dispatch: Dispatch, getState: RootState) => {
    try {
      const { data: user }: { data: { user: User } } = await axios.get(
        "/api/user"
      );
      console.log(user, "user in redux");
      if (user) {
        dispatch(setCurrentUser(user));
        return user;
      }
    } catch (error) {
      console.log(error, "error while fetching user");
    }
  };

export default authSlice.reducer;
