import React from 'react';

import { Form } from '@unform/web';
import { TextField } from 'unform-material-ui';
import PropTypes from 'prop-types';

import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Content } from './styles';

function BuscaForm({ handleSubmit, loading, referencia, handleChange }) {
  return (
    <Content>
      <Form ref={referencia} onSubmit={handleSubmit} name="buscaForm">
        <div className="row">
          <DialogContentText>Digite a Identidade ou o nome.</DialogContentText>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="idt"
            name="idt"
            label="Identidade"
            type="number"
            onChange={handleChange}
            fullWidth
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="nome"
            name="nome"
            label="Nome"
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <Button
            variant="contained"
            className="buttonSubmit"
            color="primary"
            type="submit"
          >
            {loading ? 'Carregando...' : 'Pesquisar'}
          </Button>
        </div>
      </Form>
    </Content>
  );
}
BuscaForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  referencia: PropTypes.objectOf.isRequired,
};

BuscaForm.defaultProps = {
  loading: false,
};

export default connect()(BuscaForm);
