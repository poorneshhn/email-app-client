"use client";

import { isLoggedIn } from "@/component/utils/userUtils";
import React from "react";
import { useAppSelector } from "../../custom-hooks/typedReactReduxHooks";

import HeaderLinksLoggedIn from "./HeaderLinksLoggedIn";

const HeaderLinksComponent: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user);

  return (
    <div>
      <ul className="right">
        {!isLoggedIn(currentUser) ? (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        ) : (
          <HeaderLinksLoggedIn />
        )}
      </ul>
    </div>
  );
};

export default HeaderLinksComponent;
