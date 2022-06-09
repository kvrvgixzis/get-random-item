import { createContext } from 'react';
import { Item } from 'src/models';

interface ItemsContextType {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (itemId: Item['id']) => void;
}

const defaultContext: ItemsContextType = {
  items: [],
  addItem: (item) => null,
  removeItem: (item) => null,
};

export const ItemsContext =
  createContext<ItemsContextType>(defaultContext);
