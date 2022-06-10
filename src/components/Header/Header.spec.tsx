import { cleanup, render, screen } from '@testing-library/react';
import { App } from '../../App';
import { SELECTORS } from '../../constants/test-selectors';

afterEach(cleanup);

describe('header', () => {
  it('render in app', () => {
    render(<App />);

    const headerElement = screen.getByTestId(SELECTORS.HEADER);
    expect(headerElement).toBeInTheDocument();
  });

  it('have title with text', () => {
    render(<App />);

    const headerTitleElement = screen.getByTestId(
      SELECTORS.HEADER_TITLE
    );
    expect(headerTitleElement).toHaveTextContent('Tasks');
  });
});
