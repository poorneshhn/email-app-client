import React from "react";
import Link from "next/link";
import HeaderLinksComponent from "./HeaderLinksComponent";
import styles from "./header.module.css";
function Header() {
  return (
    <nav className={styles.nav}>
      <div className="nav-wrapper">
        <Link prefetch={false} href={"/"} className="left brand-logo">
          Emaily
        </Link>
        <HeaderLinksComponent />
      </div>
    </nav>
  );
}

export default Header;
