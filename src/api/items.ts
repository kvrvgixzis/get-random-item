import { Item } from 'src/models';

const ITEMS = 'items';

export const putItems = (items: Item[]) => {
  const itemsJSON = JSON.stringify(items);
  localStorage.setItem(ITEMS, itemsJSON);
};

export const getItems = () => {
  const itemsJson = localStorage.getItem(ITEMS);
  return JSON.parse(itemsJson ?? '[]') as Item[];
};
