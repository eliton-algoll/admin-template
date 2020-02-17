import React from 'react';

import { ContentStyled, Contents } from './styles';
import Breadcrumb from '../Breadcrumb';

// importando as rotas
import Routes from '../../../routes';

export default function Content() {
  return (
    <>
      <ContentStyled>
        <Breadcrumb />
        <Contents>
          <Routes />
        </Contents>
      </ContentStyled>
    </>
  );
}
