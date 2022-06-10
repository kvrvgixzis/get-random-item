import { SELECTORS } from 'src/constants/test-selectors';
import './Header.css';

export const Header = () => {
  return (
    <header className="header" data-testid={SELECTORS.HEADER}>
      <h1
        className="header__title"
        data-testid={SELECTORS.HEADER_TITLE}
      >
        Tasks
      </h1>
    </header>
  );
};
