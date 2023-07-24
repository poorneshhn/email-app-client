"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import axiosInstance from "../../axiosInstance/axiosInstance";
import { useAppSelector } from "../../custom-hooks/typedReactReduxHooks";
import styles from "./headerlinksloggedin.module.css";
import emptyImage from "../../../images/empty-profile.webp";
import Payment from "../payment/Payment";

const HeaderLinksLoggedIn: React.FC = () => {
  const router = useRouter();
  const logout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      await axiosInstance.get("/api/logout");
      router.refresh();
    } catch (error) {
      console.log(error, "error");
    }
  };

  const currentUser = useAppSelector((state) => state.auth.user);
  console.log(currentUser, "currentUser on the client and server");

  return (
    <div>
      <ul className={styles.right}>
        <li>User Credit {currentUser.credits}</li>
        <li>
          <Payment />
        </li>
        <li>
          <a onClick={logout}>Logout</a>
        </li>
        <li>
          <div className={styles.profile}>
            <p className={styles.profileName}>
              Hi {currentUser.name || "User"}
            </p>
            <div className={styles.profileImageContainer}>
              <Image
                src={currentUser.picture || emptyImage}
                objectFit="cover"
                className="z-depth-4"
                fill
                alt="profile image"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeaderLinksLoggedIn;
