import { Item } from 'src/models';
import { v4 } from 'uuid';

export const createItemByName = (name: string) => {
  const item: Item = {
    id: v4(),
    name,
    createdAt: Date.now(),
  };

  return item;
};
