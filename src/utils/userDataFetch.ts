import { cookies } from "next/headers";
import { API } from "../contants/urlConstants";

export const getUserDetails = async () => {
  try {
    let data = await fetch(API + "/user", {
      headers: { Cookie: cookies().toString() },
    });
    let strData = await data.text();
    strData = strData ? JSON.parse(strData) : {};

    return strData;
  } catch (error) {
    console.log(error, "error");
    return {};
  }
};
