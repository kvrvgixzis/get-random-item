import { FC } from 'react';
import { SELECTORS } from 'src/constants/test-selectors';
import { Item as ItemType } from 'src/models';

import './Item.css';

interface Props {
  item: ItemType;
  removeItem: () => void;
}

export const Item: FC<Props> = ({ item, removeItem }) => {
  return (
    <div className="item" data-testid={SELECTORS.ITEM}>
      <span className="item__name" data-testid={SELECTORS.ITEM_NAME}>
        {item.name}
      </span>
      <button
        className="item__remove"
        data-testid={SELECTORS.ITEM_REMOVE}
        onClick={removeItem}
      >
        Done
      </button>
    </div>
  );
};
