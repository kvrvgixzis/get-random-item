import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { App } from '../../App';
import { SELECTORS } from '../../constants/test-selectors';
import { AddItemForm } from './AddItemForm';

afterEach(cleanup);

const TEST_ITEM_NAME = 'test name';

describe('add item form', () => {
  it('render in app', () => {
    render(<App />);

    const addItemFormElement = screen.getByTestId(SELECTORS.FORM);

    expect(addItemFormElement).toBeInTheDocument();
  });

  it('update input value on change', () => {
    render(<AddItemForm />);

    const inputElement = screen.getByTestId(
      SELECTORS.INPUT
    ) as HTMLInputElement;

    fireEvent.input(inputElement, {
      target: { value: TEST_ITEM_NAME },
    });

    expect(inputElement.value).toBe(TEST_ITEM_NAME);
  });

  it('clear input on submit', () => {
    render(<AddItemForm />);

    const addItemFormElement = screen.getByTestId(SELECTORS.FORM);
    const inputElement = screen.getByTestId(
      SELECTORS.INPUT
    ) as HTMLInputElement;

    fireEvent.input(inputElement, {
      target: { value: TEST_ITEM_NAME },
    });
    expect(inputElement.value).toBe(TEST_ITEM_NAME);

    fireEvent.submit(addItemFormElement);
    expect(inputElement.value).toBe('');
  });
});
