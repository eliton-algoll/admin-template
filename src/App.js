import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';

import './config/ReactotronConfig';
// importando as rotas
import Routes from '~/routes';
import history from '~/services/history';

import { store, persistor } from '~/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <BrowserRouter>
          <Router history={history}>
            <Routes />
          </Router>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
