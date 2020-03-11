import React from 'react';

import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Container } from './styles';

function Login({ children }) {
  return (
    <>
      <CssBaseline />
      <Container>{children}</Container>
    </>
  );
}

Login.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Login;
