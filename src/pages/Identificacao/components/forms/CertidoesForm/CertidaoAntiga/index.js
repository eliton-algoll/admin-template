import React, { useState } from 'react';

import { TextField } from 'unform-material-ui';
import { Content } from '../styles';

import Estado from '~/utils/Forms/Estado';

import api from '~/services/api';

export default function CertidaoAntiga() {
  const [cartorios, setCartorios] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [certidao, setCertidao] = useState('');

  async function handleChangeUf(e) {
    const response = await api.get(
      `/identificacao/findCidadeByPais/0/${e.target.value}`
    );

    setCidades(response.data);

    console.tron.log(response.data);
  }

  async function handleChangeCidade(e) {
    const response = await api.get(
      `/identificacao/cartorio/findCartorioCidade/${e.target.value}`
    );
    setCartorios(response.data);
  }

  return (
    <Content>
      <div className="row-1">
        <div className="col-1">
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="dataExp"
            name="dataExp"
            label="Data de Expedição"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="dataRegistro"
            name="dataRegistro"
            label="Data do registro"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
          />

          <Estado name="ufCert" label="Estado" onChange={handleChangeUf} />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="cidadeCartorio"
            name="cidadeCartorio"
            label="Cidade"
            select
            SelectProps={{
              native: true,
            }}
            onChange={handleChangeCidade}
          >
            <option value={null}>--Selecione--</option>
            {cidades.map(cidade => (
              <option value={cidade.codigo}>{cidade.nome}</option>
            ))}
          </TextField>

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name="cartorioVelho"
            label="Cartório"
            select
            SelectProps={{
              native: true,
            }}
          >
            <option value={null}>--Selecione--</option>
            {cartorios.map(cartorio => (
              <option value={cartorio.codigo}>
                {cartorio.nomeIdt.trim() ? cartorio.nomeIdt : cartorio.nome}
              </option>
            ))}
          </TextField>

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="acervo"
            name="acervo"
            label="Acervo"
            select
            SelectProps={{ native: true }}
          >
            <option value={null}>-- Selecione --</option>
            <option value="01">Próprio</option>
            <option value="02">Incorporados</option>
          </TextField>

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="tipoServico"
            name="tipoServico"
            label="serviço"
            type="text"
            defaultValue="55"
            inputProps={{
              readOnly: true,
            }}
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="anoRegistro"
            name="anoRegistro"
            label="Ano do Registro"
            type="number"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="tipoRegistro"
            name="tipoRegistro"
            label="Tipo de certidão"
            select
            SelectProps={{
              native: true,
            }}
          >
            <option value={null}>-- Selecione --</option>
            <option value="1">Registro de Nascimento</option>
            <option value="2">Registro de Casamento</option>
            <option value="3">
              Registro de Casamento Aux. (Religioso com efeito civil)
            </option>
            <option value="4">Registro de Óbitos</option>
            <option value="5">Registro de Óbitos Aux. (Natimorto)</option>
            <option value="6">Registro de Proclama</option>
          </TextField>

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="nr"
            name="nr"
            label="N° do Livro"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="folha"
            name="folha"
            label="Folha"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="termo"
            name="termo"
            label="N° do registro"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="digitoVerificador"
            name="digitoVerificador"
            label="Dígito verificador"
            type="text"
            inputProps={{ readOnly: true }}
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="tipoAverbacaoIdt"
            name="tipoAverbacaoIdt"
            label="Averbação"
            select
            SelectProps={{
              native: true,
            }}
          >
            <option value={null}>-- Selecione --</option>
            <option value="1">Divórcio</option>
            <option value="2">Separação Judicial</option>
            <option value="3">Viúvo(a)</option>
          </TextField>
        </div>
        <div className="certidao-extenso">
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="certidao"
            name="certidao"
            label="Certidão por extenso"
            type="text"
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </div>
      </div>
    </Content>
  );
}
