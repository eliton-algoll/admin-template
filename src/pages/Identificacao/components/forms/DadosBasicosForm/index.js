import React, { useState } from 'react';

import { TextField } from 'unform-material-ui';
import { Content } from './styles';

import imageDefault from '~/assets/images/user.png';

export default function DadosBasicosForm() {
  const [pessoa, setPessoa] = useState({});

  return (
    <Content>
      <div className="row-1">
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
          id="nascimnto"
          name="nomeMae"
          label="Nascimento"
          type="text"
        />
        <TextField
          autoFocus
          variant="outlined"
          margin="dense"
          id="nomeSocial"
          name="nomeSocial"
          label="Nome Social"
          type="text"
          fullWidth
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
          id="dtIdentificacao"
          name="dtIdentificacao"
          label="Data da 1° Identificação"
          type="text"
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
    </Content>
  );
}
