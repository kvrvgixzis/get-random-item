import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { App } from './App';
import { SELECTORS } from './constants/test-selectors';

afterEach(cleanup);

const TEST_ITEM_NAME = 'test name';

describe('app', () => {
  it('add item', () => {
    render(<App />);

    const addItemFormElement = screen.getByTestId(SELECTORS.FORM);
    const inputElement = screen.getByTestId(
      SELECTORS.INPUT
    ) as HTMLInputElement;

    fireEvent.input(inputElement, {
      target: { value: TEST_ITEM_NAME },
    });
    fireEvent.submit(addItemFormElement);

    const itemElements = screen.getAllByTestId(SELECTORS.ITEM_NAME);
    const newElement = itemElements.find(
      (item) => item.textContent === TEST_ITEM_NAME
    );

    expect(newElement).toBeInTheDocument();
  });

  it('remove item', () => {
    render(<App />);

    const removeItemElement = screen.getByTestId(
      SELECTORS.ITEM_REMOVE
    );
    const itemNameElements = screen.getAllByTestId(
      SELECTORS.ITEM_NAME
    );

    const targetElement = itemNameElements.find(
      (item) => item.textContent === TEST_ITEM_NAME
    );

    expect(targetElement).toBeInTheDocument();
    fireEvent.click(removeItemElement);
    expect(targetElement).not.toBeInTheDocument();
  });
});
