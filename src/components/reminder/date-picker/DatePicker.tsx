"use client";

import React, { useRef, useState } from "react";
import styles from "./datepicker.module.css";
interface DatePickerProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  required?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { onChange, value, name, required } = props;
  const [date, setDate] = useState<string | undefined>(value);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDate(value);
    onChange(e);
  };

  const now = new Date();
  const minDate = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${now.getDate()}`;

  return (
    <div>
      <input
        className={styles.inputField}
        value={date}
        onChange={onChangeHandler}
        type="date"
        name={name}
        min={minDate}
        required={required}
      />
    </div>
  );
};

export default DatePicker;
