import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Menu() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/orgao">Órgãos/Unidades</Link>
    </>
  );
}
