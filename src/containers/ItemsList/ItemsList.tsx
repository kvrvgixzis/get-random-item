import { FC, useContext } from 'react';

import { ItemsContext } from 'src/contexts/Items';
import { Item } from 'src/containers/Item';

export const ItemsList: FC = () => {
  const { items, removeItem } = useContext(ItemsContext);

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} removeItem={removeItem} />
      ))}
    </div>
  );
};
