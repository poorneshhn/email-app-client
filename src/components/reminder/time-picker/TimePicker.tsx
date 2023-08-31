"use client";

import React, { useState } from "react";
import styles from "./timepicker.module.css";
interface TimePickerProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  required?: boolean;
}

const TimePicker: React.FC<TimePickerProps> = (props) => {
  const { onChange, value, name, required } = props;
  const [time, setTime] = useState<string | undefined>(value);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTime(value);
    onChange(e);
  };
  return (
    <div>
      <input
        className={styles.inputField}
        value={time}
        onChange={onChangeHandler}
        type="time"
        name={name}
        required={required}
      />
    </div>
  );
};

export default TimePicker;
