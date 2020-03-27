import React from 'react';

import { Typography, Box } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

import { ContentStyled, Contents } from './styles';
import Breadcrumb from '../Breadcrumb';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'By © '}
      <Link color="inherit" href="https://dsm.dgp.eb.mil.br">
        Diretoria de Serviço Militar
      </Link>
      {' - '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Content({ children }) {
  return (
    <>
      <ContentStyled>
        <Breadcrumb />
        <Contents>{children}</Contents>
        <Copyright />
      </ContentStyled>
    </>
  );
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
