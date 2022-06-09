import { Header } from './components/Header';
import { AddItemForm } from './containers/AddItemForm';
import { ItemsList } from './containers/ItemsList';
import { ItemsProvider } from './contexts/Items';

export const App = () => {
  return (
    <ItemsProvider>
      <Header />
      <AddItemForm />
      <ItemsList />
    </ItemsProvider>
  );
};
