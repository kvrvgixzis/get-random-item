import { FC } from 'react';
import { Item as ItemType } from 'src/models';

import './Item.css';

interface Props {
  item: ItemType;
  removeItem: () => void;
}

export const Item: FC<Props> = ({ item, removeItem }) => {
  return (
    <div className="item" data-testid="item">
      <span className="item__name" data-testid="item__name">
        {item.name}
      </span>
      <button
        className="item__remove"
        data-testid="item__remove"
        onClick={removeItem}
      >
        Done
      </button>
    </div>
  );
};
