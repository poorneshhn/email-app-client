"use client";
import React from "react";
interface ButtonProps {
  label?: string;
  title?: string;
  onClick: (value: any) => void;
  className?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = (props) => {
  const {
    label,
    title,
    onClick,
    className,
    icon,
    iconPosition = "left",
    type,
  } = props;
  return (
    <button
      className={`${className || ""} waves-effect waves-light btn`}
      onClick={onClick}
      title={title}
      type={type || "button"}
    >
      {label ? label : ""}
      <i className={`material-icons ${label ? iconPosition : ""}`}>{icon}</i>
    </button>
  );
};

export default Button;
