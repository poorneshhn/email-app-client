import { isEmptyJSON } from "./utils";

export const isLoggedIn = (user: User): boolean => {
  if (!isEmptyJSON(user) && "googleID" in user) {
    return true;
  }

  return false;
};
