import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { App } from './App';

const FORM_SELECTOR = 'add-item-form';
const INPUT_SELECTOR = 'add-item-form__input';
const ITEM_NAME_SELECTOR = 'item__name';
const ITEM_REMOVE_SELECTOR = 'item__remove';

afterEach(cleanup);

describe('app', () => {
  it('add item', () => {
    render(<App />);

    const addItemFormElement = screen.getByTestId(FORM_SELECTOR);
    const inputElement = screen.getByTestId(
      INPUT_SELECTOR
    ) as HTMLInputElement;

    fireEvent.input(inputElement, { target: { value: 'test name' } });
    fireEvent.submit(addItemFormElement);

    const itemElements = screen.getAllByTestId(ITEM_NAME_SELECTOR);
    const newElement = itemElements.find(
      (item) => item.textContent === 'test name'
    );

    expect(newElement).toBeInTheDocument();
  });

  it('remove item', () => {
    render(<App />);

    const removeItemElement = screen.getByTestId(
      ITEM_REMOVE_SELECTOR
    );
    const itemNameElements = screen.getAllByTestId(
      ITEM_NAME_SELECTOR
    );

    const targetElement = itemNameElements.find(
      (item) => item.textContent === 'test name'
    );

    expect(targetElement).toBeInTheDocument();
    fireEvent.click(removeItemElement);
    expect(targetElement).not.toBeInTheDocument();
  });
});
