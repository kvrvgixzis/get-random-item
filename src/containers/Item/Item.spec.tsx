import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { Item } from './Item';
import { v4 } from 'uuid';
import { SELECTORS } from '../../constants/test-selectors';

const MOCK_ITEM = {
  id: v4(),
  name: 'Test task',
  createdAt: Date.now(),
};

afterEach(cleanup);

describe('item', () => {
  const removeItem = jest.fn();

  it('have name', () => {
    render(<Item item={MOCK_ITEM} removeItem={removeItem} />);

    const itemNameElement = screen.getByTestId(SELECTORS.ITEM_NAME);
    expect(itemNameElement).toHaveTextContent(MOCK_ITEM.name);
  });

  it('call remove item method on click remove button', () => {
    render(<Item item={MOCK_ITEM} removeItem={removeItem} />);

    const removeItemElement = screen.getByTestId(
      SELECTORS.ITEM_REMOVE
    );

    fireEvent.click(removeItemElement);
    expect(removeItem).toHaveBeenCalled();
  });

  it('call remove item method on click remove button with item id', () => {
    render(<Item item={MOCK_ITEM} removeItem={removeItem} />);

    const removeItemElement = screen.getByTestId(
      SELECTORS.ITEM_REMOVE
    );

    fireEvent.click(removeItemElement);
    expect(removeItem).toHaveBeenCalledWith(MOCK_ITEM.id);
  });
});
