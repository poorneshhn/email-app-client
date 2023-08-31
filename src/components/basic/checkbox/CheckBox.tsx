"use client";
import React, { Fragment, useState } from "react";
interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
const CheckBox: React.FC<CheckboxProps> = (props) => {
  const { label, onChange } = props;
  const [isChecked, setIsChecked] = useState(false);

  const onChangeHandler = (checked: boolean) => {
    setIsChecked(checked);
    onChange(checked);
  };
  return (
    <Fragment>
      <label htmlFor="check-box">{label}</label>
      <input
        id="check-box"
        checked={isChecked}
        onChange={(e) => onChangeHandler(e.target.checked)}
        type="checkbox"
      />
    </Fragment>
  );
};

export default CheckBox;
