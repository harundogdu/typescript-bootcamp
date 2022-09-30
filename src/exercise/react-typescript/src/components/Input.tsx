import React from 'react';

type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return <input type='text' value={value} onChange={onChange} />;
};

export default Input;
