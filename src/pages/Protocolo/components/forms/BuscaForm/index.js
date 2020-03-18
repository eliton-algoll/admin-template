import React from 'react';

import { Form } from '@unform/web';
import { TextField } from 'unform-material-ui';
import PropTypes from 'prop-types';

import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Content } from './styles';

function BuscaForm({ handleSubmit, loading }) {
  return (
    <Content>
      <Form onSubmit={handleSubmit} name="buscaForm">
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
  loading: PropTypes.bool,
};

BuscaForm.defaultProps = {
  loading: false,
};

export default connect()(BuscaForm);
