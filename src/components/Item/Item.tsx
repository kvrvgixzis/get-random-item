import { FC } from 'react';
import { Item as ItemType } from 'src/models';

import './Item.css';

interface Props {
  item: ItemType;
  removeItem: () => void;
}

export const Item: FC<Props> = ({ item, removeItem }) => {
  return (
    <div className="item">
      <span className="item__name">{item.name}</span>
      <button className="item__remove" onClick={removeItem}>
        remove
      </button>
    </div>
  );
};
