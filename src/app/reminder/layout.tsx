import { getUserDetails } from "@/component/utils/userDataFetch";
import { isLoggedIn } from "@/component/utils/userUtils";
import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Emaily: Reminders",
  description: "Schedule your reminders",
};
const TestLayout: React.FC<layoutProps> = async ({ children }) => {
  const user = await getUserDetails();

  return (
    <div>
      <div>
        {isLoggedIn(user) ? (
          children
        ) : (
          <div className="login-text">Please login to continue</div>
        )}
      </div>
    </div>
  );
};

export default TestLayout;
