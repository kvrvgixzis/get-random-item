import { FC, useState } from 'react';
import { Item } from 'src/models';
import { ItemsContext } from './ItemsContext';
import * as itemsApi from 'src/api/items';

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const ItemsProvider: FC<ProviderProps> = ({ children }) => {
  const preloadedItems = itemsApi.getItems();
  const [items, setItems] = useState<Item[]>(preloadedItems);

  const addItem = (item: Item) => {
    setItems((prev) => {
      const newItems = [...prev, item];
      itemsApi.putItems(newItems);
      return newItems;
    });
  };

  const removeItem = (itemId: Item['id']) => {
    const newItems = items.filter((item) => item.id !== itemId);
    itemsApi.putItems(newItems);
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
