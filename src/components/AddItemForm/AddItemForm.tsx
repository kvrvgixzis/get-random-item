import { ChangeEventHandler, FC, FormEvent } from 'react';

import './AddItemForm.css';

interface FormProps {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit(e: FormEvent<HTMLFormElement>): void;
}

export const AddItemForm: FC<FormProps> = ({
  value,
  placeholder,
  onChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="add-item-form"
      data-testid="add-item-form"
    >
      <input
        className="add-item-form__input"
        data-testid="add-item-form__input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button
        className="add-item-form__submit"
        data-testid="add-item-form__submit"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
