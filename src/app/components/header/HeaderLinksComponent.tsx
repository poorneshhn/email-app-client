"use client";

import { isEmpty } from "@/component/utils/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

interface HeaderLinksProps {
  userCookie: string;
}
const HeaderLinksComponent: React.FC<HeaderLinksProps> = ({ userCookie }) => {
  const router = useRouter();
  const logout = async () => {
    await axios.get("/api/logout");
    router.refresh();
  };

  return (
    <div>
      <ul className="right">
        {isEmpty(userCookie) ? (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        ) : (
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default HeaderLinksComponent;
