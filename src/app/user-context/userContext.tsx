"use client";
import React, { createContext, useState } from "react";

export const DataContext = createContext<{}>({});
const UserContext = ({ children }: { children: React.ReactNode }) => {
  const [userHeader, setUserHeader] = useState({});

  return (
    <DataContext.Provider value={{ userHeader, setUserHeader }}>
      {children}
    </DataContext.Provider>
  );
};

export default UserContext;
