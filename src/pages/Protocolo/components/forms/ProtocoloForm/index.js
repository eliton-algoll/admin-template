import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { Form } from '@unform/web';
import { TextField } from 'unform-material-ui';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { Content } from './styles';

import imageDefault from '~/assets/images/user.png';

const motivosIdt = [
  {
    value: null,
    label: '--Selecione--',
  },
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

function ProtocoloForm({
  pessoa,
  handleSubmit,
  user,
  referencia,
  loading,
  handleChange,
}) {
  // async function handleChangeIdt(e) {
  //   const idt = e.target.value;

  //   if (idt) {
  //     const response = await api.get(
  //       `/identificacao/protocolo/findDadosmilitar/${idt}`
  //     );
  //     // setPessoa(response.data.dados);
  //   }
  // }

  return (
    <Content>
      <Form ref={referencia} onSubmit={handleSubmit} name="protocoloForm">
        <div className="row-1">
          <div className="row-2">
            <div className="row-idt">
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="idt"
                name="idt"
                value={pessoa.idt}
                // onBlur={handleChangeIdt}
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
                value={pessoa.sigla}
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
                value={pessoa.dtNascimento}
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
                value={pessoa.nome}
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="nomeMae"
                name="nomeMae"
                value={pessoa.nomeMae}
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
                value={user.omNome}
                fullWidth
              />

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="dtExpedcao"
                name="dtExpedcao"
                InputProps={
                  {
                    // readOnly: true,
                  }
                }
                label="Data"
                defaultValue={format(new Date(), 'dd/MM/y')}
                type="text"
              />
            </div>
          </div>
          <div className="row-img">
            {pessoa.foto ? (
              <img
                className="imgIdentificacao"
                alt="foto"
                src={`data:image/jpeg;base64,${pessoa.foto}`}
              />
            ) : (
              <img className="imgIdentificacao" alt="foto" src={imageDefault} />
            )}
          </div>
        </div>

        <div className="row-dados-protocolo">
          <div className="dados-protocolo-1">
            <TextField
              select
              variant="outlined"
              margin="dense"
              id="motivoIdt"
              name="motivoIdt"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              label="Motivo da identificação *"
              fullWidth
            >
              {motivosIdt.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            <TextField
              select
              variant="outlined"
              margin="dense"
              id="tipoDoc"
              name="tipoDoc"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              label="Tipo de documento *"
              fullWidth
            >
              <option value={null}>--Selecione--</option>
              <option value="1">Cartão de CB/SD</option>
              <option value="2">Carteira de Identificação Militar(CIM)</option>
              <option value="3">Carteira de Identidade(CIMPM)</option>
            </TextField>

            <TextField
              select
              variant="outlined"
              margin="dense"
              id="codTipoPes"
              name="codTipoPes"
              label="Tipo de pessoa *"
              SelectProps={{
                native: true,
              }}
              onChange={handleChange}
              fullWidth
            >
              <option value={null}>--Selecione--</option>
              <option value="4">Civil</option>
              <option value="5">Dependente</option>
              <option value="7">Pensionista</option>
              <option value="0">Militar do Exército</option>
            </TextField>
          </div>
          <div className="dados-protocolo-2">
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="observacao"
              name="observacao"
              label="Observação do protocolo"
              type="text"
              multiline
              fullWidth
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="telefone"
              name="telefone"
              label="Telefone *"
              type="text"
              onChange={handleChange}
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              className="buttonSubmit"
              color="primary"
              type="submit"
              style={{
                maxWidth: '200px',
                marginTop: '10px',
                textAlign: 'center',
              }}
            >
              {loading ? 'gerando protocolo...' : 'Gerar Protocolo'}
            </Button>
          </div>
        </div>
      </Form>
    </Content>
  );
}

ProtocoloForm.propTypes = {
  pessoa: PropTypes.objectOf.isRequired,
  user: PropTypes.objectOf.isRequired,
  referencia: PropTypes.objectOf.isRequired,
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
};

ProtocoloForm.defaultProps = {
  loading: false,
};

export default connect(state => ({
  pessoa: state.pessoa,
  user: state.auth.user,
}))(ProtocoloForm);
