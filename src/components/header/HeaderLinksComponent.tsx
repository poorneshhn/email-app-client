"use client";

import { isLoggedIn } from "@/component/utils/userUtils";
import React from "react";
import { useAppSelector } from "../../custom-hooks/typedReactReduxHooks";

import HeaderLinksLoggedIn from "./HeaderLinksLoggedIn";
import { API } from "@/component/contants/urlConstants";

const HeaderLinksComponent: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user);

  return (
    <div>
      <ul className="right">
        {!isLoggedIn(currentUser) ? (
          <li>
            <a href={`${API}/auth/google`}>Login with google</a>
          </li>
        ) : (
          <HeaderLinksLoggedIn />
        )}
      </ul>
    </div>
  );
};

export default HeaderLinksComponent;
