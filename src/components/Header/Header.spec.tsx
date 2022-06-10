import { cleanup, render, screen } from '@testing-library/react';
import { App } from '../../App';

afterEach(cleanup);

const HEADER_SELECTOR = 'header';
const HEADER_TITLE_SELECTOR = 'header__title';

describe('header', () => {
  it('render in app', () => {
    render(<App />);

    const headerElement = screen.getByTestId(HEADER_SELECTOR);
    expect(headerElement).toBeInTheDocument();
  });

  it('have title with text', () => {
    render(<App />);

    const headerTitleElement = screen.getByTestId(
      HEADER_TITLE_SELECTOR
    );
    expect(headerTitleElement).toHaveTextContent('Tasks');
  });
});
