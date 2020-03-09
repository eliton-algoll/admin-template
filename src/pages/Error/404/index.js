import React from 'react';

import { Container } from './styles';
import max from '~/assets/images/max.png';

export default function error404() {
  return (
    <Container>
      <h1>404</h1>
      <br />

      <h5>Page not found</h5>
      <img src={max} alt="max inteligência artificial do exército" />
    </Container>
  );
}
