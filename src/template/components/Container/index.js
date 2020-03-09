import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { ContainerSyled } from './styles';
// import Content from '../Content';
import Sidebar from '../Sidebar';
import Content from '../Content';

function Container({ children }) {
  return (
    <>
      <CssBaseline />
      <ContainerSyled>
        <Sidebar />
        <Content>{children}</Content>
      </ContainerSyled>
    </>
  );
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
