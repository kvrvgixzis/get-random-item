import { FC, useState } from 'react';
import { Item } from 'src/models';
import { ItemsContext } from './ItemsContext';

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const ItemsProvider: FC<ProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (itemId: Item['id']) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        addItem,
        removeItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
