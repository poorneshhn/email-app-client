"use client";

import React, { useState } from "react";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  name: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { onChange, value, placeholder, name, required } = props;
  const [inputValue, setInputValue] = useState<string | undefined>(value);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(e);
  };
  return (
    <div>
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeHandler}
        type="text"
        name={name}
        required={required}
      />
    </div>
  );
};

export default Input;
