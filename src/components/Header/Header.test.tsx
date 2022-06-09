import { cleanup, render, screen } from '@testing-library/react';
import { App } from '../../App';

afterAll(cleanup);

describe('header smoke test', () => {
  it('renders header', () => {
    render(<App />);

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    cleanup();
  });

  it('header title with text', () => {
    render(<App />);

    const headerTitleElement = screen.getByTestId('header__title');
    expect(headerTitleElement).toHaveTextContent('Get random item');

    cleanup();
  });
});
