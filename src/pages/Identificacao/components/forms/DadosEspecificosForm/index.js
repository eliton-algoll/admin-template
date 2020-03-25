import React from 'react';

import PropTypes from 'prop-types';
import { Content } from './styles';

import DadosMilitar from './DadosMilitar';
import DadosPensionista from './DadosPensionista';
import DadosDependente from './DadosDependente';

function DadosEspecificosForm({ data }) {
  return (
    <Content>
      {data.tipPesCodTipoPes === '0' && <DadosMilitar />}
      {data.tipPesCodTipoPes === '4' && <DadosPensionista />}
      {data.tipPesCodTipoPes === '5' && <DadosDependente />}
    </Content>
  );
}

DadosEspecificosForm.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default DadosEspecificosForm;
