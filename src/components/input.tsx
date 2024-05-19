// src/components/Input.tsx
import React, { ChangeEvent } from 'react';
import '../App.css';
 
interface InputProps {
  value: string;
  onChange: (value: string) => void;
  place :any ;
}

const Input: React.FC<InputProps> = ({ value, onChange , place}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      placeholder={place}
      onChange={handleChange}
    />
  );
};

export default Input;
