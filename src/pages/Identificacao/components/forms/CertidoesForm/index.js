import React, { useState } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Content } from './styles';

import CertidaoNova from './CertidaoNova';
import CertidaoAntiga from './CertidaoAntiga';

export default function CertidoesForm() {
  const [pessoa, setPessoa] = useState({});
  const [modeloCertificado, setModeloCertificado] = useState(0);

  function handleModelo(e) {
    setModeloCertificado(e.target.value);
  }

  return (
    <Content>
      <div className="row-1">
        <div className="col-1">
          <FormControl component="fieldset">
            <FormLabel component="legend">Modelo de certidão</FormLabel>
            <RadioGroup
              row
              aria-label="modeloCertidao"
              name="modeloCertidao"
              value={modeloCertificado}
              onChange={handleModelo}
            >
              <FormControlLabel
                value="0"
                control={<Radio color="primary" />}
                label="Modelo Novo"
              />
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="Modelo Antigo"
              />
            </RadioGroup>
          </FormControl>

          {modeloCertificado === '1' && <CertidaoNova />}
          {modeloCertificado === '0' && <CertidaoAntiga />}
        </div>
      </div>
    </Content>
  );
}
