import { API } from "@/component/contants/urlConstants";
import { cookies } from "next/headers";
import React from "react";
import styles from "./allreminder.module.css";
import { isEmpty } from "@/component/utils/utils";
import Link from "next/link";
const getAllReminderList = async () => {
  try {
    const data = await fetch(API + "/reminder/allreminderlist", {
      headers: {
        Cookie: cookies().toString(),
      },
    });
    let strData: any = await data.text();
    strData = strData ? JSON.parse(strData) : {};
    if (strData?.list) {
      return strData.list;
    }
    return [];

    // const { data } = await axiosInstance.get("reminder/allreminderlist", {
    //   headers: {
    //     Cookie: cookies().toString(),
    //   },
    // });
    // let strData = data ? JSON.parse(data) : {};

    // return strData;
  } catch (error) {
    console.log("error while getting all reminder list", error);
    return [];
  }
};
const AllReminders = async () => {
  const reminderList = await getAllReminderList();
  return (
    <main>
      <h3>All your Reminders</h3>
      {isEmpty(reminderList) ? (
        <h5>
          No Reminders Found. You can create new reminders{" "}
          <Link href={"/reminder"}>here</Link>
        </h5>
      ) : (
        <div>
          <h5>
            Create new Reminders{" "}
            <Link className="link" href={"/reminder"}>
              here
            </Link>
          </h5>
          <ul className={styles.allReminders}>
            {reminderList.map((item: any) => {
              return (
                <li className={styles.eachListItem} key={item.uniqueID}>
                  <p>{item.eventDetails}</p>
                  <span>{item.date}</span>, &nbsp;<span>{item.time}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </main>
  );
};

export default AllReminders;
