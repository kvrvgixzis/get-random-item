import { ChangeEventHandler, useState } from 'react';

export const useInputFiled = (defaultValue: string = '') => {
  const [value, setValue] = useState(defaultValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  };

  const cleanup = () => setValue(defaultValue);

  return { value, onChange, cleanup };
};
