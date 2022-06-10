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

    fireEvent.input(inputElement, { target: { value: 'test name' } });

    expect(inputElement.value).toBe('test name');
  });

  it('clear input on submit', () => {
    render(<AddItemForm />);

    const addItemFormElement = screen.getByTestId(SELECTORS.FORM);
    const inputElement = screen.getByTestId(
      SELECTORS.INPUT
    ) as HTMLInputElement;

    fireEvent.input(inputElement, { target: { value: 'test name' } });
    expect(inputElement.value).toBe('test name');

    fireEvent.submit(addItemFormElement);
    expect(inputElement.value).toBe('');
  });
});
