import React, { useState } from "react";
import Link from "next/link";
import { getCookie } from "@/component/utils/userUtils";
import HeaderLinksComponent from "./HeaderLinksComponent";
import { isEmpty } from "@/component/utils/utils";

function Header() {
  const userCookie = getCookie("userID");
  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          prefetch={false}
          href={isEmpty(userCookie) ? "/" : "/surveys"}
          className="left brand-logo"
        >
          App Logo
        </Link>
        <HeaderLinksComponent userCookie={userCookie} />
      </div>
    </nav>
  );
}

export default Header;
