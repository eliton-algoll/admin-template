import React from 'react';

import { Typography, Box } from '@material-ui/core';
import Link from '@material-ui/core/Link';

import { ContentStyled, Contents } from './styles';
import Breadcrumb from '../Breadcrumb';

// importando as rotas
import Routes from '../../../routes';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'By © '}
      <Link color="inherit" href="https://material-ui.com/">
        Diretoria de Serviço Militar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Content() {
  return (
    <>
      <ContentStyled>
        <Breadcrumb />
        <Contents>
          <Routes />
        </Contents>
        <Box pt={4}>
          <Copyright />
        </Box>
      </ContentStyled>
    </>
  );
}
