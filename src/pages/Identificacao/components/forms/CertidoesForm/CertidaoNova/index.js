import React, { useState } from 'react';

import { TextField } from 'unform-material-ui';

import { Content } from '../styles';

export default function CertidaoNova({
  handleChange,
  formData,
  certidao,
  handleChangeAverbacao,
  loadDigito,
  averbacao,
}) {
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
            onChange={handleChange}
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
            onChange={handleChange}
            label="Data do registro"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="cartorio"
            name="cartorio"
            onChange={handleChange}
            label="Cartório"
            type="text"
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="acervo"
            name="acervo"
            onChange={handleChange}
            label="Acervo"
            type="text"
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="tipoServico"
            name="tipoServico"
            onChange={handleChange}
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
            onChange={handleChange}
            label="Ano do Registro"
            type="number"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="tipoRegistro"
            name="tipoRegistro"
            onChange={handleChange}
            label="Tipo de Registro"
            type="number"
            inputProps={{
              placeholder: '1 - Nasc, 2 - Cas, 3 - Óbito ',
            }}
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="nr"
            name="nr"
            onChange={handleChange}
            label="N° do Livro"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="folha"
            name="folha"
            onChange={handleChange}
            label="Folha"
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="termo"
            name="termo"
            onChange={handleChange}
            label="N° do registro"
            onBlur={loadDigito}
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="digitoVerificador"
            name="digitoVerificador"
            value={formData.digito}
            label="Dígito verificador"
            InputLabelProps={{
              shrink: true,
            }}
            type="number"
            inputProps={{ readOnly: true }}
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="tipoAverbacaoIdt"
            name="tipoAverbacaoIdt"
            onChange={handleChangeAverbacao}
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
            onChange={handleChange}
            label="Certidão"
            type="text"
            value={certidao + averbacao}
            inputProps={{ readOnly: true }}
            fullWidth
          />
        </div>
      </div>
    </Content>
  );
}
