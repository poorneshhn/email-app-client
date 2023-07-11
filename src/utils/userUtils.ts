import { cookies } from "next/headers";

export const getCookie = (name: string): string => {
  const cookieStore = cookies();
  let cookieValue = cookieStore.get(name);
  if (cookieValue) {
    return JSON.parse(cookieValue.value) || "";
  }
  return "";
};
