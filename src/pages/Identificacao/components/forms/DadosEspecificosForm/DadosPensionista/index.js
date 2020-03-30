import React, { useState, useEffect } from 'react';

import { TextField } from 'unform-material-ui';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from 'prop-types';
import { Content } from '../styles';

function DadosPensionista({ data }) {
  const [pensao, setPensao] = useState({});

  useEffect(() => {
    setPensao(data);
    console.tron.log(data);
  }, [data]);

  return (
    <Content>
      <div className="row-1">
        <div className="col-1">
          <div style={{ width: '100%' }}>
            <DialogContentText>Dados da pensão</DialogContentText>

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="docTipo"
              name="docTipo"
              label="Tipo de documento"
              value={pensao.docTipo}
              select
              SelectProps={{ native: true }}
            >
              <option value={null}>-- Selecione --</option>
              <option value="TP">Titulo de Pensão</option>
              <option value="OUTROS">Outros</option>
            </TextField>

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="docNumero"
              name="docNumero"
              label="N° do documento"
              value={pensao.docNumero}
              type="text"
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="exCombatente"
              name="exCombatente"
              value={pensao.exCombatente}
              label="Ex-combatente"
              select
              SelectProps={{ native: true }}
            >
              <option value={null}>--Selecione--</option>
              <option value="1">Sim</option>
              <option value="0">Não</option>
            </TextField>
          </div>
          <div>
            <br />
            <DialogContentText> Dados da Carteira </DialogContentText>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="complemento"
              name="complemento"
              label="Complemento da carteira"
              type="text"
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="validade"
              name="validade"
              label="Validade"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
      </div>
    </Content>
  );
}

DadosPensionista.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default DadosPensionista;
