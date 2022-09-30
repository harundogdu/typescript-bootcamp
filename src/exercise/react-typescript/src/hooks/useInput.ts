import { UserProps } from './../types/user.types';
import { useState } from "react";


export const useInput = (INITIAL_VALUE: UserProps): any => {
  const [value, setValue] = useState(INITIAL_VALUE);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  return [value, onChange];
};