import React, { useState, useEffect } from 'react';

import { TextField } from 'unform-material-ui';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from 'prop-types';
import { Content } from '../styles';

function DadosDependente({ data }) {
  const [dependente, setDependente] = useState({});

  useEffect(() => {
    setDependente(data);
  }, [data]);

  return (
    <Content>
      <div className="row-1">
        <div className="col-1">
          <div style={{ width: '100%' }}>
            <DialogContentText>Dados do titular</DialogContentText>

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="idtTitular"
              name="idtTitular"
              label="Identidade"
              value={dependente.titular ? dependente.titular.idt : null}
              type="text"
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="nomeTitular"
              name="nomeTitular"
              label="Nome"
              value={dependente.titular ? dependente.titular.nome : null}
              type="text"
            />
          </div>
          <div style={{ width: '100%' }}>
            <DialogContentText>Dados de dependente</DialogContentText>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="exCombatente"
              name="exCombatente"
              label="Grau de parentesco"
              select
              value={
                dependente.titular ? dependente.titular.grauParentescoIdt : null
              }
              SelectProps={{ native: true }}
            >
              <option value={null}>--Selecione--</option>
              <option value="Esposa">Esposa</option>
              <option value="Esposo">Esposo</option>
              <option value="Filha">Filha</option>
              <option value="Filho">Filho</option>
              <option value="outros">Outros</option>
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

DadosDependente.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default DadosDependente;
