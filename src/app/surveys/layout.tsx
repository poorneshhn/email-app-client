import React from "react";

interface layoutProps {
  children: React.ReactNode;
}
const TestLayout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default TestLayout;
