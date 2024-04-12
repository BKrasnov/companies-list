import { Provider } from 'react-redux';
import { MainPage } from '@pages/MainPage';
import { store } from '@store';

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
