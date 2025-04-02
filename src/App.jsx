import { Provider } from 'react-redux';
import { store } from './app/store';
import SearchUser from './components/SearchUser';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Buscador de Usuario de GitHub</h1>
        <SearchUser />
        <UserProfile />
      </div>
    </Provider>
  );
}

export default App;
