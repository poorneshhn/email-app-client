"use client";
import { isLoggedIn } from "@/component/utils/userUtils";
import React, { createContext, Dispatch, useState } from "react";
import { setCurrentUser } from "../redux/slices/authSlice";
import { store } from "../redux/store";

export const DataContext = createContext<{
  user: User;
  setUser: Dispatch<any> | null;
}>({ user: {}, setUser: null });
const UserContext = ({
  userObj,
  children,
}: {
  userObj: any;
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(userObj);
  if (isLoggedIn(userObj)) {
    store.dispatch(setCurrentUser(user));
  }
  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
};

export default UserContext;
