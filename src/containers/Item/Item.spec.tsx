import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { Item } from './Item';
import { v4 } from 'uuid';

const MOCK_ITEM = {
  id: v4(),
  name: 'Test task',
  createdAt: Date.now(),
};

afterEach(cleanup);

const ITEM_NAME_SELECTOR = 'item__name';
const ITEM_REMOVE_SELECTOR = 'item__remove';

describe('item', () => {
  const removeItem = jest.fn();

  it('have name', () => {
    render(<Item item={MOCK_ITEM} removeItem={removeItem} />);

    const itemNameElement = screen.getByTestId(ITEM_NAME_SELECTOR);
    expect(itemNameElement).toHaveTextContent(MOCK_ITEM.name);
  });

  it('call remove item method on click remove button', () => {
    render(<Item item={MOCK_ITEM} removeItem={removeItem} />);

    const removeItemElement = screen.getByTestId(
      ITEM_REMOVE_SELECTOR
    );

    fireEvent.click(removeItemElement);
    expect(removeItem).toHaveBeenCalled();
  });

  it('call remove item method on click remove button with item id', () => {
    render(<Item item={MOCK_ITEM} removeItem={removeItem} />);

    const removeItemElement = screen.getByTestId(
      ITEM_REMOVE_SELECTOR
    );

    fireEvent.click(removeItemElement);
    expect(removeItem).toHaveBeenCalledWith(MOCK_ITEM.id);
  });
});
