import React from "react";
import Link from "next/link";
import HeaderLinksComponent from "./HeaderLinksComponent";
import { isLoggedIn } from "@/component/utils/userUtils";

function Header({ user }: { user: Partial<User> }) {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          prefetch={false}
          href={isLoggedIn(user) ? "/" : "/surveys"}
          className="left brand-logo"
        >
          App Logo
        </Link>
        <HeaderLinksComponent />
      </div>
    </nav>
  );
}

export default Header;
