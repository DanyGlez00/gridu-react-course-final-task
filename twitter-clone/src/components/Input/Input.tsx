import React from "react";
import "./Input.scss";

export interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input = (props: InputProps) => {

  return (
    <input className='input'
      id={props.id}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
