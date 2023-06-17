import React from 'react';
import './Button.scss';

interface ButtonProps {
  title: string;
  width?: string;
  type: 'button' | 'submit' | 'reset';
}

const Button = ({ title, width, type }: ButtonProps) => {
  return (
    <button className="button" style={{ width: width }} type={type}>
      {title}
    </button>
  );
};

export default Button;
