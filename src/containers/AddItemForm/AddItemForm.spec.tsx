import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { App } from '../../App';
import { AddItemForm } from './AddItemForm';

afterEach(cleanup);

const FORM_SELECTOR = 'add-item-form';
const INPUT_SELECTOR = 'add-item-form__input';

describe('add item form', () => {
  it('render in app', () => {
    render(<App />);

    const addItemFormElement = screen.getByTestId(FORM_SELECTOR);

    expect(addItemFormElement).toBeInTheDocument();
  });

  it('update input value on change', () => {
    render(<AddItemForm />);

    const inputElement = screen.getByTestId(
      INPUT_SELECTOR
    ) as HTMLInputElement;

    fireEvent.input(inputElement, { target: { value: 'test name' } });

    expect(inputElement.value).toBe('test name');
  });

  it('clear input on submit', () => {
    render(<AddItemForm />);

    const addItemFormElement = screen.getByTestId(FORM_SELECTOR);
    const inputElement = screen.getByTestId(
      INPUT_SELECTOR
    ) as HTMLInputElement;

    fireEvent.input(inputElement, { target: { value: 'test name' } });
    expect(inputElement.value).toBe('test name');

    fireEvent.submit(addItemFormElement);
    expect(inputElement.value).toBe('');
  });
});
