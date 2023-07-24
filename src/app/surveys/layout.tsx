import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Emaily: Your Surveys",
  description: "Find all your past surveys here.",
};
const TestLayout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default TestLayout;
