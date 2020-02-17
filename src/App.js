import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Layout from './template/Layout';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
