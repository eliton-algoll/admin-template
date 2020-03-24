import React from 'react';

import { TextField } from 'unform-material-ui';
import PropTypes from 'prop-types';

function Estado({ name, value, label, ...rest }) {
  const estados = [
    { codigo: null, estado: '--Selecione--' },
    { codigo: '1', estado: 'AC' },
    { codigo: '2', estado: 'AM' },
    { codigo: '3', estado: 'AP' },
    { codigo: '4', estado: 'AL' },
    { codigo: '5', estado: 'BA' },
    { codigo: '6', estado: 'CE' },
    { codigo: '7', estado: 'DF' },
    { codigo: '8', estado: 'GO' },
    { codigo: '9', estado: 'MA' },
    { codigo: '11', estado: 'MS' },
    { codigo: '12', estado: 'MG' },
    { codigo: '13', estado: 'MT' },
    { codigo: '14', estado: 'PA' },
    { codigo: '15', estado: 'PB' },
    { codigo: '16', estado: 'PE' },
    { codigo: '17', estado: 'PI' },
    { codigo: '18', estado: 'PR' },
    { codigo: '19', estado: 'RJ' },
    { codigo: '20', estado: 'RN' },
    { codigo: '21', estado: 'RO' },
    { codigo: '22', estado: 'RR' },
    { codigo: '23', estado: 'RS' },
    { codigo: '24', estado: 'SC' },
    { codigo: '25', estado: 'SE' },
    { codigo: '26', estado: 'SP' },
    { codigo: '27', estado: 'TO' },
    { codigo: '31', estado: 'ES' },
    { codigo: '999', estado: 'XX' },
  ];

  return (
    <TextField
      autoFocus
      variant="outlined"
      margin="dense"
      name={name}
      value={value}
      label={label}
      select
      SelectProps={{
        native: true,
      }}
      {...rest}
    >
      {estados.map(uf => (
        <option value={uf.codigo}>{uf.estado}</option>
      ))}
    </TextField>
  );
}

Estado.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Estado.defaultProps = {
  value: null,
};

export default Estado;
