import React from 'react';

import PropTypes from 'prop-types';
import Header from './components/Header';
import Container from './components/Container';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
