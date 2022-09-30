import React from 'react';

type IButtonProps = {
  title: string;
  id?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>, id?: string) => void;
};

const Button: React.FC<IButtonProps> = props => {
  const { title, id, onClick } = props;
  return <button onClick={event => onClick(event, id)}>{title}</button>;
};

export default Button;
