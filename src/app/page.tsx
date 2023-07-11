"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useContext, useEffect } from "react";
import { getUser } from "./redux/slices/authSlice";
import {
  useAppSelector,
  useAppDispatch,
} from "./custom-hooks/typedReactReduxHooks";
export default function Home() {
  return (
    <main>
      <div className={styles.homeContainer}>
        <h1>Email App</h1>
        <p>Collect feedback from users</p>
      </div>
    </main>
  );
}
