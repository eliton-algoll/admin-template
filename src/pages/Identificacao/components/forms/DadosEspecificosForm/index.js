import React, { useState } from 'react';

import { TextField } from 'unform-material-ui';
import { Content } from './styles';

import imageDefault from '~/assets/images/user.png';

export default function DadosEspecificosForm() {
  const [pessoa, setPessoa] = useState({});

  return (
    <Content>
      <div className="row-1">
        <div className="col-1">
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

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="nomeSocial"
            name="nomeSocial"
            label="Nome Social"
            type="text"
            style={{ display: 'none' }}
            fullWidth
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="nomeMae"
            name="nomeMae"
            label="Nome Mãe"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="nomePai"
            name="nomePai"
            label="Nome Pai"
            type="text"
            fullWidth
          />
        </div>
        <div className="col-line" />
        <div className="col-2">
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="nascimento"
            name="nascimento"
            label="Nascimento"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="cpf"
            name="cpf"
            label="CPF"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="dtIdentificacao"
            name="dtIdentificacao"
            label="Data da 1° Identificação"
            type="text"
          />
        </div>
      </div>
      <div className="row-line" />
      <div className="row-2">
        <div className="col-3">
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="dtIdentificacao"
            name="dtIdentificacao"
            label="Estado Civil"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="dtIdentificacao"
            name="dtIdentificacao"
            label="Sexo"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="dtIdentificacao"
            name="dtIdentificacao"
            label="DNI"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="dtIdentificacao"
            name="dtIdentificacao"
            label="CNH"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="dtIdentificacao"
            name="dtIdentificacao"
            label="Pis/Pasep"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="dtIdentificacao"
            name="dtIdentificacao"
            label="Situação Especial"
            type="text"
          />
        </div>
      </div>
    </Content>
  );
}
