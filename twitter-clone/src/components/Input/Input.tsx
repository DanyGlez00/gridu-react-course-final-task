import React from 'react';
import './Input.scss';

export interface InputProps {
  className?: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input = (props: InputProps) => {
  return (
    <input
      className={props.className}
      id={props.id}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
    />
  );
};

export default Input;
