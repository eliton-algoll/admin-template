import React from 'react';

import { TextField } from 'unform-material-ui';
import { Content } from '../styles';

export default function CertidaoNova() {
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
            type="text"
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="dataRegistro"
            name="dataRegistro"
            label="Data do registro"
            type="text"
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="cartorio"
            name="cartorio"
            label="Cartório"
            type="text"
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="acervo"
            name="acervo"
            label="Acervo"
            type="text"
          />

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="tipoServico"
            name="tipoServico"
            label="serviço"
            type="text"
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
            type="number"
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
            label="Certidão"
            type="text"
            inputProps={{ readOnly: true }}
            fullWidth
          />
        </div>
      </div>
    </Content>
  );
}
