"use client";
import { setCurrentUser } from "@/component/redux/slices/authSlice";
import { store } from "@/component/redux/store";
import { isLoggedIn } from "@/component/utils/userUtils";
import React from "react";

const ClientLevel = ({
  userObj,
  children,
}: {
  userObj: any;
  children: React.ReactElement;
}) => {
  if (isLoggedIn(userObj)) {
    store.dispatch(setCurrentUser(userObj));
  } else {
    store.dispatch(setCurrentUser({}));
  }
  return children;
};

export default ClientLevel;
