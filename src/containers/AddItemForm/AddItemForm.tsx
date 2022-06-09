import { useInputFiled } from 'src/hooks';
import { AddItemForm as Component } from 'src/components/AddItemForm';
import { FormEvent, useContext } from 'react';
import { ItemsContext } from 'src/contexts/Items';
import { createItemByName } from './create-item-by-name';

export const AddItemForm = () => {
  const { value, onChange, cleanup } = useInputFiled();
  const { addItem } = useContext(ItemsContext);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;

    const item = createItemByName(value);
    addItem(item);

    cleanup();
  };

  return (
    <Component
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      placeholder="Item name"
    />
  );
};
