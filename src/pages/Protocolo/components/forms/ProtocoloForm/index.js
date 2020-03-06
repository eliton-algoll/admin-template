import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';

import { format } from 'date-fns';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Content } from './styles';

import api from '../../../../../services/api';

const motivosIdt = [
  {
    value: '1',
    label: 'Cadastramento Básico',
  },
  {
    value: '2',
    label: 'Manutenção de Cadastro',
  },
  {
    value: '3',
    label: 'REID - Extravio',
  },
  {
    value: '4',
    label: 'REID - Mudança de Situação',
  },
  {
    value: '5',
    label: 'REID - Promoção',
  },
  {
    value: '6',
    label: 'REID - Sinistro',
  },
  {
    value: '7',
    label: 'REID - Término de Validade',
  },
  {
    value: '8',
    label: '2º Via',
  },
];

function ProtocoloForm({ onSubmit }) {
  const [pessoa, setPessoa] = useState({});

  async function handleChangeIdt(e) {
    const idt = e.target.value;

    if (idt) {
      const response = await api.get(
        `/identificacao/protocolo/findDadosmilitar/${idt}`
      );

      setPessoa(response.data.dados);
    }
  }

  return (
    <Content>
      <Form onSubmit={onSubmit}>
        <div className="row-1">
          <div className="row-2">
            <div className="row-idt">
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="idt"
                name="idt"
                onBlur={handleChangeIdt}
                label="Identidade *"
                type="text"
                fullWidth
              />

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="cpf"
                name="cpf"
                value={pessoa.cpf}
                label="CPF *"
                type="text"
                fullWidth
              />

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="postoGrad"
                name="postoGrad"
                label="Posto/Graduação *"
                type="text"
                fullWidth
              />

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="dtNascimento"
                name="dtNascimento"
                label="Nascimento *"
                type="text"
                fullWidth
              />
            </div>
            <div className="row-nomes">
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
                id="nomeMae"
                name="nomeMae"
                label="Nome da mãe"
                type="text"
                fullWidth
              />
            </div>
            <div className="row-identificacao">
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="omSigla"
                name="omSigla"
                label="Órgão de identificação"
                type="text"
                fullWidth
              />

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="dtExpedicao"
                InputProps={{
                  readOnly: true,
                }}
                label="Data"
                defaultValue={format(new Date(), 'dd/MM/y')}
                type="text"
              />
            </div>
          </div>
          <div className="row-img">
            <img
              className="imgIdentificacao"
              src="data:image/jpeg;base64,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"
            />
          </div>
        </div>

        <div className="row-dados-protocolo">
          <div className="dados-protocolo-1">
            <TextField
              select
              variant="outlined"
              margin="dense"
              id="motivoIdt"
              label="Motivo da identificação"
              fullWidth
            >
              {motivosIdt.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              variant="outlined"
              margin="dense"
              id="tipoDoc"
              label="Tipo de documento"
              fullWidth
            >
              <MenuItem value="1">Cartão de CB/SD</MenuItem>
              <MenuItem value="2">
                Carteira de Identificação Militar(CIM)
              </MenuItem>
              <MenuItem value="3">Carteira de Identidade(CIMPM)</MenuItem>
            </TextField>

            <TextField
              select
              variant="outlined"
              margin="dense"
              id="codTipoPes"
              label="Tipo de pessoa"
              fullWidth
            >
              <MenuItem value="4">Civil</MenuItem>
              <MenuItem value="5">Dependente</MenuItem>
              <MenuItem value="7">Pensionista</MenuItem>
              <MenuItem value="0">Militar do Exército</MenuItem>
            </TextField>
          </div>
          <div className="dados-protocolo-2">
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="obs"
              name="obs"
              label="Observação do protocolo"
              type="text"
              multiline
              fullWidth
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="fone"
              name="fone"
              label="Telefone"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="email"
              name="email"
              label="Email"
              type="email"
              multiline
              fullWidth
            />
          </div>
        </div>
      </Form>
    </Content>
  );
}

ProtocoloForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProtocoloForm;
