import { FC } from 'react';
import { Item as ItemType } from 'src/models';
import { Item as Component } from 'src/components/Item';

interface Props {
  item: ItemType;
  removeItem: (itemId: ItemType['id']) => void;
}

export const Item: FC<Props> = ({ item, removeItem }) => {
  const removeCurrentItem = () => removeItem(item.id);
  return <Component item={item} removeItem={removeCurrentItem} />;
};
